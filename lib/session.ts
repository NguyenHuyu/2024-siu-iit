import 'server-only'

import { SignJWT, jwtVerify, JWTPayload } from 'jose'
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'

const key = new TextEncoder().encode(process.env.AUTH_SECRET_KEY)

export const cookie: {
   name: string
   options: Partial<ResponseCookie>
   duration: number
} = {
   name: 'session',
   options: {
      httpOnly: true,
      sameSite: 'lax',
      path: '/'
   },
   duration: 24 * 60 * 60 * 1000
}

export async function encrypt(payload: JWTPayload) {
   return new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('1day')
      .sign(key)
}

export async function decrypt(session: string): Promise<any> {
   try {
      const { payload } = await jwtVerify(session, key, {
         algorithms: ['HS256']
      })
      return payload
   } catch (error) {
      return null
   }
}

export async function createSession(payload: any) {
   const expires = new Date(Date.now() + cookie.duration)
   const session = await encrypt({
      payload,
      expires
   })
   cookies().set(cookie.name, session, { ...cookie.options, expires })
}

export async function verifySession() {
   const cookieValue = cookies().get(cookie.name)?.value as string
   const session = await decrypt(cookieValue)

   if (!session) {
      return null
   }

   return session
}

export function deleteSession() {
   cookies().delete('session')
}
