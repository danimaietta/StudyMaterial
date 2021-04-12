import React, { lazy, Suspense } from 'react'
import Loading from './Others/Loading'

export default function LazySuspense() {
  const Component1 = lazy(() => import('./Others/Component1'))
  const Component2 = lazy(() => import('./Others/Component2'))
  const Component3 = lazy(() => import('./Others/Component3'))

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Component1 />
        <Component2 />
        <Component3 />
      </Suspense>
    </>
  )
}
