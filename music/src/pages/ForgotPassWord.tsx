import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '~/components/BreadCrumb'
import Logo from '~/components/Logo'

function ForgotPassWord() {
  const [currentCheck, setCurrentCheck] = useState(true)
  const handleCheckboxChange = () => {
    setCurrentCheck(!currentCheck)
  }

  return (
    <div className='md:pt-[30px] pb-[70px] sm:pt-5 sm:pb-[50px] w-full px-[30px] mx-auto pt-[20px] relative'>
      <Breadcrumb name={'Restore password'} />
      <div className='w-full'>
        <div className='md:px-[15px] max-w-full basis-full px-2.5'>
          <div className='block relative'>
            <div className='md:pt-[30px] flex flex-row justify-center items-center w-full h-auto pt-5'>
              <form
                className='sm:p-10 rounded-xl py-[30px] px-5 flex-col flex justify-center items-center w-full relative max-w-[420px] border border-solid border-[#555557]'
                action=''
              >
                <Link to='/' className='mb-[30px] sm:mb-10 block'>
                  <Logo className='w-[100px]'></Logo>
                </Link>
                <div className='flex justify-start items-end flex-row flex-wrap relative mb-5 w-full'>
                  <input
                    type='email'
                    className='bg-[#222227] rounded-xl h-[46px] relative text-white text-base w-full px-5 font-inter outline-none focus:outline-emerald'
                    placeholder='Email'
                  />
                </div>
                <div className='flex justify-start items-end flex-row flex-wrap relative mb-5 w-full text-left'>
                  <input
                    type='checkbox'
                    className='absolute left-[-9999px]'
                    name='remember'
                    id='remember'
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor='remember'
                    className={`text-sm remember text-[#c0c0c0] relative font-normal cursor-pointer select-none pl-[35px]
                    ${currentCheck ? 'after:opacity-100' : 'after:opacity-0'}
                    `}
                  >
                    I agree to the
                    <Link to='' className='text-emerald ml-1 hover:underline'>
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                <button className='uppercase hover:text-emerald bg-[#25a56a] w-full h-[50px] rounded-xl font-inter font-medium my-[15px] mx-auto duration-[0.5s] ease-in-out hover:bg-[#222227]'>
                  Send
                </button>
                <span className='text-sm mt-4'>We will send a password to your Email</span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassWord
