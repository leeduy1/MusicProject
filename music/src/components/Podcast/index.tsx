import React from 'react'
import { BsPlay } from 'react-icons/bs'
import { Link } from 'react-router-dom'

interface IPodcast {
  state: boolean
  url: string
  viewers: string
  img: string
  name: string
}
function Podcast({ state, url, viewers, img, name }: IPodcast) {
  return (
    <div className='md:mt-[30px] flex flex-row justify-start items-start flex-wrap mt-5 relative overflow-hidden group '>
      <Link
        className='w-full rounded-xl overflow-hidden relative flex flex-row justify-center items-center live__cover'
        to={url}
      >
        <img src={img} alt='' />
      </Link>
      <span
        className={`absolute top-3 left-5 bg-[#eb5757] px-2 items-center z-[3] cursor-default w-auto h-[24px] rounded-lg uppercase text-xs 
                  ${state ? `flex` : `hidden`}`}
      >
        live
      </span>
      <BsPlay
        className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 scale-0 ease-in-out duration-300 group-hover:scale-[1]'
        size='60px'
      />
      <h3 className='text-base font-inter group-hover:text-emerald duration-500 ease-in-out pt-2 font-medium'>
        <Link to={url}>{name}</Link>
      </h3>
      <span className='absolute top-[70%] left-[5%] bg-[#222227] px-2 rounded-md z-[3] py-1'>{viewers}</span>
    </div>
  )
}
export default Podcast
