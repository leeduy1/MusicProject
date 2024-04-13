import React from 'react'
import { Link } from 'react-router-dom'
import ClockIcon from '~/assets/Icons/ClockIcon'
import CommentIcon from '~/assets/Icons/CommentIcon'
import PlayIcon from '~/assets/Icons/PlayIcon'

interface Iinfor {
  url: string
  name: string
  type: string
  time: string
  comments: number
  category: boolean
}

interface IBoo {
  state: boolean
}
function TabNews1({ state }: IBoo) {
  const newsList: Iinfor[] = [
    {
      url: 'https://volna.volkovdesign.com/img/posts/2.jpg',
      name: "Tom Grennan 'breaks the internet' as fans overload servers during virtual gig",
      type: 'Music',
      time: '3 hour ago',
      comments: 18,
      category: false
    },
    {
      url: 'https://volna.volkovdesign.com/img/posts/3.jpg',
      name: 'Why do the Golden Globes always get it so wrong?',
      type: 'Feature',
      time: '9 hour ago',
      comments: 54,
      category: false
    },
    {
      url: 'https://volna.volkovdesign.com/img/posts/1.jpg',
      name: 'Foo Fighters share new live version of ‘No Son Of Mine’',
      type: 'Music',
      time: '2 hour ago',
      comments: 61,
      category: true
    },
    {
      url: 'https://volna.volkovdesign.com/img/posts/4.jpg',
      name: 'Foo Fighters share new live version of ‘No Son Of Mine’',
      type: 'Music',
      time: '2 hour ago',
      comments: 61,
      category: false
    },
    {
      url: 'https://volna.volkovdesign.com/img/posts/5.jpg',
      name: "Tom Grennan 'breaks the internet' as fans overload servers during virtual gig",
      type: 'music',
      time: '3 hour ago',
      comments: 18,
      category: false
    },
    {
      url: 'https://volna.volkovdesign.com/img/posts/6.jpg',
      name: 'Why do the Golden Globes always get it so wrong?',
      type: 'music',
      time: '9 hour ago',
      comments: 54,
      category: false
    }
  ]
  return (
    <div className='flex flex-wrap mt-5'>
      {newsList.map((infor, index) => {
        if (index <= 2 || state === true) {
          return (
            <div className='py-2.5 pr-5 lg:basis-1/3 lg:max-w-[33.333333%] md:basis-1/2 md:max-w-[50%] basis-full max-w-full'>
              <div className='rounded-3xl bg-[#222227] h-[420px] flex-col flex justify-start items-start'>
                <Link to='' className='news block relative'>
                  <button
                    className={`${
                      infor.category
                        ? `absolute top-6 left-7 bg-[#222227] w-[] h-10 px-[15px] rounded-xl font-medium flex flex-row items-center duration-500 ease-in-out group hover:bg-emerald z-[3]`
                        : `hidden`
                    }`}
                  >
                    <PlayIcon className='fill-emerald h-auto w-[24px] mr-2 duration-500 ease-in-out group-hover:fill-white ' />
                    Music video
                  </button>
                  <img className='w-full rounded-t-3xl' src={infor.url} alt={infor.name} />
                  <button className='hover:bg-emerald duration-500 ease-in-out rounded-md bg-[#2f80ed] h-[28px] min-w-[70px] text-sm absolute z-[2] bottom-[22px] left-[22px]'>
                    {infor.type}
                  </button>
                </Link>
                <div className='pl-5 pt-6'>
                  <span className='font-medium text-2xl text-center duration-500 ease-in-out cursor-default select-none hover:text-emerald'>
                    {infor.name}
                  </span>
                </div>
                <div className='mt-auto flex justify-between items-center w-full h-5 px-5 pb-7'>
                  <span className='flex flex-row justify-start items-center text-[13px] text-[#c0c0c0]'>
                    <ClockIcon className='h-auto w-[20px] mr-1 fill-[#c0c0c0]' />
                    {infor.time}
                  </span>
                  <span className='flex flex-row justify-start items-center text-[13px] text-[#c0c0c0]'>
                    <CommentIcon className='h-auto w-[17px] mr-1 fill-[#c0c0c0]' />
                    {infor.comments}
                  </span>
                </div>
              </div>
            </div>
          )
        }
      })}
      <button className='md:mx-auto md:mt-10 md:mb-0 uppercase w-[160px] h-[50px] rounded-xl bg-emerald items-center justify-center flex text-sm relative z-[2] font-medium font-inter mt-[30px] mb-0 mx-auto'>
        load more
      </button>
    </div>
  )
}

export default TabNews1
