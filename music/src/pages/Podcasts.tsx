import React, { useEffect, useRef, useState } from 'react'
import { BiSolidDownArrow } from 'react-icons/bi'
import { BsPlay } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Breadcrumb from '~/components/BreadCrumb'
import EventPart from '~/components/Event'
import Tittle from '~/components/Titlle'

interface IPodcast {
  state: boolean
  url: string
  viewers: string
  img: string
  name: string
}
function Podcasts() {
  const podcastList: IPodcast[] = [
    {
      state: true,
      url: 'https://www.youtube.com/watch?v=FN7ALfpGxiI&pp=ygUKc8ahbiB0w7luZw%3D%3D',
      viewers: '6.5k viewers',
      img: 'https://volna.volkovdesign.com/img/live/1.jpg',
      name: 'Beautiful Stories From Anonymous People'
    },
    {
      state: true,
      url: 'https://www.youtube.com/watch?v=Llw9Q6akRo4&pp=ygUKc8ahbiB0w7luZw%3D%3D',
      viewers: '1.7k viewers',
      img: 'https://volna.volkovdesign.com/img/live/2.jpg',
      name: 'Song Exploder'
    },
    {
      state: true,
      url: 'https://www.youtube.com/watch?v=xypzmu5mMPY&pp=ygUKc8ahbiB0w7luZw%3D%3D',
      viewers: '924 viewers',
      img: 'https://volna.volkovdesign.com/img/live/3.jpg',
      name: 'Broken Record'
    },
    {
      state: true,
      url: 'https://www.youtube.com/watch?v=r1OtnOs-utU&pp=ygUKc8ahbiB0w7luZw%3D%3D',
      viewers: '638 viewers',
      img: 'https://volna.volkovdesign.com/img/live/4.jpg',
      name: 'Desert Island Discs'
    },
    {
      state: false,
      url: 'https://www.youtube.com/watch?v=-vtBgNxMyZI&pp=ygUKc8ahbiB0w7luZw%3D%3D',
      viewers: '588 viewers',
      img: 'https://volna.volkovdesign.com/img/live/5.jpg',
      name: 'Riffs On Riffs'
    },
    {
      state: false,
      url: 'https://www.youtube.com/watch?v=PdbsnGuduvo&pp=ygUKc8ahbiB0w7luZw%3D%3D',
      viewers: '638 viewers',
      img: 'https://volna.volkovdesign.com/img/live/6.jpg',
      name: 'Popcast'
    },
    {
      state: false,
      url: 'https://www.youtube.com/watch?v=knW7-x7Y7RE&pp=ygUKc8ahbiB0w7luZw%3D%3D',
      viewers: '9.5k viewers',
      img: 'https://volna.volkovdesign.com/img/live/7.jpg',
      name: 'Rolling Stone Music Now'
    },
    {
      state: false,
      url: 'https://www.youtube.com/watch?v=Thf6-faRGI4&pp=ygUKc8ahbiB0w7luZw%3D%3D',
      viewers: '1.6K viewers',
      img: 'https://volna.volkovdesign.com/img/live/8.jpg',
      name: 'Song VS .Song'
    },
    {
      state: false,
      url: 'https://www.youtube.com/watch?v=2-zSSzg8i3Y&pp=ygUKc8ahbiB0w7luZw%3D%3D',
      viewers: '638 viewers',
      img: 'https://volna.volkovdesign.com/img/live/9.jpg',
      name: 'Disgraceland'
    }
  ]
  const listEventsMenus = ['Live', 'Popular', 'Newest']
  const [listEventsMenu, setlistEventsMenu] = useState(listEventsMenus[1])
  const [displaySelectEventsMenu, setDisplaySelectEventsMenu] = useState(false)
  const [currentTab, setCurrentTab] = useState(1)
  const presentTab = (tab: number) => {
    setCurrentTab(tab)
  }
  const ulRef = useRef<HTMLUListElement>(null)
  const divRef = useRef<HTMLDivElement>(null)

  const toggleListEvents = () => {
    setDisplaySelectEventsMenu(!displaySelectEventsMenu)
  }
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (divRef.current && divRef.current.contains(e.target as Node)) {
        setDisplaySelectEventsMenu(true)
      } else if (ulRef.current && e.target instanceof Node && !ulRef.current.contains(e.target as Node)) {
        setDisplaySelectEventsMenu(false)
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])
  return (
    <div className='md:pt-[30px] pb-[70px] sm:pt-5 sm:pb-[50px] w-full px-[30px] mx-auto pt-[20px] relative'>
      <div className='w-full'>
        {/* BreadCrumb */}
        <Breadcrumb name='Podcasts' />
        {/* EndBreadCrumb */}
        {/* Tiltle */}
        <Tittle nameTittle={'Podcasts'} />
      </div>
      {/* EndTittle */}
      <div className='flex flex-row'>
        <div className='main_filter sm:before:right-[-30px] sm:before:left-[-30px] md:p-0 md:flex-row  md:items-center md:mt-[30px] md:h-[70px] flex flex-col justify-start items-start w-full mt-5 pb-5 pt-5 relative'>
          <form
            action=''
            className='lg:mb-0 lg:w-[220px] xl:mb-0 xl:w-[250px] sm:mb-2.5 sm:w-[180px] sm:mr-[40px]  relative flex flex-row justify-start items-center w-full mb-2.5'
          >
            <input
              type='text'
              className='outline-none lg:w-[250px] md:w-[180px] w-full h-10 text-sm rounded-xl bg-[#222227] text-white border-none py:0 pr-[60px] pl-5 font-inter'
              placeholder='Search'
            />
            <button className='absolute flex lg:right-1 xl:right-8 right-5  top-0 h-[40px] w-auto flex-row justify-center items-center '>
              <FiSearch className='absolute w-5 h-auto hover-text-[#25a56a] duration-300 ease-in-out' />
            </button>
          </form>
          <div className='md:p-0 flex flex-wrap flex-row justify-start items-center w-full relative py-0 px-5 z-20'>
            <div className='flex flex-row my-2'>
              <div className={`bg-transparent mr-[30px] w-[120px] outline-none select-none cursor-pointer`}>
                <div
                  ref={divRef}
                  className='bg-transparent flex flex-row items-center gap-2 w-[150px] outline-none hover:text-emerald duration-500 ease-in-out text-[#c0c0c0] text-sm'
                  onClick={toggleListEvents}
                >
                  {listEventsMenu}
                  <BiSolidDownArrow />
                </div>
                <ul
                  ref={ulRef}
                  className={`bg-[#222227] left-[-15px] absolute py-[10px] max-h-[120px] overflow-hidden duration-500 ease-in-out rounded-2xl ${
                    displaySelectEventsMenu ? '' : 'hidden'
                  }`}
                >
                  {listEventsMenus.map((eventsList) => {
                    return (
                      <li
                        onClick={() => {
                          setlistEventsMenu(eventsList)
                          setDisplaySelectEventsMenu(false)
                        }}
                        className={`hover:text-emerald p-2 duration-500 ease-in-out text-sm
                ${listEventsMenu.includes(eventsList) ? `text-emerald` : `text-white`}
              `}
                      >
                        {eventsList}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className='flex flex-row z-10 gap-3 py-3 px-3 rounded-xl bg-[#222227] text-[#c0c0c0] items-center'>
            <div
              onClick={() => presentTab(1)}
              className={`rounded-md px-2.5 ease-in-out duration-500 cursor-pointer ${
                currentTab === 1 ? `bg-emerald slide` : ``
              }`}
            >
              Live
            </div>
            <div
              onClick={() => presentTab(2)}
              className={`rounded-md px-2.5 ease-in-out duration-500 cursor-pointer ${
                currentTab === 2 ? `bg-emerald slide` : ``
              }`}
            >
              Popular
            </div>
            <div
              onClick={() => presentTab(3)}
              className={`rounded-md px-2.5 ease-in-out duration-500 cursor-pointer ${
                currentTab === 3 ? `bg-emerald slide` : ``
              }`}
            >
              Newest
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap'>
        {podcastList.map((option) => {
          return (
            <div className='md:px-[15px] px-2.5 lg:basis-1/3 lg:max-w-[33.3333333%] sm:basis-1/2 sm:max-w-[50%] basis-full max-w-full'>
              <div className='md:mt-[30px] flex flex-row justify-start items-start flex-wrap mt-5 relative overflow-hidden group '>
                <Link
                  className='w-full rounded-xl overflow-hidden relative flex flex-row justify-center items-center live__cover'
                  to={option.url}
                >
                  <img src={option.img} alt='' />
                </Link>
                <span
                  className={`absolute top-3 left-5 bg-[#eb5757] px-2 items-center z-[3] cursor-default w-auto h-[24px] rounded-lg uppercase text-xs 
                  ${option.state ? `flex` : `hidden`}`}
                >
                  live
                </span>
                <BsPlay
                  className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 scale-0 ease-in-out duration-300 group-hover:scale-[1]'
                  size='60px'
                />
                <h3 className='text-base font-inter group-hover:text-emerald duration-500 ease-in-out pt-2 font-medium'>
                  <Link to={option.url}>{option.name}</Link>
                </h3>
                <span className='absolute top-[70%] left-[5%] bg-[#222227] px-2 rounded-md z-[3] py-1'>
                  {option.viewers}
                </span>
              </div>
            </div>
          )
        })}
      </div>
      <button className='md:mx-auto md:mt-10 md:mb-0 uppercase w-[160px] h-[50px] rounded-xl bg-emerald items-center justify-center flex text-sm relative z-[2] font-medium font-inter mt-[30px] mb-0 mx-auto'>
        load more
      </button>
      <EventPart />
    </div>
  )
}

export default Podcasts
