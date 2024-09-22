import { ChangeEvent, useContext, useState } from "react";
import Image from "next/image";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea } from "@nextui-org/react";
import { IProject } from "@/app/types";
import { DashContext } from "@/app/dash/context";

interface CreateProjectModalProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  existingProjects: IProject[]
}

export default function CreateProjectModal ({ isOpen, onOpenChange, existingProjects }: CreateProjectModalProps) {
  const { client } = useContext(DashContext)
  const [key, setKey] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [basicInfo, setBasicInfo] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [coverFile, setCoverFile] = useState<File|null>(null)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  function handleFileChange (event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files
    if (!files) {
      return
    }
    setCoverFile(files[0])
  }

  function handleChange (e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    switch (name) {
      case 'key':
        setKey(value)
        break
      case 'name':
        setName(value)
        break
      case 'basicInfo':
        setBasicInfo(value)
        break
      case 'description':
        setDescription(value)
        break
    }
  }

  async function handleSubmit () {
    if (!coverFile) {
      return
    }
    setIsSubmitting(true)
    await client.createProject(existingProjects, {
      key,
      name,
      basicInfo,
      description,
      coverFile
    })
    onOpenChange(false)
    setIsSubmitting(false)
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">添加项目</ModalHeader>
            <ModalBody>
              <label className="relative flex justify-center items-center py-16 border border-dashed cursor-pointer">
                {
                  coverFile && (
                    <Image
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      src={URL.createObjectURL(coverFile)}
                      width={320}
                      height={200}
                      alt="cover"
                    />
                  )
                }
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <p>点击上传封面</p>
              </label>
              <Input label="项目路径" size="sm" name="key" value={key} onChange={handleChange}/>
              <Input label="项目名称" size="sm" name="name" value={name} onChange={handleChange}/>
              <Input label="基本信息" size="sm" name="basicInfo" value={basicInfo} onChange={handleChange}/>
              <Textarea label="项目描述" size="sm" name="description" value={description} onChange={handleChange}/>
            </ModalBody>
            <ModalFooter>
              <Button onPress={onClose}>
                取消
              </Button>
              <Button color="primary" onClick={handleSubmit} isLoading={isSubmitting}>
                创建
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
