import { BsPlay, BsHeadphones } from 'react-icons/bs'
import { AiOutlineBars } from 'react-icons/ai'
interface IProps {
  thumbnail: string
  numbersOfVideo: string
  numbersOfListener: string
  name: string
  authors: string[]
}
function ReleaseCard({ thumbnail, numbersOfVideo, numbersOfListener, name, authors }: IProps) {
  return (
    <div className='w-[172px] h-[172px]'>
      <div className='w-full h-full overflow-hidden rounded-[12px] relative group'>
        <img src={thumbnail} alt='' className='w-full h-full group-hover:scale-125 duration-300' />
        <div className='cursor-pointer absolute opacity-0 group-hover:opacity-100 duration-300 top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
          <div className='w-[50px] h-[50px] bg-[#222227] cursor-pointer top-[50%] -translate-y-[50%] absolute rounded-[8px] flex items-center justify-center'>
            <BsPlay className='text-[24px] hover:text-emerald duration-300' />
          </div>
          <div className='flex absolute bottom-5 gap-5'>
            <span className='flex items-center gap-1'>
              <AiOutlineBars />
              {numbersOfVideo}
            </span>
            <span className='flex items-center gap-1'>
              <BsHeadphones />
              {numbersOfListener}
            </span>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center gap-[2px] mt-2'>
        <a href='' className='hover:text-emerald duration-500 text-[16px]'>
          {name}
        </a>
        <a className='text-[#C0C0C0] hover:text-emerald duration-500 line-clamp-1' href=''>
          {authors?.join(' & ')}
        </a>
      </div>
    </div>
  )
}

export default ReleaseCard
