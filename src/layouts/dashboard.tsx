import type { PropsWithChildren } from 'react'
import Sidebar from '@/components/sidebar'
 
export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main>{children}</main>
      </div>
    </>
  )
}
