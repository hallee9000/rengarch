'use client'
import Client from '@/lib/octokit'
import { createContext, ReactNode } from 'react'
import Cookies from 'js-cookie'

export const DashContext = createContext({
  client: Client.prototype
})

export const DashProvider = ({ children }: { children: ReactNode }) => {
  const accessToken = Cookies.get('githubAccessToken')
  const client = new Client(accessToken)

  return (
    <DashContext.Provider value={{ client }}>
      {children}
    </DashContext.Provider>
  )
}
