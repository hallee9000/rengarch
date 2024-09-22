'use client'
import { useContext, useState, useEffect } from "react";
import { DashContext } from "@/app/dash/context";
import MediaItem from "./MediaItem";
import { Button, useDisclosure } from "@nextui-org/react";
import { Plus } from "@phosphor-icons/react";
import CreateMediaModal from "./CreateMediaModal";
import { IProjectDetail } from "@/app/types";

export default function ProjectDetail ({ params }: { params: { projectKey: string } }) {
  const { client } = useContext(DashContext)
  const [projectDetail, setProjectDetail] = useState<IProjectDetail|null>(null)
  const [loading, setLoading] = useState(true)
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  useEffect(() => {
    client.getProjectDetail(params.projectKey)
      .then(projectDetail => {
        setProjectDetail(projectDetail)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [client, params.projectKey])

  if (loading) {
    return (
      <div className="flex-1 px-4 py-8">
        <h1 className="mb-4 text-left text-3xl font-bold">Loading...</h1>
      </div>
    )
  }

  if (!projectDetail) {
    return (
      <div className="flex-1 px-4 py-8">
        <h1 className="mb-4 text-2xl text-left">Project not found</h1>
      </div>
    )
  }

  return (
    <div className="flex-1 px-4 py-8">
      <div className="flex items-center justify-between mb-2 text-left">
        <div>
          <h1 className="text-2xl">{ projectDetail.name }</h1>
          <p>{ projectDetail.basicInfo }</p>
        </div>
        <Button color="primary" onClick={onOpen}><Plus/>添加</Button>
      </div>
      <div className="mb-8">{projectDetail.description}</div>
      <div className="grid grid-cols-4 gap-8">
        {
          projectDetail.mediaItems.map((mediaItem, index) => (
            <MediaItem key={index} mediaItem={mediaItem} />
          ))
        }
      </div>
      <CreateMediaModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        existingMediaItems={projectDetail.mediaItems}
        projectKey={params.projectKey}
      />
    </div>
  )
}
