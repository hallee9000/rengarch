import { IMediaItem, IProject, IProjectDetail, LocalMediaItem } from "@/app/types";
import { Octokit } from "octokit";
import { v4 as uuidv4 } from 'uuid';
import { fileToBase64 } from "./utils";

const DEFAULT_BRANCH = 'test'

class Client {
  private octokit: Octokit
  private owner: string = 'hallee9000'
  private repo: string = 'rengarch'
  private branch: string = DEFAULT_BRANCH

  constructor(token?: string) {
    this.octokit = new Octokit({
      auth: token
    })
    if (typeof window !== 'undefined') {
      this.branch = localStorage.getItem('branch') || DEFAULT_BRANCH
    }
  }

  private getBasicInfo () {
    return {
      owner: this.owner,
      repo: this.repo
    }
  }

  private async getBaseSha () {
    const basicInfo = this.getBasicInfo()
    // 获取当前的 commit SHA 和 tree SHA
    const { data: refData } = await this.octokit.rest.git.getRef({
      ...basicInfo,
      ref: `heads/${this.branch}`,
    });
    let commitSha = refData.object.sha;
    const { data: commitData } = await this.octokit.rest.git.getCommit({
      ...basicInfo,
      commit_sha: commitSha,
    });
    const treeSha = commitData.tree.sha;

    if (this.branch === DEFAULT_BRANCH) {
      commitSha = await this.createBranch(commitSha)
    }
    return { commitSha, treeSha }
  }

  // 创建新分支，并返回新分支的 commit SHA 和 tree SHA
  private async createBranch (commitSha: string) {
    const basicInfo = this.getBasicInfo()
    // 创建新分支
    const newBranchName = `changes-${Date.now()}`;
    this.branch = newBranchName
    localStorage.setItem('branch', newBranchName)
    const { data: newBranch } = await this.octokit.rest.git.createRef({
      ...basicInfo,
      ref: `refs/heads/${this.branch}`,
      sha: commitSha,
    });
    return newBranch.object.sha
  }

  private async createFileBlob (file: File, pathPrefix: string) {
    const content = await fileToBase64(file);
    const fileExtension = file.name.split('.').pop();
    const filePath = `${pathPrefix}${uuidv4()}.${fileExtension}`;
    // Create a new blob for the file
    const { data: blobData } = await this.octokit.rest.git.createBlob({
      ...this.getBasicInfo(),
      content,
      encoding: "base64",
    });
    return { filePath, blobData }
  }

  private async createCommitAndPush (treeSha: string, commitSha: string, message?: string) {
    const basicInfo = this.getBasicInfo()
    // Create a new commit with the new tree
    const { data: newCommitData } = await this.octokit.rest.git.createCommit({
      ...basicInfo,
      message: message || `Add files`,
      tree: treeSha,
      parents: [commitSha],
    });

    // Update the reference to point to the new commit
    await this.octokit.rest.git.updateRef({
      ...basicInfo,
      ref: `heads/${this.branch}`,
      sha: newCommitData.sha,
    });
  }

  async fetchFileAsJson (filePath: string) {
    const { data } = await this.octokit.rest.repos.getContent({
      path: filePath,
      owner: this.owner,
      repo: this.repo,
      ref: this.branch
    });
  
    if ('content' in data) {
      const buf = Buffer.from(data.content, 'base64')
      const jsonData = JSON.parse(buf.toString('utf-8'))
      return jsonData
    }
  
    return null
  }

  async getProjects () {
    const projects = await this.fetchFileAsJson('public/data/projects/index.json')
    return (projects||[]) as IProject[]
  }

  async getProjectDetail (projectKey: string) {
    const projects = await this.getProjects()
    const project = projects.find(project => project.key === projectKey)
    if (!project) {
      return null
    }
    const mediaItems = await this.fetchFileAsJson(`public/data/projects/${projectKey}/index.json`)
    return {
      ...project,
      mediaItems: (mediaItems || []) as IMediaItem[]
    } as IProjectDetail
  }

  async createProject (projects: IProject[], newProject: Omit<IProject, 'cover'> & { coverFile: File }) {
    const basicInfo = this.getBasicInfo()
    const { commitSha, treeSha } = await this.getBaseSha()
    const { coverFile, ...restProjectAttr } = newProject
    const { filePath, blobData: coverBlobData } = await this.createFileBlob(newProject.coverFile, `public/data/projects/${newProject.key}/`)
    const newProjectData = {...restProjectAttr, cover: filePath }
    // 创建 index.json 文件的 blob
    const indexContent = JSON.stringify(projects.concat(newProjectData), null, 2)
    const { data: indexBlobData } = await this.octokit.rest.git.createBlob({
      ...basicInfo,
      content: indexContent,
      encoding: "utf-8",
    });

    // 创建 `${projectKey}/index.json` 文件的 blob
    const projectIndexContent = '[]'
    const { data: projectIndexBlobData } = await this.octokit.rest.git.createBlob({
      ...basicInfo,
      content: projectIndexContent,
      encoding: "utf-8",
    });

    // 创建文件 tree
    const { data: newTreeData } = await this.octokit.rest.git.createTree({
      ...basicInfo,
      tree: [{
        mode: "100644",
        type: "blob",
        path: `public/data/projects/index.json`,
        sha: indexBlobData.sha
      }, {
        mode: "100644",
        type: "blob",
        path: `public/data/projects/${newProject.key}/index.json`,
        sha: projectIndexBlobData.sha
      }, {
        mode: "100644",
        type: "blob",
        path: filePath,
        sha: coverBlobData.sha
      }],
      base_tree: treeSha,
    });

    await this.createCommitAndPush(newTreeData.sha, commitSha, 'Add project')
  }

  async createMediaItems (mediaItems: LocalMediaItem[], existingMediaItems: IMediaItem[], projectKey: string) {
    const basicInfo = this.getBasicInfo()
    const { commitSha, treeSha } = await this.getBaseSha()

    const files = []
    const newMediaItems = []

    // 逐个上传文件
    for (const { type, file, caption } of mediaItems) {
      const content = await fileToBase64(file);
      const fileExtension = file.name.split('.').pop();
      const filePath = `public/data/projects/${projectKey}/${uuidv4()}.${fileExtension}`;
      // Create a new blob for the file
      const { data: blobData } = await this.octokit.rest.git.createBlob({
        ...basicInfo,
        content,
        encoding: "base64",
      });

      files.push({
        path: filePath,
        sha: blobData.sha
      })
      newMediaItems.push({
        type,
        src: filePath,
        caption
      })

      console.log(`Uploaded ${file.name} to ${this.repo}/${filePath}`);
      console.log('filePath:', filePath)
    }

    // 更新项目 index.json 文件
    const indexContent = JSON.stringify(existingMediaItems.concat(newMediaItems), null, 2)
    const { data: indexBlobData } = await this.octokit.rest.git.createBlob({
      ...basicInfo,
      content: indexContent,
      encoding: "utf-8",
    });

    // Create a new tree with the files
    const { data: newTreeData } = await this.octokit.rest.git.createTree({
      ...basicInfo,
      tree: files.map(({ path, sha }) => ({
        mode: "100644",
        type: "blob",
        path,
        sha,
      })).concat({
        mode: "100644",
        type: "blob",
        path: `public/data/projects/${projectKey}/index.json`,
        sha: indexBlobData.sha
      }) as any,
      base_tree: treeSha,
    });

    await this.createCommitAndPush(newTreeData.sha, commitSha)
  }
}

export default Client
