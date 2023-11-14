import { useState } from 'react'
import { Link } from 'react-router-dom'
import BreadcrumbIcon from '~/assets/Icons/BreadcrumbIcon'
import Facebookicon1 from '~/assets/Icons/Facebookicon1'
import GoogleIcon from '~/assets/Icons/GoogleIcon'
import Twittericon1 from '~/assets/Icons/Twittericon1'
import Logo from '~/components/Logo'
function Signup() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [password, setPassword] = useState('')
  const isPasswordValid = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    return passwordRegex.test(password)
  }
  const isEmailValid = (email: string) => {
    // Regular expression to validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

    return emailRegex.test(email)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    console.log(value)

    setPassword(value)

    if (!isPasswordValid(value)) {
      setError('Invalid password')
    }
    setError('')
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)

    if (!isEmailValid(value)) {
      setError('Invalid email address')
    }
    setError('')
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isEmailValid(email)) {
      // Handle form submission or API request with the valid email
      console.log('Valid email: ', email)
    } else {
      setError('Please enter a valid email address')
    }
    e.preventDefault()
    if (isPasswordValid(password)) {
      // Handle form submission or API request with the valid email
      console.log('Valid pass: ', password)
    } else {
      setError('Please enter a valid pass address')
    }
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
                <BreadcrumbIcon className='w-[20px] opacity-75' /> <p className='text-[#c0c0c0]'>Sign up</p>
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
                onSubmit={handleSubmit}
              >
                <Link to='/' className='mb-[30px] sm:mb-10 block'>
                  <Logo className='w-[100px]'></Logo>
                </Link>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className='flex justify-start items-end flex-row flex-wrap relative mb-5 w-full'>
                  <input
                    type='name'
                    className='bg-[#222227] rounded-xl h-[46px] relative text-white text-base w-full px-5 font-inter'
                    placeholder='User Name'
                  />
                </div>
                <div className='flex justify-start items-end flex-row flex-wrap relative mb-5 w-full'>
                  <input
                    type='text'
                    className='bg-[#222227] rounded-xl h-[46px] relative text-white text-base w-full px-5 font-inter'
                    placeholder='Email'
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className='flex justify-start items-end flex-row flex-wrap relative mb-5 w-full text-left'>
                  <input
                    type='password'
                    className='bg-[#222227] rounded-xl h-[46px] relative text-white text-base w-full px-5 font-inter'
                    placeholder='Password'
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className='flex justify-start items-end flex-row flex-wrap relative mb-5 w-full text-left'></div>
                <button className='uppercase bg-[#25a56a] w-full h-[50px] rounded-xl font-inter font-medium my-[15px] mx-auto duration-[0.5s] ease-in-out hover:bg-[#222227]'>
                  sign up
                </button>
                <span className='font-open-sans font-normal text-[#c0c0c0] text-sm'>or</span>
                <div className='flex justify-between items-center flex-row my-[15px]  w-full'>
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
                <span className='mt-[15px] text-sm w-full text-center text-white'>
                  Already have an account?{' '}
                  <Link className='text-[#25a56a] hover:underline' to='/signin'>
                    Sign in
                  </Link>{' '}
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Signup
