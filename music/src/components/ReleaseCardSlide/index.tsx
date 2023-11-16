import React from 'react'
import PremiumPlanIcon from '~/assets/Icons/PremiumPlanIcon'

interface IProps {
  url: string
  date: string
  time: string
  name: string
  address: string
  state: boolean
}
function ReleaseCardSlide({ url, date, time, name, address, state }: IProps) {
  return (
    <div className={`w-full h-[320px] rounded-[15px] overflow-hidden relative`}>
      <img src={url} alt='' className='w-full h-full rounded-[15px]' />
      <button
        className={`group absolute top-4 left-5 rounded-lg p-2 w-[112px] flex duration-500 ease-in-out flex-row items-center text-sm ${
          state ? `bg-[#222227] hover:bg-emerald text-white` : `bg-emerald`
        }`}
      >
        <PremiumPlanIcon
          className={`w-[25px] fill-emerald h-auto pr-[5px] duration-500 ease-in-out  ${
            state ? `group-hover:fill-white` : ``
          }`}
        />
        {state ? 'Buy Ticket' : 'Sold out'}
      </button>
      <span className='absolute top-24 left-5 text-xl'>{date}</span>
      <h6 className='absolute top-32 left-5 text-sm text-[#c0c0c0]'>{time}</h6>
      <h1 className='absolute top-48 left-5 text-3xl'>{name}</h1>
      <span className='absolute top-60 left-5 text-sl max-w-[62%] overflow-auto'>{address}</span>
    </div>
  )
}

export default ReleaseCardSlide
