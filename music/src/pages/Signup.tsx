import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Facebookicon1 from '~/assets/Icons/Facebookicon1'
import GoogleIcon from '~/assets/Icons/GoogleIcon'
import Twittericon1 from '~/assets/Icons/Twittericon1'
import Breadcrumb from '~/components/BreadCrumb'
import Logo from '~/components/Logo'

function Signup() {
  const [user_name, setUserName] = useState('')
  const [full_name, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false)
  const [containerOpacity, setContainerOpacity] = useState(1)

  const isPasswordValid = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    return passwordRegex.test(password)
  }

  const isEmailValid = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    return emailRegex.test(email)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
    if (!isPasswordValid(value)) {
      setErrorPassword('Invalid password')
      setErrorEmail('')
    } else {
      setErrorPassword('')
    }
  }

  const handleShowPass = () => {
    setShowPass(!showPass)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    if (!isEmailValid(value)) {
      setErrorEmail('Invalid email address')
      setErrorPassword('')
    } else {
      setErrorEmail('')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isEmailValid(email)) {
      setErrorEmail('Please enter a valid email address')
      if (emailRef.current) {
        emailRef.current.focus()
      }
    } else if (!isPasswordValid(password)) {
      setErrorPassword('Please enter a valid password')
      if (passwordRef.current) {
        passwordRef.current.focus()
      }
    } else {
      //
    }
  }
  const handleSubmitData = async () => {
    const dataForBE = {
      user_name: user_name,
      full_name: full_name,
      email: email,
      password: password,
      roles: [
        {
          id: '0',
          name: 'ADMIN'
        }
      ]
    }

    try {
      if (email !== '' && password !== '' && isEmailValid(email) && isPasswordValid(password)) {
        const response = await axios.post('http://localhost:8080/api/v1/auth/register', dataForBE)

        // Kiểm tra mã trạng thái của phản hồi

        if (response.data.message === 'Registration successful') {
          setIsSignUpSuccess(true)
          setContainerOpacity(0.3) // Set opacity desired value here
          // window.location.href = '/SignIn'
        }
        if (response.data.message === 'Email already exists') {
          setErrorEmail(response.data.message)
        }
      }
    } catch (error) {
      // Xử lý lỗi nếu có lỗi trong quá trình gửi yêu cầu
      // console.error('Đã xảy ra lỗi khi gửi yêu cầu đăng ký:', error.message)
    }
  }

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  return (
    <div className='md:pt-[30px] pb-[70px] sm:pt-5 sm:pb-[50px] w-full px-[30px] mx-auto pt-[20px] relative'>
      <div className={`w-full`} style={{ opacity: containerOpacity }}>
        {/* BreadCrumb */}
        <Breadcrumb names={['Sign up']} />
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
                <div className='flex justify-start items-end flex-row flex-wrap relative mb-5 w-full'>
                  <input
                    type='name'
                    className={`bg-[#222227] rounded-xl h-[46px] relative text-white text-base w-full px-5 font-inter outline-none focus:outline-emerald`}
                    placeholder='User Name'
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className='flex justify-start items-end flex-row flex-wrap relative mb-5 w-full'>
                  <input
                    type='fullname'
                    className={`bg-[#222227] rounded-xl h-[46px] relative text-white text-base w-full px-5 font-inter outline-none focus:outline-emerald`}
                    placeholder='Full Name'
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>
                {errorEmail && <p style={{ color: 'red', margin: '5px 0' }}>{errorEmail}</p>}
                <div className='flex justify-start items-end flex-row flex-wrap relative mb-5 w-full'>
                  <input
                    ref={emailRef}
                    type='text'
                    className={`bg-[#222227] rounded-xl h-[46px] relative text-white text-base w-full px-5 font-inter outline-none  ${
                      errorEmail !== '' && !isEmailValid(email) ? `focus:outline-[red]` : `focus:outline-emerald`
                    }`}
                    placeholder='Email'
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                {errorPassword && <p style={{ color: 'red', margin: '5px 0' }}>{errorPassword}</p>}
                <div className={`flex justify-start items-end flex-row flex-wrap relative mb-5 w-full text-left}`}>
                  <input
                    ref={passwordRef}
                    type={showPass ? 'text' : 'password'}
                    className={`bg-[#222227] rounded-xl h-[46px] relative text-white text-base w-full px-5 font-inter outline-none  ${
                      errorPassword !== '' && !isPasswordValid(password)
                        ? `focus:outline-[red]`
                        : `focus:outline-emerald`
                    }`}
                    placeholder='Password'
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <button
                    onClick={() => {
                      handleShowPass()
                    }}
                    className={`${showPass ? `absolute top-1/3 right-0` : `hidden`}`}
                  >
                    Ẩn
                  </button>
                  <button
                    onClick={() => {
                      handleShowPass()
                    }}
                    className={`${showPass ? `hidden` : `absolute top-1/3 right-0`}`}
                  >
                    Hiện
                  </button>
                </div>
                <div className='flex justify-start items-end flex-row flex-wrap relative mb-5 w-full text-left'></div>
                <button
                  type='submit'
                  onClick={handleSubmitData}
                  className='uppercase bg-[#25a56a] w-full h-[50px] rounded-xl font-inter font-medium my-[15px] mx-auto duration-[0.5s] ease-in-out hover:bg-[#222227]'
                >
                  Sign up
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
                  </Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
      {isSignUpSuccess && (
        <div className='bg-[#222227] gap-5 flex justify-center items-center flex-col w-1/3 h-1/3 border-[2px] border-emerald border-solid rounded-xl absolute top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2'>
          <h3 className='text-emerald text-xl font-inter font-medium select-none'>Signed up successful</h3>
          <button
            className='h-[50px] bg-emerald rounded-lg w-[150px] hover:bg-[#333333] hover:text-emerald duration-300 ease-in-out'
            onClick={() => {
              window.location.href = '/SignIn'
            }}
          >
            Sign in now
          </button>
        </div>
      )}
    </div>
  )
}

export default Signup
