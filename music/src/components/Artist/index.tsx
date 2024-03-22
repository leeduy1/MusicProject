import React from 'react'
import { Link } from 'react-router-dom'

interface IArtists {
  name: string
  url: string
}
function Artist({ name, url }: IArtists) {
  return (
    <Link
      to='/artistdetail'
      className='md:mt-[30px] flex flex-col justify-start items-start w-[95%] mt-5 group relative'
    >
      <div className='artist__cover flex flex-row justify-center items-center rounded-xl relative overflow-hidden w-full '>
        <img className='w-full h-[180px] block relative z-[1]' src={url} alt={name} />
      </div>
      <span className='z-[3] text-white text-base mb-0 text-center w-full font-normal font-inter mt-2.5 group-hover:text-emerald duration-500 ease-in-out'>
        {name}
      </span>
    </Link>
  )
}

export default Artist
