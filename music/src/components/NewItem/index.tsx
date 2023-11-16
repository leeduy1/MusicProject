import React from 'react'
import { BsPlay } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import AddIcon from '~/assets/Icons/AddIcon'
import CoverIcon from '~/assets/Icons/CoverIcon'
import ExportIcon from '~/assets/Icons/ExportIcon'

interface IItems {
  song: string
  singer: string
  time: string
}
function NewItem() {
  const ItemsList: IItems[] = [
    { song: 'Making my way', singer: 'Sơn Tùng MTP', time: '3.12' },
    { song: 'Yêu', singer: 'Khắc Việt', time: '4.25' },
    { song: 'Tháng năm', singer: 'Soobin Hoàng Sơn', time: '3.36' },
    { song: 'Dấu mưa', singer: 'Trung Quân Idol', time: '3.52' },
    { song: 'Mơ hồ', singer: 'Bùi Anh Tuấn', time: '4.02' },
    { song: 'Tình đơn phương', singer: 'Tùng acountist', time: '3.32' },
    { song: 'Miền cát trắng', singer: 'Quang Vinh', time: '5.12' }
  ]
  return (
    <div className='p-5 relative block w-full'>
      <ul className='md:mt-0 overflow-auto max-h-[320px]'>
        {ItemsList.map((item) => {
          return (
            <li className='flex flex-row justify-start items-center mb-2.5 pb-0.5 border-b border-solid border-[#222227] h-[58px] duration-300 ease-in-out group relative'>
              <Link
                className='flex flex-row justify-center items-center rounded-lg overflow-hidden duration-[0.5s] ease-in-out relative'
                to=''
              >
                <CoverIcon className='w-[48px] h-auto opacity-100 relative align-middle border-none' />
                <div className='absolute opacity-0 group-hover:opacity-100 duration-300 top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50'></div>
                <BsPlay
                  className={`absolute fill-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 ease-in-out hidden group-hover:inline-block hover:fill-emerald`}
                  size='30'
                />
              </Link>
              <div className='inline-flex flex-col justify-start items-start ml-[15px] mr-auto'>
                <h3 className='block w-full text-base font-normal mb-0 whitespace-nowrap overflow-hidden text-ellipsis break-words'>
                  <Link className='hover:text-emerald duration-[0.5s] ease-in-out' to=''>
                    {item.song}
                  </Link>
                </h3>
                <span className='hover:text-emerald duration-[0.5s] ease-in-out block w-full text-[14px] leading-6 font-normal text-[#c0c0c0] whitespace-nowrap overflow-hidden text-ellipsis break-words'>
                  <Link to=''>{item.singer}</Link>
                </span>
              </div>
              <Link
                to=''
                className='flex ml-[15px] flex-row justify-center items-center w-[32px] h-[32px] rounded-lg bg-[#25a56a] bg-opacity-[0.15] duration-500 ease-in-out hover:bg-opacity-50'
              >
                <AddIcon className='w-[18px] h-auto fill-emerald' />
              </Link>
              <Link
                to=''
                className='flex ml-[15px] flex-row justify-center items-center w-[32px] h-[32px] rounded-lg bg-[#8051d4] bg-opacity-[0.15] duration-500 ease-in-out hover:bg-opacity-50'
              >
                <ExportIcon className='w-[18px] h-auto' />
              </Link>
              <span className='ml-[15px] text-[13px] text-[#c0c0c0] '>{item.time}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NewItem
