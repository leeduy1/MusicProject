import { AiOutlineArrowRight } from 'react-icons/ai'
import ReleaseCard from '../ReleaseCard'

function NewRelease() {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='text-[30px] font-inter'>New Release</h1>
        <div className='flex items-center gap-[10px] text-[#c0c0c0] cursor-pointer group '>
          <p className='group-hover:text-white duration-150'>See all</p>
          <AiOutlineArrowRight className='group-hover:text-emerald duration-150' />
        </div>
      </div>
      <ReleaseCard
        thumbnail={'http://volna.volkovdesign.com/img/covers/cover1.jpg'}
        numbersOfVideo={'22'}
        numbersOfListener={'19503'}
        name={'Space Melody'}
        authors={['VIZE', 'Alan Walker', 'Lean']}
      />
    </div>
  )
}

export default NewRelease
