import React from 'react'
import AddIcon from '~/assets/Icons/AddIcon'

interface IElement {
  url: string
  name: string
  price: string
  state: boolean
}

function ProductSlide({ url, name, price, state }: IElement) {
  return (
    <div className='pr-5'>
      <div className='md:mt-[30px] relative mt-5 rounded-xl bg-[#212529] w-full overflow-hidden flex flex-col justify-start items-start p-5'>
        <div className='product w-full relative rounded-xl overflow-hidden select-none group'>
          <img src={url} alt='' className='w-full relative block z-[1]' />
          <button className='cursor-pointer absolute top-1/2 left-1/2 rounded-xl w-[48px] h-[48px] flex flex-row justify-center items-center mt-[-24px] ml-[-24px] z-[5] bg-[#222227] scale-0 group-hover:scale-[1] ease-in-out duration-500'>
            <AddIcon className='fill-white hover:fill-emerald w-[24px] h-auto duration-500 ease-in-out' />
          </button>
        </div>
        <h3 className='block w-full text-[17px] font-normal mb-0 text-ellipsis mt-[15px] hover:text-emerald duration-500 ease-in-out'>
          {name}
        </h3>
        <span className='block text-[17px] text-[#c0c0c0] mt-[5px] w-full font-medium'>{price}</span>
        <span className='absolute bottom-6 right-6 text-[#eb5757]'>{state ? 'New' : ''}</span>
      </div>
    </div>
  )
}

export default ProductSlide
