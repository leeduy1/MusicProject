import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Facebookicon1 from '~/assets/Icons/Facebookicon1'
import GoogleIcon from '~/assets/Icons/GoogleIcon'
import Twittericon1 from '~/assets/Icons/Twittericon1'
import Logo from '~/components/Logo'
import Breadcrumb from '~/components/BreadCrumb'

function Sign_in() {
  const [currentCheck, setCurrentCheck] = useState(true)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [currentEmail, setCurrentEmail] = useState('')
  const [currentPass, setCurrentPass] = useState('')

  const handleCheckboxChange = () => {
    setCurrentCheck(!currentCheck)
  }
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentEmail(e.target.value)
  }
  const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPass(e.target.value)
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    try {
      await axios.post('http://localhost:8080/api/v1/auth/login', {
        email: currentEmail,
        password: currentPass
      })
    } catch (error) {
      setError('Invalid email or password. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='md:pt-[30px] pb-[70px] sm:pt-5 sm:pb-[50px] w-full px-[30px] mx-auto pt-[20px] relative'>
      <Breadcrumb name={'Sign in'} />
      <div className='w-full'>
        <div className='md:px-[15px] max-w-full basis-full px-2.5'>
          <div className='block relative'>
            <div className='md:pt-[30px] flex flex-row justify-center items-center w-full h-auto pt-5'>
              <form
                className='sm:p-10 rounded-xl py-[30px] px-5 flex-col flex justify-center items-center w-full relative max-w-[420px] border border-solid border-[#555557]'
                action=''
                onSubmit={handleSubmit}
              >
                <Link to='/' className='mb-[30px] sm:mb-10 block'>
                  <Logo className='w-[100px]'></Logo>
                </Link>
                <div className='flex justify-start items-end flex-row flex-wrap relative mb-5 w-full'>
                  <input
                    type='email'
                    className='bg-[#222227] rounded-xl h-[46px] relative text-white text-base w-full px-5 font-inter outline-none focus:outline-emerald'
                    placeholder='Email'
                    onChange={handleEmailChange}
                  />
                </div>
                <div className='flex justify-start items-end flex-row flex-wrap relative mb-5 w-full text-left'>
                  <input
                    type={`${currentCheck ? `password` : `text`}`}
                    className='bg-[#222227] rounded-xl h-[46px] relative text-white text-base w-full px-5 font-inter outline-none focus:outline-emerald'
                    placeholder='Password'
                    onChange={handlePassChange}
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
                    {currentCheck ? `Hiện mật khẩu` : `Ẩn mật khẩu`}
                  </label>
                </div>
                {error && <p className='text-red-500 text-sm mb-2'>{error}</p>}
                <button
                  className='uppercase hover:text-emerald bg-[#25a56a] w-full h-[50px] rounded-xl font-inter font-medium my-[15px] mx-auto duration-[0.5s] ease-in-out hover:bg-[#222227]'
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign in'}
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
                  Don't have an account?
                  <Link className='text-[#25a56a] hover:underline' to='/signup'>
                    Sign up!
                  </Link>
                </span>
                <Link to={'/forgotpass'}>
                  <span className='mt-[15px] text-sm w-full text-center text-[#25a56a] hover:underline'>
                    Forgot password?
                  </span>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sign_in
