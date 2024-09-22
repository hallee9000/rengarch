export interface IProject {
  key: string
  name: string
  basicInfo: string
  description: string
  cover: string
}

export enum MediaType {
  Image = 'image',
  Video = 'video'
}

export interface IMediaItem {
  type: MediaType
  src: string
  caption: string
}

export interface LocalMediaItem extends IMediaItem {
  file: File
}

export interface IProjectDetail extends IProject {
  mediaItems: IMediaItem[]
}
