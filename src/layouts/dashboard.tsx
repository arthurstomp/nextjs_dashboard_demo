import type { PropsWithChildren } from 'react'
import Sidebar from '@/components/sidebar'
 
export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="w-4/5">{children}</main>
      </div>
    </>
  )
}
