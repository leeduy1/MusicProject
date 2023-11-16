import React, { useEffect, useState, useRef } from 'react'
import { BiSolidDownArrow } from 'react-icons/bi'
import { FiArrowRight, FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Breadcrumb from '~/components/BreadCrumb'
import ReleaseCardSlide from '~/components/ReleaseCardSlide'
import { SlideArrowNext, SlideArrowPrev } from '~/components/SlideArrow'
import Tittle from '~/components/Titlle'

interface IArtists {
  name: string
  url: string
}
interface ISlide {
  url: string
  caption: string
  date: string
  time: string
  name: string
  address: string
  state: boolean
}
function Artists() {
  const settings = {
    customPaging: function () {
      return <div className={`dot w-[10px] h-1 bg-white bg-opacity-[0.6] duration-500`}></div>
    },
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SlideArrowNext />,
    prevArrow: <SlideArrowPrev />
  }
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

  const options = [
    'All genres',
    'Alternative',
    'Blues',
    'Classical',
    'Country',
    'Electronic',
    'Hip-Hop/Rap',
    'Indie',
    'Jazz',
    'Latino',
    'R&B/Soul',
    'Rock'
  ]
  const artists: IArtists[] = [
    {
      name: 'Sơn Tùng',
      url: 'https://volna.volkovdesign.com/img/artists/artist1.jpg'
    },
    {
      name: 'Jack',
      url: 'https://volna.volkovdesign.com/img/artists/artist2.jpg'
    },
    { name: 'Tăng Duy Tân', url: 'https://volna.volkovdesign.com/img/artists/artist3.jpg' },
    { name: 'Đức Phúc', url: 'https://volna.volkovdesign.com/img/artists/artist4.jpg' },
    { name: 'Mỹ Tâm', url: 'https://volna.volkovdesign.com/img/artists/artist5.jpg' },
    { name: 'Bùi Anh Tuấn', url: 'https://volna.volkovdesign.com/img/artists/artist6.jpg' }
    // 'Sơn Tùng',
    // 'Jack',
    // 'Tăng Duy Tân',
    // 'Đức Phúc',
    // 'Mỹ Tâm',
    // 'Hà Anh Tuấn',
    // 'Bùi Anh Tuấn',
    // 'Lệ Quên',
    // 'Hòa Minzy',
    // 'Hà An Huy',
    // 'Mono',
    // 'Erik',
    // 'Quang Hà',
    // 'Tuấn Hưng',
    // 'Tăng Phúc',
    // 'Cao Thái Sơn',
    // 'Anh Tú',
    // 'Quang Vinh'
  ]

  const listArtistsMenus = ['All artists', 'Legacy artists', 'Active artists']

  const [listArtistsMenu, setlistArtistsMenu] = useState(listArtistsMenus[0])
  const [displaySelectArtistsMenu, setDisplaySelectArtistsMenu] = useState(false)
  const [genres, setGenres] = useState('All genres')
  const [displaySelect, setDisplaySelect] = useState(false)
  const [currentTab, setCurrentTab] = useState(1)

  const presentTab = (tab: number) => {
    setCurrentTab(tab)
  }
  const ulRef = useRef<HTMLUListElement>(null)
  const ulRef1 = useRef<HTMLUListElement>(null)
  const divRef = useRef<HTMLDivElement>(null)
  const divRef1 = useRef<HTMLDivElement>(null)

  const toggleListArtists = () => {
    setDisplaySelectArtistsMenu(!displaySelectArtistsMenu)
  }

  const toggleGenresList = () => {
    setDisplaySelect(!displaySelect)
  }

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (divRef.current && divRef.current.contains(e.target as Node)) {
        // Nếu người dùng click vào thẻ div, hiển thị thẻ ul
        setDisplaySelectArtistsMenu(true)
      } else if (ulRef.current && e.target instanceof Node && !ulRef.current.contains(e.target as Node)) {
        // Nếu người dùng click ra ngoài thẻ ul, ẩn thẻ ul
        setDisplaySelectArtistsMenu(false)
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (divRef1.current && divRef1.current.contains(e.target as Node)) {
        setDisplaySelect(true)
      } else if (ulRef1.current && e.target instanceof Node && !ulRef1.current.contains(e.target as Node)) {
        setDisplaySelect(false)
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
        <Breadcrumb name={'Artist'} />
        {/* EndBreadCrumb */}
        {/* Tiltle */}
        <Tittle nameTittle={'Artist'} />
      </div>
      {/* EndTittle */}
      {/* artist */}
      <div className='flex flex-wrap'>
        <div className='main_filter sm:before:right-[-30px] sm:before:left-[-30px] md:p-0 md:flex-row  md:items-center md:mt-[30px] md:h-[70px] flex flex-col justify-start items-start w-full mt-5 pb-5 pt-5 relative'>
          <form
            action=''
            className='lg:mb-0 lg:w-[220px] xl:mb-0 xl:w-[250px] sm:mb-2.5 sm:w-[180px] sm:mr-[40px]  relative flex flex-row justify-start items-center w-full mb-2.5'
          >
            <input
              type='text'
              className='lg:w-[250px] md:w-[180px] w-full h-10 text-sm rounded-xl bg-[#222227] text-white border-none py:0 pr-[60px] pl-5 font-inter'
              placeholder='Search...'
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
                  onClick={toggleListArtists}
                >
                  {listArtistsMenu}
                  <BiSolidDownArrow />
                </div>
                <ul
                  ref={ulRef}
                  className={`bg-[#222227] left-[-15px] absolute py-[10px] max-h-[120px] overflow-hidden duration-500 ease-in-out rounded-2xl ${
                    displaySelectArtistsMenu ? '' : 'hidden'
                  }`}
                >
                  {listArtistsMenus.map((artistsList) => {
                    return (
                      <li
                        onClick={() => {
                          setlistArtistsMenu(artistsList)
                          setDisplaySelectArtistsMenu(false)
                        }}
                        className={`hover:text-emerald p-2 duration-500 ease-in-out
                ${listArtistsMenu.includes(artistsList) ? `text-emerald` : `text-white`}
              `}
                      >
                        {artistsList}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className={`bg-transparent w-[150px] outline-none select-none text-base`}>
                <div
                  ref={divRef1}
                  className='flex flex-row items-center gap-2 font-inter hover:text-emerald duration-500 ease-in-out text-[#c0c0c0] text-sm'
                  onClick={toggleGenresList}
                >
                  {genres}
                  <BiSolidDownArrow />
                </div>
                <ul
                  ref={ulRef1}
                  className={`bg-[#222227] absolute py-[10px] max-h-[120px] overflow-y-auto duration-500 ease-in-out rounded-3xl ${
                    displaySelect ? '' : 'hidden'
                  }`}
                >
                  {options.map((genre) => {
                    return (
                      <li
                        onClick={() => {
                          setGenres(genre)
                          setDisplaySelect(false)
                        }}
                        className={`hover:text-emerald p-2 duration-500 ease-in-out
                    ${genres.includes(genre) ? `text-emerald` : `text-[#c0c0c0]`}
                  `}
                      >
                        {genre}
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
              Featured
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
        <div className='mx-[-15px] flex flex-wrap mt-2'>
          {artists.map((artist) => {
            return (
              <div className='md:px-[15px] px-2.5 xl:basis-1/6 xl:max-w-[100/6] md:basis-1/4 md:max-w-[25%] basis-1/2 max-w-[50%]'>
                <Link to='' className='flex flex-col justify-start items-start w-full mt-2.5 md:mt-[30px] group'>
                  <div className='artist__cover flex flex-row justify-center items-center rounded-xl relative overflow-hidden w-full'>
                    <img className='w-full h-full block relative z-[1]' src={artist.url} alt={artist.name} />
                  </div>
                  <h3 className='z-[3] text-base mb-0 text-center w-full font-normal font-inter mt-2.5 group-hover:text-emerald duration-500 ease-in-out'>
                    {artist.name}
                  </h3>
                </Link>
              </div>
            )
          })}
        </div>
        <button className='md:mx-auto md:mt-10 md:mb-0 uppercase w-[160px] h-[50px] rounded-xl bg-emerald items-center justify-center flex text-sm relative z-[2] font-medium font-inter mt-[30px] mb-0 mx-auto'>
          load more
        </button>
      </div>
      {/* endArtist */}
      {/* events */}
      <div className='flex flex-wrap'>
        {/* title */}
        <div className='w-full'>
          <div className='md:mt-[70px] md:mb-0 flex flex-row justify-between items-end flex-wrap mb-2.5 mt-[60px]'>
            <h1 className='duration-500 ease-in-out hover:text-emerald md:text-3xl flex flex-row justify-start items-start font-inter font-normal text-[26px] mb-0 relative'>
              Upcoming events
            </h1>
            <Link
              to=''
              className='flex flex-row justify-center items-center text-base text-[#c0c0c0] font-normal group hover:text-white duration-500 ease-in-out'
            >
              See all
              <FiArrowRight className='ml-1 group-hover:text-emerald duration-100 w-[22px] h-auto ease-in-out' />
            </Link>
          </div>
        </div>
        {/* endTitle */}
        <div className='mt-10 w-full'>
          <div className='slide-container block'>
            <Slider {...settings}>
              {slide.map((slideImage) => (
                <div className='pr-5'>
                  <ReleaseCardSlide
                    url={slideImage.url}
                    date={slideImage.date}
                    time={slideImage.time}
                    name={slideImage.name}
                    address={slideImage.address}
                    state={slideImage.state}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/* endEvents */}
    </div>
  )
}

export default Artists
