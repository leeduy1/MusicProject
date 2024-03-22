import React, { useState } from 'react'
import { InstagramIcon, SpotifyIcon, TiktokIcon, TwitterIcon, VolnaIcon, YoutubeIcon } from '~/assets/Icons'
import FacebookIcon from '~/assets/Icons/FacebookIcon'
import Breadcrumb from '~/components/BreadCrumb'
import Tittle from '~/components/Titlle'

const IconContainer = () => {
  const [hovered, setHovered] = useState(-1)

  return (
    <div
      className={`flex flex-row gap-3 duration-300 ease-in-out`}
      onMouseEnter={() => setHovered(0)}
      onMouseLeave={() => setHovered(-1)}
    >
      <div className='relative'>
        <div
          className={`bg-black ${
            hovered < 0 ? 'opacity-0' : hovered === 1 ? 'opacity-0' : 'opacity-30'
          } absolute top-0 left-0 right-0 bottom-0 rounded-full duration-300 ease-in-out`}
          onMouseEnter={() => setHovered(1)}
        ></div>
        <FacebookIcon />
      </div>
      <div className='relative'>
        <div
          className={`bg-black ${
            hovered < 0 ? 'opacity-0' : hovered === 2 ? 'opacity-0' : 'opacity-30'
          } absolute top-0 left-0 right-0 bottom-0 rounded-full`}
          onMouseEnter={() => setHovered(2)}
        ></div>
        <TwitterIcon />
      </div>

      <div className='relative'>
        <div
          className={`bg-black ${
            hovered < 0 ? 'opacity-0' : hovered === 3 ? 'opacity-0' : 'opacity-30'
          } absolute top-0 left-0 right-0 bottom-0 rounded-full`}
          onMouseEnter={() => setHovered(3)}
        ></div>
        <InstagramIcon />
      </div>
      <div className='relative'>
        <div
          className={`bg-black ${
            hovered < 0 ? 'opacity-0' : hovered === 4 ? 'opacity-0' : 'opacity-30'
          } absolute top-0 left-0 right-0 bottom-0 rounded-full`}
          onMouseEnter={() => setHovered(4)}
        ></div>
        <VolnaIcon />
      </div>
      <div className='relative'>
        <div
          className={`bg-black ${
            hovered < 0 ? 'opacity-0' : hovered === 5 ? 'opacity-0' : 'opacity-30'
          } absolute top-0 left-0 right-0 bottom-0 rounded-full`}
          onMouseEnter={() => setHovered(5)}
        ></div>
        <TiktokIcon className='hover:opacity-100' />
      </div>
      <div className='relative'>
        <div
          className={`bg-black ${
            hovered < 0 ? 'opacity-0' : hovered === 6 ? 'opacity-0' : 'opacity-30'
          } absolute top-0 left-0 right-0 bottom-0 rounded-full`}
          onMouseEnter={() => setHovered(6)}
        ></div>
        <SpotifyIcon className='hover:opacity-100' />
      </div>
      <div className='relative'>
        <div
          className={`bg-black ${
            hovered < 0 ? 'opacity-0' : hovered === 7 ? 'opacity-0' : 'opacity-30'
          } absolute top-0 left-0 right-0 bottom-0 rounded-full`}
          onMouseEnter={() => setHovered(7)}
        ></div>
        <YoutubeIcon className='hover:opacity-100' />
      </div>
    </div>
  )
}

function Contact() {
  return (
    <div className='md:pt-[30px] pb-[70px] sm:pt-5 sm:pb-[50px] w-full px-[30px] mx-auto pt-[20px] relative '>
      <Breadcrumb name={'Contacts'} />
      <Tittle nameTittle={'Contacts'} />
      <div className='flex flex-row gap-7'>
        <form className='flex flex-col border border-solid border-[#222227] rounded-xl p-5 basis-2/3 max-w-[66.6666666%]'>
          <div className='h-auto w-full flex flex-row gap-4 mb-4'>
            <input
              type='text'
              name=''
              placeholder='Name'
              id=''
              className='bg-[#222227] h-12 flex basis-1/2 max-w-[1/2] p-4 rounded-lg focus:outline-emerald outline-none'
            />
            <input
              type='text'
              name=''
              placeholder='Email'
              id=''
              className='bg-[#222227] h-12 flex basis-1/2 max-w-[1/2] p-4 rounded-lg focus:outline-emerald outline-none'
            />
          </div>
          <div className='mb-4'>
            <input
              type='text'
              name=''
              placeholder='Subject'
              id=''
              className='h-12 w-full bg-[#222227] p-4 rounded-lg focus:outline-emerald outline-none'
            />
          </div>
          <div className='mb-2'>
            <textarea
              name=''
              placeholder='Type your massage'
              id=''
              className='h-36 w-full bg-[#222227] p-4 rounded-lg resize-none'
            ></textarea>
          </div>
          <div>
            <button className='uppercase h-12 w-40 bg-emerald rounded-xl font-medium'>send</button>
          </div>
        </form>
        <div className='flex flex-col gap-4 basis-1/3 max-w-[33.333333%]'>
          <h1 className='text-3xl'>Info</h1>
          <span className='text-[#c0c0c0] mb-2'>
            It's long time fact that a render will be distracted by the readable content of a page when looking at its
            layout
          </span>
          <span>+84 70-309-2742</span>
          <span>xuanphan742@gmail.com</span>
          <span className='mb-2'>5th 6th st Dien Hoa, Dien Ban, Quang Nam</span>
          {/* <div
            className={`flex flex-row gap-3 ${hovered ? 'opacity-30' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <FacebookIcon className='hover:opacity-1' />
            <TwitterIcon className='hover:opacity-1' />
            <InstagramIcon className='hover:opacity-1' />
            <VolnaIcon className='hover:opacity-1' />
            <TiktokIcon className='hover:opacity-1' />
            <SpotifyIcon className='hover:opacity-1' />
            <YoutubeIcon className='hover:opacity-1' />
          </div> */}
          <IconContainer />
        </div>
      </div>
    </div>
  )
}

export default Contact
