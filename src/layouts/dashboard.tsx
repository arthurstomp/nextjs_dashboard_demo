import type { PropsWithChildren } from 'react'
import Sidebar from '@/components/sidebar'
import Footer from '@/components/footer'
 
export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="flex h-full">
        <Sidebar />
        <main className="w-full">
          {children}
          <Footer></Footer>
        </main>
      </div>
    </>
  )
}
