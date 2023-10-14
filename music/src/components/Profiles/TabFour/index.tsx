import React from 'react'

function index() {
  return (
    <div className='md:mx-[-15px] mx-[-10px] flex flex-wrap '>
      <div className='md:px-[15px] px-2.5 lg:basis-1/2 basis-full lg:max-w-[50%] max-w-full w-full relative'>
        <form
          className='md:mt-[30px] mt-5 pt-5 pr-5 pb-[5px] pl-5 max-w-full items-start flex flex-col justify-center rounded-xl relative w-full border border-solid border-[#222227]'
          action='#'
        >
          <div className='mx-[-10px] flex flex-wrap basis-full'>
            <div className='px-2.5 md:px-2.5 flex max-w-full basis-full'>
              <h4 className='text-base font-medium font-inter text-white mb-5'>Profile details</h4>
            </div>
            <div className='px-2.5 md:px-[15px] basis-full xl:basis-1/2 max-w-full xl:max-w-[50%] relative w-full'>
              <div className='flex flex-row justify-start items-end flex-wrap relative mb-5 w-full'>
                <label className='font-normal text-sm text-[#c0c0c0] mb-[5px] pl-5' htmlFor='username'>
                  Login
                </label>
                <input
                  type='text'
                  id='username'
                  name='username'
                  className='focus:outline-[#25a56a] outline-none outline-1 bg-[#222227] duration-[0.5s] ease-in-out border border-solid border-transparent rounded-xl relative h-[46px] text-white text-base w-full px-5 font-inter'
                  placeholder='Username'
                />
              </div>
            </div>
            <div className='px-2.5 md:px-[15px] basis-full xl:basis-1/2 max-w-full xl:max-w-[50%] relative w-full'>
              <div className='flex flex-row justify-start items-end flex-wrap relative mb-5 w-full'>
                <label className='font-normal text-sm text-[#c0c0c0] mb-[5px] pl-5' htmlFor='email'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='focus:outline-[#25a56a] outline-none outline-1 bg-[#222227] duration-[0.5s] ease-in-out border border-solid border-transparent rounded-xl relative h-[46px] text-white text-base w-full px-5 font-inter'
                  placeholder='email@gmail.com'
                />
              </div>
            </div>
            <div className='px-2.5 md:px-[15px] basis-full xl:basis-1/2 max-w-full xl:max-w-[50%] relative w-full'>
              <div className='flex flex-row justify-start items-end flex-wrap relative mb-5 w-full'>
                <label className='font-normal text-sm text-[#c0c0c0] mb-[5px] pl-5' htmlFor='firstname'>
                  First Name
                </label>
                <input
                  type='text'
                  id='firstname'
                  name='firstname'
                  className='focus:outline-[#25a56a] outline-none outline-1 bg-[#222227] duration-[0.5s] ease-in-out border border-solid border-transparent rounded-xl relative h-[46px] text-white text-base w-full px-5 font-inter'
                  placeholder='Xuan'
                />
              </div>
            </div>
            <div className='px-2.5 md:px-[15px] basis-full xl:basis-1/2 max-w-full xl:max-w-[50%] relative w-full'>
              <div className='flex flex-row justify-start items-end flex-wrap relative mb-5 w-full'>
                <label className='font-normal text-sm text-[#c0c0c0] mb-[5px] pl-5' htmlFor='lastname'>
                  Last Name
                </label>
                <input
                  type='text'
                  id='lastname'
                  name='lastname'
                  className='focus:outline-[#25a56a] outline-none outline-1 bg-[#222227] duration-[0.5s] ease-in-out border border-solid border-transparent rounded-xl relative h-[46px] text-white text-base w-full px-5 font-inter'
                  placeholder='Phan'
                />
              </div>
            </div>
            <div className='md:px-[15px] px-2.5 basis-full w-full justify-start relative max-w-full'>
              <button className='lg:w-[180px] w-full mt-2.5 mx-0 mb-[15px] h-[50px] bg-[#25a56a] text-white rounded-xl flex flex-row items-center justify-center text-sm relative z-[2] uppercase font-inter hover:bg-[#222227] duration-[0.5s] ease-in-out'>
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className='md:px-[15px] px-2.5 lg:basis-1/2 basis-full lg:max-w-[50%] max-w-full w-full relative'>
        <form
          className='md:mt-[30px] mt-5 pt-5 sm:pr-5 pb-[5px] pl-5 max-w-full items-start flex flex-col justify-center rounded-xl relative w-full border border-solid border-[#222227]'
          action='#'
        >
          <div className='mx-[-10px] flex flex-wrap basis-full'>
            <div className='px-2.5 md:px-2.5 flex max-w-full basis-full'>
              <h4 className='text-base font-medium font-inter text-white mb-5'>Change password</h4>
            </div>
            <div className='px-2.5 md:px-[15px] basis-full xl:basis-1/2 max-w-full xl:max-w-[50%] relative w-full'>
              <div className='flex flex-row justify-start items-end flex-wrap relative mb-5 w-full'>
                <label className='font-normal text-sm text-[#c0c0c0] mb-[5px] pl-5' htmlFor='oldpass'>
                  Old password
                </label>
                <input
                  type='text'
                  id='oldpass'
                  name='oldpass'
                  className='focus:outline-[#25a56a] outline-none outline-1 bg-[#222227] duration-[0.5s] ease-in-out border border-solid border-transparent rounded-xl relative h-[46px] text-white text-base w-full px-5 font-inter'
                  placeholder=''
                />
              </div>
            </div>
            <div className='px-2.5 md:px-[15px] basis-full xl:basis-1/2 max-w-full xl:max-w-[50%] relative w-full'>
              <div className='flex flex-row justify-start items-end flex-wrap relative mb-5 w-full'>
                <label className='font-normal text-sm text-[#c0c0c0] mb-[5px] pl-5' htmlFor='newpass'>
                  New password
                </label>
                <input
                  type='text'
                  id='newpass'
                  name='newpass'
                  className='focus:outline-[#25a56a] outline-none outline-1 bg-[#222227] duration-[0.5s] ease-in-out border border-solid border-transparent rounded-xl relative h-[46px] text-white text-base w-full px-5 font-inter'
                  placeholder=''
                />
              </div>
            </div>
            <div className='px-2.5 md:px-[15px] basis-full xl:basis-1/2 max-w-full xl:max-w-[50%] relative w-full'>
              <div className='flex flex-row justify-start items-end flex-wrap relative mb-5 w-full'>
                <label className='font-normal text-sm text-[#c0c0c0] mb-[5px] pl-5' htmlFor='cfpass'>
                  Confirm password
                </label>
                <input
                  type='text'
                  id='cfpass'
                  name='cfpass'
                  className='focus:outline-[#25a56a] outline-none outline-1 bg-[#222227] duration-[0.5s] ease-in-out border border-solid border-transparent rounded-xl relative h-[46px] text-white text-base w-full px-5 font-inter'
                  placeholder=''
                />
              </div>
            </div>
            <div className='px-2.5 md:px-[15px] basis-full xl:basis-1/2 max-w-full xl:max-w-[50%] relative w-full'>
              <div className='flex flex-row justify-start items-end flex-wrap relative mb-5 w-full'>
                <label className='font-normal text-sm text-[#c0c0c0] mb-[5px] pl-5' htmlFor='username'>
                  Select
                </label>
                <select
                  className='backgroundX focus:outline-[#25a56a] outline-none outline-1 duration-[0.5s] ease-in-out'
                  name='select'
                  id='select'
                >
                  <option value=''>Người yêu 1</option>
                  <option value=''>Người yêu 2</option>
                  <option value=''>Người yêu 3</option>
                  <option value=''>Người yêu 4</option>
                </select>
              </div>
            </div>
            <div className='md:px-[15px] px-2.5 basis-full w-full justify-start relative max-w-full'>
              <button className='lg:w-[180px] w-full mt-2.5 mx-0 mb-[15px] h-[50px] bg-[#25a56a] text-white rounded-xl flex flex-row items-center justify-center text-sm relative z-[2] uppercase font-inter hover:bg-[#222227] duration-[0.5s] ease-in-out'>
                Change
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default index
