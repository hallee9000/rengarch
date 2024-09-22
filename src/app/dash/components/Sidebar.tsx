"use client"
import { cn } from "@nextui-org/react"
import Link from "next/link"
import { usePathname } from 'next/navigation'

function Sidebar () {
  const pathname = usePathname()

  return (
    <nav className="w-32 px-4 py-8 flex flex-col">
      <ul>
        <li className="mb-2">
          <Link
            href="/dash/projects"
            className={
              cn("flex px-3 py-2 rounded-md hover:bg-slate-100", {
                "bg-slate-100": pathname === "/dash/projects"
              })
            }
          >Projects</Link>
        </li>
        <li>
          <Link
            href="/dash/arts"
            className={
              cn("flex px-3 py-2 rounded-md hover:bg-slate-100", {
                "bg-slate-100": pathname === "/dash/arts"
              })
            }
          >Arts</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
