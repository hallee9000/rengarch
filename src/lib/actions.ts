'use server'

import { cookies } from 'next/headers'

export async function createTokenCookie(accessToken: string) {
  const expiresAt = new Date(Date.now() + 10 * 366 * 24 * 60 * 60 * 1000)
  cookies().set('githubAccessToken', accessToken, {
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}
