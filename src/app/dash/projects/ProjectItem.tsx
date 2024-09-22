'use client'
import { useRouter } from 'next/navigation';
import { Card, CardHeader, Image } from "@nextui-org/react";

export default function ProjectItem ({ project }: { project: Project }) {
  const router = useRouter()

  return (
    <Card
      key={project.key}
      className="flex border-none"
      shadow="sm"
      isPressable
      onPress={() => router.push(`/dash/projects/${project.key}`)}
    >
      <CardHeader className="flex gap-3">
        <div className="flex-1 text-left">
          <h3>{project.name}</h3>
          <p className="text-sm text-slate-600">{project.basicInfo}</p>
        </div>
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={64}
          width={64}
          radius="lg"
          src={project.cover}
        />
      </CardHeader>
    </Card>
  );
}
