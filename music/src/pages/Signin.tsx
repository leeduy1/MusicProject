import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BreadcrumbIcon from '~/assets/Icons/BreadcrumbIcon'
import Facebookicon1 from '~/assets/Icons/Facebookicon1'
import GoogleIcon from '~/assets/Icons/GoogleIcon'
import Twittericon1 from '~/assets/Icons/Twittericon1'
import Logo from '~/components/Logo'

function Sign_in() {
  const [currentCheck, setCurrentCheck] = useState(true)
  useEffect(() => {
    if (currentCheck) {
      console.log('Checkbox is checked')
    } else {
      console.log('Checkbox is not checked')
    }
  }, [currentCheck])
  const handleCheckboxChange = () => {
    setCurrentCheck(!currentCheck)
  }
  return (
    <div className='md:pt-[30px] pb-[70px] sm:pt-5 sm:pb-[50px] w-full px-[30px] mx-auto pt-[20px] relative'>
      <div className='w-full'>
        {/* BreadCrumb */}
        <div className='md: flex flex-wrap basic-full grow-0 shrink-0'>
          <div className='max-w-full relative'>
            <ul className='flex flex-row justify-start items-center flex-wrap max-w-full list-none'>
              <li className='flex left-full h-[34px] items-center justify-center text-sm cursor-default'>
                <Link
                  className='duration-[0.3s] ease-out cursor-pointer text-[#c0c0c0] hover:text-[#25a56a] hover:ease-in '
                  to='/'
                >
                  Home
                </Link>{' '}
                <BreadcrumbIcon className='w-[20px] opacity-75' /> <p className='text-[#c0c0c0]'>Sign in</p>
              </li>
            </ul>
          </div>
        </div>
        {/* BreadCrumb */}
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
                    className='bg-[#222227] rounded-xl h-[46px] relative text-white text-base w-full px-5 font-inter'
                    placeholder='Email'
                  />
                </div>
                <div className='flex justify-start items-end flex-row flex-wrap relative mb-5 w-full text-left'>
                  <input
                    type='password'
                    className='bg-[#222227] rounded-xl h-[46px] relative text-white text-base w-full px-5 font-inter'
                    placeholder='Password'
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
                    ${currentCheck === true ? 'after:opacity-100' : 'after:opacity-0'}
                    `}
                  >
                    Remember Me
                  </label>
                </div>
                <button className='uppercase bg-[#25a56a] w-full h-[50px] rounded-xl font-inter font-medium my-[15px] mx-auto duration-[0.5s] ease-in-out hover:bg-[#222227]'>
                  sign in
                </button>
                <span className='font-open-sans font-normal text-[#c0c0c0] text-sm'>or</span>
                <div className='flex justify-between items-center flex-row my-[15px] w-full'>
                  <Link
                    to=''
                    className='group flex flex-row justify-center items-center h-[46px] w-[calc(33%-15px)] rounded-xl duration-[0.5s] ease-in-out text-white hover:bg-white bg-[#3b5999]'
                  >
                    <Facebookicon1 className='w-2.5 fill-[#fff] group-hover:fill-[#3b5999] h-auto text-white duration-[0.5s] ease-in-out' />
                  </Link>
                  <Link
                    to=''
                    className='group flex flex-row justify-center items-center h-[46px] w-[calc(33%-15px)] rounded-xl text-white hover:bg-white bg-[#1da1f2] duration-[0.5s] ease-in-out'
                  >
                    <Twittericon1 className='w-5 h-auto fill-[#fff] group-hover:fill-[#1da1f2] duration-[0.5s] ease-in-out' />
                  </Link>
                  <Link
                    to=''
                    className='group flex flex-row justify-center items-center h-[46px] w-[calc(33%-15px)] duration-[0.5s] ease-in-out rounded-xl text-white bg-[#df4a32] hover:bg-white'
                  >
                    <GoogleIcon className='w-[18px] h-auto fill-[#fff] duration-[0.5s] ease-in-out group-hover:fill-[#df4a32]' />
                  </Link>
                </div>
                <span className='mt-[15px] text-sm w-full text-center'>
                  Don't have an account?{' '}
                  <Link className='text-[#25a56a] hover:underline' to='/signup'>
                    Sign up!
                  </Link>
                </span>
                <span className='mt-[15px] text-sm w-full text-center text-[#25a56a] hover:underline'>Forgot password?</span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sign_in
