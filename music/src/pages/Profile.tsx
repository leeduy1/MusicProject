import React from 'react'
import BreadcrumbIcon from '~/assets/Icons/BreadcrumbIcon'
import ProfileAvatar from '~/assets/Icons/ProfileAvatar'
import SignoutIcon from '~/assets/Icons/SignoutIcon'

function Profile() {
  return (
    <div className='md:pt-[30px] md:pb-[70px] sm:pt-[20px] sm:pb-[50px] w-full px-[30px] mx-auto pt-[20px] relative'>
      <div className='w-full'>
        {/* BreadCrumb */}
        <div className='md: flex flex-wrap basic-full grow-0'>
          <div className='max-w-full relative'>
            <ul className='flex flex-row justify-start items-center flex-wrap max-w-full list-none'>
              <li className="before:content-[''] flex left-full h-[34px] items-center justify-center text-sm cursor-default">
                <a
                  className='duration-[0.5s] ease-out cursor-pointer opacity-75 hover:text-green-700 hover:ease-in '
                  href=''
                >
                  Home
                </a>{' '}
                <BreadcrumbIcon className='w-[20px] opacity-75' /> <p className='opacity-75'>Profile</p>
              </li>
            </ul>
          </div>
        </div>
        {/* EndBreadCrumb */}
        {/* Tiltle */}
        <div className='flex flex-wrap mx-[-15] mt-[50px] basic-full grow-0'>
          <div className='mb-0 flex flex-row justify-between items-end flex-wrap '>
            <h1 className='md:text-[36px] flex flex-row justify-start items-start font-sans font-normal text-[30px] cursor-pointer'>Profile</h1>
          </div>
        </div>
        {/* EndTittle */}
      </div>
      <div className='w-full '>
        <div className='md:mt-[30px] md:px-[20px] md:flex-row md:content-between md:items-center flex flex-col relative bg-[#16151a] items-start justify-start px-[20px] pt-[20px] rounded-lg border-solid border-[#222227] border-[1px] mt-[20px]'>
          <div className='md:mb-0 md:mr-[60px] flex flex-row justify-start items-center mb-[20px]'>
            <div className='block relative w-[40px] cursor-pointer overflow-hidden rounded-[8px] mr-[15px]'>
              <ProfileAvatar className='w-full'/>
            </div>
            <div className='flex flex-col justify-start items-start'>
              <h3 className='block text-[16px] font-normal mb-[7px] leading-none'>Phan Quí Xuân</h3>
              <span className='text-[#c0c0c0] text-[12px] leading-none'>Volna ID: 0802</span>
            </div>
          </div>
          {/* Tabs Nav */}
          <ul className='md:w-auto md:mr-auto flex flex-row justify-start items-center overflow-hidden w-full list-none' id='profile__tabs' role='tablist'>
            <li className='md:mr-[30px] mr-[20px] '>
              <a className='md:items-center md:h-[70px] md:text-[16px] flex flex-row justify-start items-start h-[40px] relative text-[14px] transition duration-[-0.5s] ease-out delay-500 hover:opacity-100 opacity-75' href="">Profile</a>
            </li>
            <li className='md:mr-[30px] mr-[20px] opacity-75 hover:opacity-100 cursor-pointer '>
              <a className='md:items-center md:h-[70px] md:text-[16px] flex flex-row justify-start items-start h-[40px] relative text-[14px]' href="">Order</a>
              </li>
            <li className='md:mr-[30px] mr-[20px] opacity-75 hover:opacity-100 cursor-pointer'>
              <a className='md:items-center md:h-[70px] md:text-[16px] flex flex-row justify-start items-start h-[40px] relative text-[14px]' href="">Princing Plan</a>
              </li>
            <li className='md:mr-[30px] mr-[20px] opacity-75 hover:opacity-100 cursor-pointer'>
              <a className='md:items-center md:h-[70px] md:text-[16px] flex flex-row justify-start items-start h-[40px] relative text-[14px]' href="">Settings</a>
              </li>
          </ul>
          {/* EndTabs Nav */}
          <button className='md:relative group md:top-auto md:right-auto flex flex-row justify-start items-center w-auto absolute top-[20px] right-[20px]'>
            <span className='opacity-75 text-[white] group-hover:text-[red] cursor-pointer'>Sign out</span>
            <SignoutIcon className='opacity-75 group-hover:text-[green]'/>
          </button>
        </div> 
      </div>
    </div>
  )
}

export default Profile
