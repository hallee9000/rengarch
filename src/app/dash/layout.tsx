import { cookies } from 'next/headers'
import Sidebar from "./components/Sidebar"
import SignIn from './components/SignIn'
import { DashProvider } from './context'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const accessTokenInCookie = cookieStore.get('githubAccessToken')

  if (!accessTokenInCookie) {
    return (
      <SignIn/>
    )
  }

  return (
    <DashProvider>
      <div className="flex justify-center">
        <section className="flex w-full max-w-[1080px]">
          <Sidebar/>
          {children}
        </section>
      </div>
    </DashProvider>
  )
}