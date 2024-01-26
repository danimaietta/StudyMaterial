'use client'

import { usePathname } from 'next/navigation'

export default function Login() {
  const pathname = usePathname()

  return (
      <h1>Login Page, the pathname is: {pathname}</h1>
  )
}
