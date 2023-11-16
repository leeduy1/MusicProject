import React, { useState } from 'react'
import Breadcrumb from '~/components/BreadCrumb'
import TabNews1 from '~/components/News/TabNews1'
import TabNews2 from '~/components/News/TabNews2'
import TabNews3 from '~/components/News/TabNews3'
import TabNews4 from '~/components/News/TabNews4'
import Tittle from '~/components/Titlle'

function News() {
  const [currentTab, setCurrentTab] = useState(1)
  const onChangeTab = (tabNumber: number) => {
    setCurrentTab(tabNumber)
  }
  const handleChangeTab = () => {
    switch (currentTab) {
      case 1:
        return <TabNews1 />
      case 2:
        return <TabNews2 />
      case 3:
        return <TabNews3 />
      case 4:
        return <TabNews4 />
      default:
        break
    }
  }
  return (
    <div className='md:pt-[30px] pb-[70px] sm:pt-5 sm:pb-[50px] w-full px-[30px] mx-auto pt-[20px] relative '>
      <div className='w-full'>
        {/* BreadCrumb */}
        <Breadcrumb name={'News'} />
        {/* EndBreadCrumb */}
        {/* Tiltle */}
        <Tittle nameTittle={'News'} />
      </div>
      <div className='w-full flex flex-row gap-4 mt-5'>
        <div
          onClick={() => onChangeTab(1)}
          className={`text-[#c0c0c0] text-lg cursor-pointer ${
            currentTab === 1 ? `text-emerald` : `hover:text-white duration-500 ease-in-out`
          }`}
        >
          <span className='text-base pr-[2px]'>#</span>All
        </div>
        <div
          onClick={() => onChangeTab(2)}
          className={`text-[#c0c0c0] text-lg cursor-pointer ${
            currentTab === 2 ? `text-emerald` : `hover:text-white duration-500 ease-in-out`
          }`}
        >
          <span className='text-base pr-[2px]'>#</span>Music
        </div>
        <div
          onClick={() => onChangeTab(3)}
          className={`text-[#c0c0c0] text-lg cursor-pointer ${
            currentTab === 3 ? `text-emerald` : `hover:text-white duration-500 ease-in-out`
          }`}
        >
          <span className='text-base pr-[2px]'>#</span>Reviews
        </div>
        <div
          onClick={() => onChangeTab(4)}
          className={`text-[#c0c0c0] text-lg cursor-pointer ${
            currentTab === 4 ? `text-emerald` : `hover:text-white duration-500 ease-in-out`
          }`}
        >
          <span className='text-base pr-[2px]'>#</span>Interviews
        </div>
      </div>
      <div className='w-full'>{handleChangeTab()}</div>
    </div>
  )
}

export default News
