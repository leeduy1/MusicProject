import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
interface IDefaultLayout {
  children: React.ReactNode
}
function DefaultLayout({ children }: IDefaultLayout) {
  return (
    <div className='flex w-full'>
      <Sidebar />
      <div className='xl:block hidden w-[280px] h-[100vh] border-r-[1px] border-[#222222] relative'></div>
      <div className='xl:w-[calc(100%_-_280px)] w-full'>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default DefaultLayout
