'use client'

import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";

export default function Arts () {

  return (
    <div className="flex-1 px-4 py-8">
      <h1 className="mb-4 text-left text-3xl font-bold">Arts</h1>
      <div className="grid grid-cols-3 gap-8">
        <Card
          className="flex border-none"
          shadow="sm"
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardHeader className="flex gap-3">
            <div className="flex-1 text-left">
              <h3>红墙</h3>
              <p className="text-sm text-slate-600">2022 北京</p>
            </div>
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={64}
              width={64}
              radius="lg"
              src="https://nextui.org/images/hero-card.jpeg"
            />
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
