'use client'

import { usePathname, useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()
  const pathname = usePathname()
  
  const goForward = () => router.forward()
  const goBackward = () => router.back()
  
  return (
      <>
        <h1>Login Page, the pathname is: {pathname}</h1>
        <button onClick={goBackward}>go backward</button>
        <br />
        <button onClick={goForward}>go forward</button>
      </>
  )
}
