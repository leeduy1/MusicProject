import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BreadcrumbIcon from '~/assets/Icons/BreadcrumbIcon'
import ProfileAvatar from '~/assets/Icons/ProfileAvatar'
import SignoutIcon from '~/assets/Icons/SignoutIcon'
import TabOne from '~/components/Profiles/TabOne'
import TabThree from '~/components/Profiles/TabThree'
import TabTwo from '~/components/Profiles/TabTwo'
import TabFour from '~/components/Profiles/TabFour'

function Profile() {
  //hooks useState, useEffect, ...
  const [currentTab, setCurrentTab] = useState(1)
  const onChangeTab = (tabNumber: number) => {
    setCurrentTab(tabNumber)
  }
  useEffect(() => {
    console.log(currentTab)
  }, [currentTab])

  const handleChangeTab = () => {
    switch (currentTab) {
      case 1:
        return <TabOne />
      case 2:
        return <TabTwo />
      case 3:
        return <TabThree />
      case 4:
        return <TabFour />
      default:
        break
    }
  }
  return (
    <div className='md:pt-[30px] pb-[70px] sm:pt-5 sm:pb-[50px] w-full px-[30px] mx-auto pt-[20px] relative'>
      <div className='w-full'>
        {/* BreadCrumb */}
        <div className='md: flex flex-wrap basic-full grow-0 shrink-0'>
          <div className='max-w-full relative'>
            <ul className='flex flex-row justify-start items-center flex-wrap max-w-full list-none'>
              <li className="before:content-[''] flex left-full h-[34px] items-center justify-center text-sm cursor-default">
                <Link
                  className='duration-[0.5s] ease-out cursor-pointer opacity-75 hover:text-green-700 hover:ease-in '
                  to='/'
                >
                  Home
                </Link>{' '}
                <BreadcrumbIcon className='w-[20px] opacity-75' /> <p className='opacity-75'>Profile</p>
              </li>
            </ul>
          </div>
        </div>
        {/* EndBreadCrumb */}
        {/* Tiltle */}
        <div className='flex flex-wrap mx-[-15] mt-[50px] basic-full grow-0'>
          <div className='mb-0 flex flex-row justify-between items-end flex-wrap '>
            <h1 className='md:text-[36px] flex flex-row justify-start items-start font-sans font-normal text-[30px] cursor-default'>
              Profile
            </h1>
          </div>
        </div>
        {/* EndTittle */}
      </div>
      <div className='w-full '>
        <div className='md:mt-[30px] md:px-[20px] md:flex-row md:content-between md:items-center flex flex-col relative bg-[#16151a] items-start justify-start px-[20px] pt-[20px] rounded-lg border-solid border-[#222227] border-[1px] mt-[20px]'>
          <div className='md:mb-0 md:mr-[60px] flex flex-row justify-start items-center mb-[20px]'>
            <div className='block relative w-[40px] cursor-pointer overflow-hidden rounded-[8px] mr-[15px]'>
              <ProfileAvatar className='w-full' />
            </div>
            <div className='flex flex-col justify-start items-start'>
              <h3 className='block text-[16px] font-normal mb-[7px] leading-none'>Phan Quí Xuân</h3>
              <span className='text-[#c0c0c0] text-[12px] leading-none'>Volna ID: 0802</span>
            </div>
          </div>
          {/* Tabs Nav */}
          <ul
            className='md:w-auto md:mr-auto flex flex-row justify-start items-center overflow-hidden w-full list-none'
            id='profile__tabs'
            role='tablist'
          >
            <li onClick={() => onChangeTab(1)} className={`md:mr-[30px] mr-5 cursor-pointer`}>
              <Link
                className={`before:contents-["*"] before:absolute before:bottom-0 before:right-0 before:left-0 before:h-0.5 before:block before:bg-[#25a56a] before:duration-[0.5s] before:ease-in-out before:rounded-t-sm before:rounded-b-none md:items-center md:h-[70px] md:text-[16px] flex flex-row justify-start items-start h-[40px] relative text-[14px] duration-[0.5s] ease-in-out hover:opacity-100
                  ${
                    currentTab === 1
                      ? 'before:opacity-100 cursor-default before:translate-y-0 opacity-100'
                      : 'before:opacity-0 before:translate-y-0.5 opacity-60'
                  }
                `}
                to=''
              >
                Profile
              </Link>
            </li>
            <li onClick={() => onChangeTab(2)} className='md:mr-[30px] mr-5 cursor-pointer'>
              <Link
                className={`before:contents-["*"] before:absolute before:bottom-0 before:right-0 before:left-0 before:h-0.5 before:block before:bg-[#25a56a] before:duration-[0.5s] before:ease-in-out before:rounded-t-sm before:rounded-b-none md:items-center md:h-[70px] md:text-[16px] flex flex-row justify-start items-start h-[40px] relative text-[14px] duration-[0.5s] ease-in-out hover:opacity-100
               ${
                 currentTab === 2
                   ? 'before:opacity-100 cursor-default before:translate-y-0 opacity-100'
                   : 'before:opacity-0 before:translate-y-0.5 opacity-60'
               }
             `}
                to=''
              >
                Order
              </Link>
            </li>
            <li onClick={() => onChangeTab(3)} className='md:mr-[30px] mr-5 cursor-pointer'>
              <Link
                className={`before:contents-["*"] before:absolute before:bottom-0 before:right-0 before:left-0 before:h-0.5 before:block before:bg-[#25a56a] before:duration-[0.5s] before:ease-in-out before:rounded-t-sm before:rounded-b-none md:items-center md:h-[70px] md:text-[16px] flex flex-row justify-start items-start h-[40px] relative text-[14px] duration-[0.5s] ease-in-out hover:opacity-100
                ${
                  currentTab === 3
                    ? 'before:opacity-100 cursor-default before:translate-y-0 opacity-100'
                    : 'before:opacity-0 before:translate-y-0.5 opacity-60'
                }
              `}
                to=''
              >
                Princing Plan
              </Link>
            </li>
            <li onClick={() => onChangeTab(4)} className='md:mr-[30px] mr-5 cursor-pointer'>
              <Link
                className={`before:contents-["*"] before:absolute before:bottom-0 before:right-0 before:left-0 before:h-0.5 before:block before:bg-[#25a56a] before:duration-[0.5s] before:ease-in-out before:rounded-t-sm before:rounded-b-none md:items-center md:h-[70px] md:text-[16px] flex flex-row justify-start items-start h-[40px] relative text-[14px] duration-[0.5s] ease-in-out hover:opacity-100
                ${
                  currentTab === 4
                    ? 'before:opacity-100 cursor-default before:translate-y-0 opacity-100'
                    : 'before:opacity-0 before:translate-y-0.5 opacity-60'
                }
              `}
                to=''
              >
                Settings
              </Link>
            </li>
          </ul>
          {/* EndTabs Nav */}
          <button className='md:relative group md:top-auto md:right-auto flex flex-row justify-start items-center w-auto absolute top-5 right-5'>
            <span className='opacity-75 duration-[0.5s] ease-in-out mr-[10px] md:block hidden group-hover:opacity-100 cursor-pointer'>
              Sign out
            </span>
            <SignoutIcon className='opacity-75 group-hover:text-[#25a56a] duration-[0.5s] ease-in-out' />
          </button>
        </div>
        {/* content tabs */}
        <div className='w-full'>
          {/* {currentTab === 1 ? <TabOne /> : <TabTwo />} */}
          {handleChangeTab()}

          {/* <div className='duration-[0.4s] ease-linear delay-0 transition-opacity' id='tab-3'>Tab 3</div>
          <div className='duration-[0.4s] ease-linear delay-0 transition-opacity' id='tab-4'>Tab 4</div> */}
        </div>
      </div>
    </div>
  )
}

export default Profile
