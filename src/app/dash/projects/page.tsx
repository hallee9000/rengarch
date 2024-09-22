'use client'
import { useContext, useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import { DashContext } from "@/app/dash/context";
import { IProject } from "@/app/types";
import { Button, useDisclosure } from "@nextui-org/react";
import { Plus } from "@phosphor-icons/react";
import CreateProjectModal from "./CreateProjectModal";

export default function Projects () {
  const { client } = useContext(DashContext)
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState<IProject[]>([])
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  useEffect(() => {
    client.getProjects()
      .then(projects => {
        setProjects(projects)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [client])

  if (loading) {
    return (
      <div className="flex-1 px-4 py-8">
        <h1 className="mb-4 text-left text-3xl font-bold">Loading...</h1>
      </div>
    )
  }

  return (
    <div className="flex-1 px-4 py-8">
      <h1 className="flex items-center justify-between mb-8 text-left text-3xl font-bold">
        Projects
        <Button color="primary" onClick={onOpen}><Plus/>添加</Button>
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {
          projects.map(project => (
            <ProjectItem
              key={project.key}
              project={project}
            />
          ))
        }
      </div>
      <CreateProjectModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        existingProjects={projects}
      />
    </div>
  )
}
