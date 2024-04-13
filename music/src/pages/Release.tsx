import React from 'react'
import Breadcrumb from '~/components/BreadCrumb'
import Tittle from '~/components/Titlle'

function Release() {
  return (
    <div className='md:pt-[30px] pb-[70px] sm:pt-5 sm:pb-[50px] w-full px-[30px] mx-auto pt-[20px] relative'>
      <div className='w-full'>
        {/* BreadCrumb */}
        <Breadcrumb names={['Releases', 'Release']} />
        {/* EndBreadCrumb */}
        {/* Tiltle */}
        <div className='flex flex-wrap mx-[-15] mt-[50px] basic-full grow-0'>
          <Tittle nameTittle={'Profile'} />
        </div>
        {/* EndTittle */}
      </div>
    </div>
  )
}

export default Release
