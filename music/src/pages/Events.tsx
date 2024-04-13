import React, { useEffect, useRef, useState } from 'react'
import { BiSolidDownArrow } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import Breadcrumb from '~/components/BreadCrumb'
import ReleaseCardSlide from '~/components/ReleaseCardSlide'
import Tittle from '~/components/Titlle'

interface ISlide {
  url: string
  caption: string
  date: string
  time: string
  name: string
  address: string
  state: boolean
}
function Events() {
  const slide: ISlide[] = [
    {
      url: 'https://volna.volkovdesign.com/img/events/event1.jpg',
      caption: 'Slide 1',
      date: 'March 14, 2021',
      time: '8:00 pm',
      name: 'Sorry Babushka',
      address: '1 East Plumb Branch St.Saint Petersburg, FL 33702',
      state: true
    },
    {
      url: 'https://volna.volkovdesign.com/img/events/event2.jpg',
      caption: 'Slide 2',
      date: 'March 16, 2021',
      time: '7:00 pm',
      name: 'Big Daddy',
      address: '71 Pilgrim Avenue Chevy Chase, MD 20815',
      state: true
    },
    {
      url: 'https://volna.volkovdesign.com/img/events/event3.jpg',
      caption: 'Slide 3',
      date: 'March 23, 2021',
      time: '9:30 pm',
      name: 'Rocky Pub',
      address: '514 S. Magnolia St. Orlando, FL 32806',
      state: false
    },
    {
      url: 'https://volna.volkovdesign.com/img/events/event4.jpg',
      caption: 'Slide 4',
      date: 'March 30, 2021',
      time: '6:00 pm',
      name: 'Big Club',
      address: '123 6th St. Melbourne, FL 32904',
      state: true
    },
    {
      url: 'https://volna.volkovdesign.com/img/events/event5.jpg',
      caption: 'Slide 5',
      date: 'March 30, 2021',
      time: '10:00 pm',
      name: 'Big Daddy',
      address: '71 Pilgrim Avenue Chevy Chase, MD 20815',
      state: true
    },
    {
      url: 'https://volna.volkovdesign.com/img/events/event6.jpg',
      caption: 'Slide 6',
      date: 'March 31, 2021',
      time: '6:30 pm',
      name: 'Rocky Pub',
      address: '514 S. Magnolia St. Orlando, FL 32806',
      state: false
    }
  ]

  const listEventsMenus = ['Upcoming events', 'Past events', 'Free events']
  const [listEventsMenu, setlistEventsMenu] = useState(listEventsMenus[0])
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
    <div className='md:pt-[30px] pb-[70px] sm:pt-5 sm:pb-[50px] w-full px-[30px] mx-auto pt-[20px] relative '>
      <div className='w-full'>
        {/* BreadCrumb */}
        <Breadcrumb names={['Events']}/>
        {/* EndBreadCrumb */}
        <Tittle nameTittle={'Events'} />
      </div>
      <div className='flex flex-wrap'>
        <div className='main_filter sm:before:right-[-30px] sm:before:left-[-30px] md:p-0 md:flex-row  md:items-center md:mt-[30px] md:h-[70px] flex flex-col justify-start items-start w-full mt-5 pb-5 pt-5 relative'>
          <form
            action=''
            className='lg:mb-0 lg:w-[220px] xl:mb-0 xl:w-[250px] sm:mb-2.5 sm:w-[180px] sm:mr-[40px]  relative flex flex-row justify-start items-center w-full mb-2.5'
          >
            <input
              type='text'
              className='outline-none lg:w-[250px] md:w-[180px] w-full h-10 text-sm rounded-xl bg-[#222227] text-white border-none py:0 pr-[60px] pl-5 font-inter'
              placeholder='Date,place,etc...'
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
              Upcoming
            </div>
            <div
              onClick={() => presentTab(2)}
              className={`rounded-md px-2.5 ease-in-out duration-500 cursor-pointer ${
                currentTab === 2 ? `bg-emerald slide` : ``
              }`}
            >
              Past
            </div>
            <div
              onClick={() => presentTab(3)}
              className={`rounded-md px-2.5 ease-in-out duration-500 cursor-pointer ${
                currentTab === 3 ? `bg-emerald slide` : ``
              }`}
            >
              Free
            </div>
          </div>
        </div>
        <div className='flex flex-row flex-wrap mt-5'>
          {slide.map((choose) => {
            return (
              <div className='lg:basis-1/3 lg:max-w-[33.33333%] md:basis-1/2 md:max-w-[50%] py-2.5 pr-5'>
                <ReleaseCardSlide
                  url={choose.url}
                  date={choose.date}
                  time={choose.time}
                  name={choose.name}
                  address={choose.address}
                  state={choose.state}
                />
              </div>
            )
          })}
        </div>
        <button className='md:mx-auto md:mt-10 md:mb-0 uppercase w-[160px] h-[50px] rounded-xl bg-emerald items-center justify-center flex text-sm relative z-[2] font-medium font-inter mt-[30px] mb-0 mx-auto'>
          load more
        </button>
      </div>
    </div>
  )
}

export default Events
