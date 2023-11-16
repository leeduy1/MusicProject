import { AiOutlineHome, AiFillFolderOpen } from 'react-icons/ai'
import { HiOutlineUsers } from 'react-icons/hi'
import { FaMusic, FaMicrophone, FaStore, FaNewspaper } from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl'
import { BiSolidPlaylist, BiSolidDownArrow } from 'react-icons/bi'
import { ImVolumeMedium, ImVolumeLow, ImVolumeMute2, ImVolumeHigh } from 'react-icons/im'
import { TbPlayerPlay, TbPlayerSkipBack, TbPlayerSkipForward } from 'react-icons/tb'
import React, { useEffect, useState } from 'react'
import { EPages } from '~/interfaces/pages.interface'
import Logo from '../Logo'
import { Link } from 'react-router-dom'

function Sidebar() {
  const [progress, setProgress] = useState('0')
  const [isShowPages, setIsShowPages] = useState(false)
  const [volumn, setVolumn] = useState('50')
  const [currentPage, setCurrentPage] = useState<string>(EPages.HOME)
  const [itemPages, setItemPages] = useState<string>('')
  const updateProgressBar = (progressValue: string, progressBarId: string) => {
    const progressBar = document.getElementById(progressBarId)
    if (progressBar) {
      progressBar.style.backgroundSize = progressValue + '% 100%'
    }
  }

  const handleSetCurrentPage = (currentPageChange: string) => {
    currentPageChange === EPages.PAGES ? setIsShowPages((prev) => !prev) : setIsShowPages(false)
    setCurrentPage(currentPageChange)
  }

  const muteVolumn = () => {
    setVolumn('0')
  }

  const unMuteVolumn = () => {
    setVolumn('55')
  }

  const volumeIcons = [
    {
      limit: 0,
      icon: (
        <ImVolumeMute2 size={24} onClick={unMuteVolumn} className='hover:text-emerald duration-200 cursor-pointer' />
      )
    },
    {
      limit: 30,
      icon: <ImVolumeLow size={24} onClick={muteVolumn} className='hover:text-emerald duration-200 cursor-pointer' />
    },
    {
      limit: 60,
      icon: <ImVolumeMedium size={24} onClick={muteVolumn} className='hover:text-emerald duration-200 cursor-pointer' />
    },
    {
      limit: Infinity,
      icon: <ImVolumeHigh size={24} onClick={muteVolumn} className='hover:text-emerald duration-200 cursor-pointer' />
    }
  ]

  const menuData = [
    {
      page: EPages.HOME,
      icon: <AiOutlineHome />,
      text: EPages.HOME,
      url: '/'
    },
    {
      page: EPages.ARTISTS,
      icon: <HiOutlineUsers />,
      text: EPages.ARTISTS,
      url: '/artists'
    },
    {
      page: EPages.RELEASES,
      icon: <FaMusic />,
      text: EPages.RELEASES,
      url: '/releases'
    },
    {
      page: EPages.EVENTS,
      icon: <SlCalender />,
      text: EPages.EVENTS,
      url: '/events'
    },
    {
      page: EPages.PODCASTS,
      icon: <FaMicrophone />,
      text: EPages.PODCASTS,
      url: '/podcasts'
    },
    {
      page: EPages.PAGES,
      icon: <AiFillFolderOpen />,
      text: EPages.PAGES,
      pages: [
        { text: EPages.ARTISTS, url: '/artists' },
        { text: EPages.EVENTS, url: '/events' },
        { text: EPages.RELEASES, url: '/releases' },
        { text: EPages.PRODUCT, url: '/' },
        { text: EPages.ARTICLE, url: '/' },
        { text: EPages.CART, url: '/' },
        { text: EPages.PROFILE, url: '/profile' },
        { text: EPages.ABOUT, url: '/' },
        { text: EPages.CONTACTS, url: '/' },
        { text: EPages.PRICING_PLANS, url: '/' },
        { text: EPages.PRIVACY_POLICY, url: '/' },
        { text: EPages.SIGN_IN, url: '/signin' },
        { text: EPages.SIGN_UP, url: '/signup' },
        { text: EPages.FORGOT_PASSWORD, url: '/' },
        { text: EPages.PAGE_404, url: '/' }
      ]
    },
    {
      page: EPages.STORE,
      icon: <FaStore />,
      text: EPages.STORE,
      url: '/store'
    },
    {
      page: EPages.NEWS,
      icon: <FaNewspaper />,
      text: EPages.NEWS
    }
  ]

  const getVolumeIcon = (volume: string) => {
    const matchedIcon = volumeIcons.find((item) => Number(volume) <= item.limit)
    return matchedIcon ? matchedIcon.icon : null
  }

  useEffect(() => {
    updateProgressBar(progress, 'progress-bar--song')
  }, [progress])

  useEffect(() => {
    updateProgressBar(volumn, 'progress-bar--volumn')
  }, [volumn])

  return (
    <div className='xl:block z-20 hidden w-[280px] left-0 top-0 bottom-0 border-r-[1px] border-[#222222] fixed'>
      <div className='w-full h-[70px] flex items-center px-[30px]'>
        <Logo />
      </div>
      <ul className='menu flex w-full flex-col gap-5 max-h-[calc(100vh_-_330px)] py-[30px] px-[30px] overflow-y-auto  overflow-x-hidden border-t-[1px] border-[#222222]'>
        {menuData.map((item) => (
          <Link
            To={item.url}
            key={item.page}
            className={`flex flex-col w-full gap-[15px] cursor-pointer group ${
              currentPage === item.page ? 'text-emerald' : ''
            }`}
            onClick={() => handleSetCurrentPage(item.page)}
          >
            <div className='flex items-center gap-3'>
              {React.cloneElement(item.icon, {
                className: `menu-icon group-hover:text-emerald menu-icon--active ${
                  currentPage === item.page ? 'text-emerald' : 'text-grey-C0'
                }`
              })}
              <p className={`menu-text group-hover:text-white ${currentPage === item.page ? 'text-white' : ''}`}>
                {item.text}
              </p>
              {item.page === EPages.PAGES && (
                <BiSolidDownArrow
                  size={10}
                  className={`text-grey-C0 group-hover:text-emerald ${currentPage === EPages.PAGES && 'text-emerald'}`}
                />
              )}
            </div>
            {isShowPages && item.pages && (
              <ul
                className={`pages-menu-list bg-[#222227] w-[280px] relative -left-[30px] overflow-y-auto py-5 px-[64px] flex flex-col gap-[15px] ${
                  isShowPages ? 'h-[165px]' : 'h-0 py-0 px-0 gap-0'
                } transition-all duration-300 `}
              >
                {item.pages.map((page) => (
                  <li
                    onClick={() => setItemPages(page.text)}
                    className={`hover:text-emerald duration-300 ease-in-out ${
                      itemPages === page.text ? 'text-emerald' : ''
                    }`}
                  >
                    <Link className={`${console.log()}`} to={page.url}>
                      {page.text}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </Link>
        ))}
      </ul>
      <div className='flex h-[262px] w-full flex-col items-center px-[30px] py-5 gap-[10px] absolute bottom-0 border-t-[1px] border-[#222222]'>
        <div className='w-[90px] h-[90px] rounded-[12px] overflow-hidden'>
          <img src='http://volna.volkovdesign.com/img/covers/cover.svg' alt='image song' />
        </div>
        <p className='text-4 text-grey-C0 font-open-sans'>
          <span className='font-[600] text-white'>Epic Cinematic </span>– AudioPizza
        </p>
        <ul className='flex gap-[10px]'>
          <li className='group'>
            <TbPlayerSkipBack
              size={24}
              className='group-hover:text-emerald group-hover:scale-110 duration-200 cursor-pointer'
            />
          </li>
          <li className='group'>
            <TbPlayerPlay
              size={24}
              className='group-hover:text-emerald group-hover:scale-110 duration-200 cursor-pointer'
            />
          </li>
          <li className='group'>
            <TbPlayerSkipForward
              size={24}
              className='group-hover:text-emerald group-hover:scale-110 duration-200 cursor-pointer'
            />
          </li>
        </ul>
        <div className='flex gap-[10px] items-center w-full'>
          <input
            id='progress-bar--song'
            type='range'
            className='h-[5px] w-full'
            min='0'
            max='100'
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
          />
          <p className='text-[14px] text-grey-C0'>-00:47</p>
        </div>
        <div className='flex justify-between w-full'>
          <div className='flex items-center gap-[10px]'>
            {getVolumeIcon(volumn)}
            <input
              id='progress-bar--volumn'
              type='range'
              className='h-[5px] w-[75px]'
              min='0'
              max='100'
              value={volumn}
              onChange={(e) => setVolumn(e.target.value)}
            />
          </div>
          <BiSolidPlaylist size={24} onClick={muteVolumn} className='hover:text-emerald duration-200 cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
