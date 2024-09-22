import { useContext, useState } from "react";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { Trash } from "@phosphor-icons/react";
import { IMediaItem, LocalMediaItem, MediaType } from "@/app/types";
import { DashContext } from "@/app/dash/context";
import Image from "next/image";

interface CreateMediaModalProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  existingMediaItems: IMediaItem[]
  projectKey: string
}

export default function CreateMediaModal ({ isOpen, onOpenChange, existingMediaItems, projectKey }: CreateMediaModalProps) {
  const { client } = useContext(DashContext)
  const [mediaItems, setMediaItems] = useState<LocalMediaItem[]>([])

  function handleFileChange (event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files
    if (!files) {
      return
    }
    const newMediaItems = Array.from(files).map(file => {
      return {
        type: MediaType.Image,
        src: URL.createObjectURL(file),
        caption: file.name,
        file
      }
    })
    setMediaItems([...mediaItems, ...newMediaItems])
  }

  async function handleSubmit () {
    await client.createMediaItems(mediaItems, existingMediaItems, projectKey)

  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">添加项目</ModalHeader>
            <ModalBody>
              <div className="grid grid-cols-4 gap-2">
                {
                  mediaItems.map((mediaItem, index) => (
                    <div key={index} className="relative">
                      <Image
                        src={mediaItem.src}
                        alt={mediaItem.caption}
                        width={200}
                        height={200}
                        className="w-full h-32 mb-2 object-cover"
                      />
                      <Button className="absolute top-2 right-2" isIconOnly size="sm" color="danger">
                        <Trash size={16}/>
                      </Button>
                      <Input placeholder="标题" size="sm" value={mediaItem.caption}/>
                    </div>
                  ))
                }
                <label className="flex justify-center items-center py-12 border border-dashed">
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    multiple
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <p>点击选择图片</p>
                </label>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button onPress={onClose}>
                取消
              </Button>
              <Button color="primary" onPress={onClose} onClick={handleSubmit}>
                上传
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
