"use client"

import { IMediaItem } from "@/app/types";
import { pathToUrl } from "@/lib/utils";
import { Card, CardFooter, Image } from "@nextui-org/react";

function MediaItem ({ mediaItem }: { mediaItem: IMediaItem }) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        classNames={{
          wrapper: "w-full",
          img: "object-cover aspect-square"
        }}
        src={pathToUrl(mediaItem.src)}
      />
      <CardFooter className="flex-col items-start">
        <h3>{mediaItem.caption}</h3>
      </CardFooter>
    </Card>
  )
}

export default MediaItem
