import React, { useEffect, useRef, useState } from 'react'
import { BiSolidDownArrow } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import AddIcon from '~/assets/Icons/AddIcon'
import Breadcrumb from '~/components/BreadCrumb'
import Tittle from '~/components/Titlle'
interface IElement {
  url: string
  name: string
  price: string
  state: boolean
}

function Store() {
  const elements: IElement[] = [
    { url: 'https://volna.volkovdesign.com/img/store/item1.jpg', name: 'Vinyl Player', price: '$1 099', state: true },
    { url: 'https://volna.volkovdesign.com/img/store/item2.jpg', name: 'Microphone R4', price: '$799', state: false },
    { url: 'https://volna.volkovdesign.com/img/store/item3.jpg', name: 'Music Blank', price: '$3.99', state: true },
    {
      url: 'https://volna.volkovdesign.com/img/store/item4.jpg',
      name: 'Headphones ZR-991',
      price: '$199',
      state: false
    },
    { url: 'https://volna.volkovdesign.com/img/store/item5.jpg', name: 'Piano', price: '$11 899', state: false },
    { url: 'https://volna.volkovdesign.com/img/store/item6.jpg', name: 'Vinyl Player', price: '$2 499', state: false },
    { url: 'https://volna.volkovdesign.com/img/store/item7.jpg', name: 'Guitar', price: '$299', state: false },
    { url: 'https://volna.volkovdesign.com/img/store/item8.jpg', name: 'Microphone R4s', price: '$199', state: false }
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
        <Breadcrumb name={'Store'} />
        {/* EndBreadCrumb */}
        {/* Tiltle */}
        <Tittle nameTittle={'Store'} />
      </div>
      {/* EndTittle */}
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
      </div>
      <div className='flex flex-wrap'>
        {elements.map((element) => {
          return (
            <div className='md:basis-1/4 md:max-w-[25%] sm:basis-1/3 sm:max-w-[33.333333%] basis-1/2 max-w-[50%] pr-5'>
              <div className='md:mt-[30px] relative mt-5 rounded-xl bg-[#212529] w-full overflow-hidden flex flex-col justify-start items-start p-5'>
                <div className='product w-full relative rounded-xl overflow-hidden select-none group'>
                  <img src={element.url} alt='' className='w-full relative block z-[1]' />
                  <button className='cursor-pointer absolute top-1/2 left-1/2 rounded-xl w-[48px] h-[48px] flex flex-row justify-center items-center mt-[-24px] ml-[-24px] z-[5] bg-[#222227] scale-0 group-hover:scale-[1] ease-in-out duration-500'>
                    <AddIcon className='fill-white hover:fill-emerald w-[24px] h-auto duration-500 ease-in-out'/>
                  </button>
                </div>
                <h3 className='block w-full text-[19px] font-normal mb-0 text-ellipsis mt-[15px] hover:text-emerald duration-500 ease-in-out'>
                  {element.name}
                </h3>
                <span className='block text-[17px] text-[#c0c0c0] mt-[5px] w-full font-medium'>{element.price}</span>
                <span className='absolute bottom-6 right-6 text-[#eb5757]'>{element.state ? 'New' : ''}</span>
              </div>
            </div>
          )
        })}
      </div>
      <button className='md:mx-auto md:mt-10 md:mb-0 uppercase w-[160px] h-[50px] rounded-xl bg-emerald items-center justify-center flex text-sm relative z-[2] font-medium font-inter mt-[30px] mb-0 mx-auto'>
        load more
      </button>
    </div>
  )
}

export default Store
