import Gallery from '@/components/Gallery'

export async function fetchProjects() {
  return await fetch(`${process.env.BASE_URL}/data/projects/index.json`).then(res => res.json())
}

export default async function Home() {
  const projects = await fetchProjects()
  console.log(projects)

  return (
    <div>
      <Gallery
        projects={projects}
      />
    </div>
  )
}
