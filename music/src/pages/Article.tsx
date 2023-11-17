import React from 'react'
import { Link } from 'react-router-dom'
import AddIcon1 from '~/assets/Icons/AddIcon1'
import ClockIcon from '~/assets/Icons/ClockIcon'
import Facebookicon1 from '~/assets/Icons/Facebookicon1'
import ProfileAvatar from '~/assets/Icons/ProfileAvatar'
import Quote from '~/assets/Icons/Quote'
import Reply from '~/assets/Icons/Reply'
import Subtraction from '~/assets/Icons/Subtraction'
import Twittericon1 from '~/assets/Icons/Twittericon1'
import VkIcon from '~/assets/Icons/VkIcon'

function Article() {
  return (
    <div className='w-full md:px-[15px] px-2.5 xl:ml-[8.3333333%] xl:basis-5/6 xl:max-w-[83.3333333%] basis-full max-w-full relative'>
      <div className='md:mt-[30px] block relative w-full mt-5'>
        <div className='relative'>
          <img
            className='w-full h-[700px] block mb-5 rounded-xl'
            src='https://2sao.vietnamnetjsc.vn/images/2020/02/11/16/38/kicm2.jpg'
            alt=''
          />
          <div className='md:mb-[25px] flex flex-row justify-between items-center flex-wrap w-full mb-5'>
            <Link to=''>
              <button className='inline-flex flex-row items-center justify-center h-[30px] min-w-[70px] w-auto bg-[#2f80ed] rounded-lg px-[15px]'>
                Documentary
              </button>
            </Link>
            <span className='flex flex-row justify-start item-center text-[13px]'>
              <ClockIcon className='w-[16px] h-auto fill-white mr-2' />
              03.05.2023, 02:27
            </span>
          </div>
          <h1 className='md:text-4xl text-3xl font-inter leading-[140%] mb-[15px] font-normal'>
            Winners Bracket Final Interview - Most Emotional Esports Interview
          </h1>
          <p className='block text-[16px] leading-7 mb-5 text-[#c0c0c0]'>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>
          <h1 className='md:text-4xl text-3xl font-inter leading-[140%] mb-[15px] font-normal'>
            Lorem Ipsum Unveiled: Ensuring Authenticity in Text Selection
          </h1>
          <p className='block text-[16px] leading-7 mb-5 text-[#c0c0c0]'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words which don't look even slightly believable. If you are
            going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
          <h1 className='md:text-4xl text-3xl font-inter leading-[140%] mb-[15px] font-normal'>
            Decoding Lorem Ipsum: Unraveling Its True Origin and Purpose
          </h1>
          <p className='block text-[16px] leading-7 mb-5 text-[#c0c0c0]'>
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this
            the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
          <p className='block text-[16px] leading-7 mb-5 text-[#c0c0c0]'>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
            Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
            source.
          </p>
          <h1 className='md:text-4xl text-3xl font-inter leading-[140%] mb-[15px] font-normal'>
            Demystifying Lorem Ipsum Generators: The Pioneering Authenticity of Internet Text Generation
          </h1>
          <p className='block text-[16px] leading-7 mb-5 text-[#c0c0c0]'>
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this
            the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
          <blockquote className='block relative text-[16px] leading-7 mb-5 pl-5'>
            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
            hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
            chunks as necessary, making this the first true generator on the Internet.
          </blockquote>
          <p className='block text-[16px] leading-7 mb-5 text-[#c0c0c0]'>
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <h1 className='md:text-4xl text-3xl font-inter leading-[140%] mb-[15px] font-normal'>
            Crafting Coherence: The Method Behind Lorem Ipsum Generation and the Imperative of Authenticity
          </h1>
          <p className='block text-[16px] leading-7 mb-5 text-[#c0c0c0]'>
            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from
            repetition, injected humour, or non-characteristic words etc.
          </p>
          <ul className='block mb-5'>
            <li className='acticle text-base leading-7 pl-5 relative text-[#c0c0c0]'>Theme Forest</li>
            <li className='acticle text-base leading-7 pl-5 relative text-[#c0c0c0]'>Graphics River</li>
            <li className='acticle text-base leading-7 pl-5 relative text-[#c0c0c0]'>Audio Jungle</li>
            <li className='acticle text-base leading-7 pl-5 relative text-[#c0c0c0]'>3D Ocean</li>
            <li className='acticle text-base leading-7 pl-5 relative text-[#c0c0c0]'>Code Canayon</li>
          </ul>
          <p className='block text-[16px] leading-7 mb-5 text-[#c0c0c0]'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words which don't look even slightly believable. If you are
            going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
            middle of text.{' '}
            <Link className='text-emerald underline hover:no-underline' to={''}>
              Link
            </Link>{' '}
            the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the
            first true generator on the Internet.
          </p>
        </div>
        <div className='w-full flex flex-row mb-10 flex-wrap'>
          <div className='flex mt-5 mr-5 flex-row h-[30px] pl-1 pr-[15px] rounded-lg bg-[#3b5998] justify-start items-center text-base cursor-pointer hover:bg-emerald duration-500 ease-in-out'>
            <Facebookicon1 className='w-[40px] h-5 pt-1 pb-1 fill-white' />
            <span>share</span>
          </div>
          <div className='flex mt-5 mr-5 flex-row h-[30px] pl-1 pr-[15px] rounded-lg bg-[#55acee] justify-start items-center text-base cursor-pointer hover:bg-emerald duration-500 ease-in-out'>
            <Twittericon1 className='w-[40px] h-5 pt-1 pb-1 fill-white' />
            <span>tweet</span>
          </div>
          <div className='flex mt-5 flex-row h-[30px] pl-1 py-0 pr-[15px] mr-5 rounded-lg bg-[#4c6c91] justify-start items-center text-base cursor-pointer hover:bg-emerald duration-500 ease-in-out'>
            <VkIcon className='w-[30px] h-5 mr-1 mt-2.5 fill-white' />
            <span>share</span>
          </div>
        </div>
        <div className='border-t border-solid border-[#222227] mt-[50px] pt-[50px] md:mt-[60px] md:pt-[60px]'>
          <div className='flex flex-row items-center justify-start mb-[30px] font-inter'>
            <h4 className='text-2xl mb-0 relative '>Comments</h4>
            <span className='w-auto h-5 rounded-[4px] mb-1 bg-emerald flex flex-row py-0 justify-center items-center min-w-[20px] text-xs px-[5px] ml-2.5'>
              5
            </span>
          </div>
          {/* Comment */}
          <ul>
            <li className='border border-solid border-[#222227] rounded-xl mb-5 block p-5 '>
              <div className='block relative mb-5'>
                <div className='md:mb-0 md:mr-[60px] flex flex-row justify-start items-center mb-[20px]'>
                  <div className='block relative w-[40px] cursor-pointer overflow-hidden rounded-[8px] mr-2.5'>
                    <ProfileAvatar className='w-full' />
                  </div>
                  <div className='flex flex-col justify-start items-start'>
                    <h3 className='block text-[16px] font-normal mb-[7px] leading-none'>Phan Quí Xuân</h3>
                    <span className='text-[#c0c0c0] text-[12px] leading-none'>17.11.2023, 17:23</span>
                  </div>
                </div>
              </div>
              <p className='block mb-0 text-[#c0c0c0] text-base relative py-5 border-t border-b border-solid leading-[26px] border-[#222227]'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                embarrassing hidden in the middle of text.
              </p>
              <div className='flex flex-row justify-end items-center pt-5 relative'>
                <div className='inline-flex flex-row justify-start items-center absolute left-0 top-5'>
                  <button className='comment1 mr-[14px] cursor-pointer flex-row flex justify-center items-center text-[#c0c0c0] text-sm relative h-5 group duration-300 ease-in-out hover:text-white'>
                    <AddIcon1 className='w-[16px] mr-[8px] opacity-75 duration-300 ease-in-out fill-emerald group-hover:opacity-100' />
                    12
                  </button>
                  <button className='ml-2 cursor-pointer flex-row flex justify-center items-center text-[#c0c0c0] text-sm relative h-5'>
                    7
                    <Subtraction className='w-[16px] ml-[8px] fill-[#eb5757]' />
                  </button>
                </div>
                <button className='cursor-pointer flex flex-row justify-start items-center mr-5 h-5 group'>
                  <Reply className='w-[16px] h-auto fill-[#c0c0c0] group-hover:fill-emerald duration-500 ease-in-out' />
                  <span className='uppercase text-base ml-2 hidden sm:block sm:ml-[6px] text-[#c0c0c0] duration-500 ease-in-out group-hover:text-white'>
                    reply
                  </span>
                </button>
                <button className='cursor-pointer flex flex-row justify-start items-center mr-0 h-5 group'>
                  <Quote className='w-[16px] h-auto fill-[#c0c0c0] group-hover:fill-emerald duration-500 ease-in-out' />
                  <span className='uppercase text-base ml-2 hidden sm:block sm:ml-[6px] text-[#c0c0c0] duration-500 ease-in-out group-hover:text-white'>
                    quote
                  </span>
                </button>
              </div>
            </li>
            <li className='border border-solid border-[#222227] rounded-xl ml-[30px] mb-5 block p-5 '>
              <div className='block relative mb-5'>
                <div className='md:mb-0 md:mr-[60px] flex flex-row justify-start items-center mb-[20px]'>
                  <div className='block relative w-[40px] cursor-pointer overflow-hidden rounded-[8px] mr-2.5'>
                    <ProfileAvatar className='w-full' />
                  </div>
                  <div className='flex flex-col justify-start items-start'>
                    <h3 className='block text-[16px] font-normal mb-[7px] leading-none'>Phan Quí Xuân</h3>
                    <span className='text-[#c0c0c0] text-[12px] leading-none'>24.08.2021, 16:41</span>
                  </div>
                </div>
              </div>
              <p className='block mb-0 text-[#c0c0c0] text-base relative py-5 border-t border-b border-solid leading-[26px] border-[#222227]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
              <div className='flex flex-row justify-end items-center pt-5 relative'>
                <div className='inline-flex flex-row justify-start items-center absolute left-0 top-5'>
                  <button className='comment1 mr-[14px] cursor-pointer flex-row flex justify-center items-center text-[#c0c0c0] text-sm relative h-5 group duration-300 ease-in-out hover:text-white'>
                    <AddIcon1 className='w-[16px] mr-[8px] opacity-75 duration-300 ease-in-out fill-emerald group-hover:opacity-100' />
                    10
                  </button>
                  <button className='ml-2 cursor-pointer flex-row flex justify-center items-center text-[#c0c0c0] text-sm relative h-5'>
                    0
                    <Subtraction className='w-[16px] ml-[8px] fill-[#eb5757]' />
                  </button>
                </div>
                <button className='cursor-pointer flex flex-row justify-start items-center mr-5 h-5 group'>
                  <Reply className='w-[16px] h-auto fill-[#c0c0c0] group-hover:fill-emerald duration-500 ease-in-out' />
                  <span className='uppercase text-base ml-2 hidden sm:block sm:ml-[6px] text-[#c0c0c0] duration-500 ease-in-out group-hover:text-white'>
                    reply
                  </span>
                </button>
                <button className='cursor-pointer flex flex-row justify-start items-center mr-0 h-5 group'>
                  <Quote className='w-[16px] h-auto fill-[#c0c0c0] group-hover:fill-emerald duration-500 ease-in-out' />
                  <span className='uppercase text-base ml-2 hidden sm:block sm:ml-[6px] text-[#c0c0c0] duration-500 ease-in-out group-hover:text-white'>
                    quote
                  </span>
                </button>
              </div>
            </li>
            <li className='border border-solid border-[#222227] rounded-xl ml-[30px] mb-5 block p-5 '>
              <div className='block relative mb-5'>
                <div className='md:mb-0 md:mr-[60px] flex flex-row justify-start items-center mb-[20px]'>
                  <div className='block relative w-[40px] cursor-pointer overflow-hidden rounded-[8px] mr-2.5'>
                    <ProfileAvatar className='w-full' />
                  </div>
                  <div className='flex flex-col justify-start items-start'>
                    <h3 className='block text-[16px] font-normal mb-[7px] leading-none'>Phan Quí Xuân</h3>
                    <span className='text-[#c0c0c0] text-[12px] leading-none'>11.08.2021, 11:11</span>
                  </div>
                </div>
              </div>
              <p className='block mb-0 text-[#c0c0c0] text-base relative py-5 border-t border-b leading-[26px] border-solid border-[#222227]'>
                <span className='block relative mb-5 p-5 min-h-[80px] rounded-xl leading-[26px] bg-[#222227]'>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised words which don't look even slightly
                  believable.
                </span>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                embarrassing hidden in the middle of text.
              </p>
              <div className='flex flex-row justify-end items-center pt-5 relative'>
                <div className='inline-flex flex-row justify-start items-center absolute left-0 top-5'>
                  <button className='comment1 mr-[14px] cursor-pointer flex-row flex justify-center items-center text-[#c0c0c0] text-sm relative h-5 group duration-300 ease-in-out hover:text-white'>
                    <AddIcon1 className='w-[16px] mr-[8px] opacity-75 duration-300 ease-in-out fill-emerald group-hover:opacity-100' />
                    9
                  </button>
                  <button className='ml-2 cursor-pointer flex-row flex justify-center items-center text-[#c0c0c0] text-sm relative h-5'>
                    2
                    <Subtraction className='w-[16px] ml-[8px] fill-[#eb5757]' />
                  </button>
                </div>
                <button className='cursor-pointer flex flex-row justify-start items-center mr-5 h-5 group'>
                  <Reply className='w-[16px] h-auto fill-[#c0c0c0] group-hover:fill-emerald duration-500 ease-in-out' />
                  <span className='uppercase text-base ml-2 hidden sm:block sm:ml-[6px] text-[#c0c0c0] duration-500 ease-in-out group-hover:text-white'>
                    reply
                  </span>
                </button>
                <button className='cursor-pointer flex flex-row justify-start items-center mr-0 h-5 group'>
                  <Quote className='w-[16px] h-auto fill-[#c0c0c0] group-hover:fill-emerald duration-500 ease-in-out' />
                  <span className='uppercase text-base ml-2 hidden sm:block sm:ml-[6px] text-[#c0c0c0] duration-500 ease-in-out group-hover:text-white'>
                    quote
                  </span>
                </button>
              </div>
            </li>
            <li className='border border-solid border-[#222227] rounded-xl mb-5 block p-5 '>
              <div className='block relative mb-5'>
                <div className='md:mb-0 md:mr-[60px] flex flex-row justify-start items-center mb-[20px]'>
                  <div className='block relative w-[40px] cursor-pointer overflow-hidden rounded-[8px] mr-2.5'>
                    <ProfileAvatar className='w-full' />
                  </div>
                  <div className='flex flex-col justify-start items-start'>
                    <h3 className='block text-[16px] font-normal mb-[7px] leading-none'>Phan Quí Xuân</h3>
                    <span className='text-[#c0c0c0] text-[12px] leading-none'>17.11.2023, 17:23</span>
                  </div>
                </div>
              </div>
              <p className='block mb-0 text-[#c0c0c0] text-base relative py-5 border-t border-b border-solid leading-[26px] border-[#222227]'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                embarrassing hidden in the middle of text.
              </p>
              <div className='flex flex-row justify-end items-center pt-5 relative'>
                <div className='inline-flex flex-row justify-start items-center absolute left-0 top-5'>
                  <button className='comment1 mr-[14px] cursor-pointer flex-row flex justify-center items-center text-[#c0c0c0] text-sm relative h-5 group duration-300 ease-in-out hover:text-white'>
                    <AddIcon1 className='w-[16px] mr-[8px] opacity-75 duration-300 ease-in-out fill-emerald group-hover:opacity-100' />
                    7
                  </button>
                  <button className='ml-2 cursor-pointer flex-row flex justify-center items-center text-[#c0c0c0] text-sm relative h-5'>
                    4
                    <Subtraction className='w-[16px] ml-[8px] fill-[#eb5757]' />
                  </button>
                </div>
                <button className='cursor-pointer flex flex-row justify-start items-center mr-5 h-5 group'>
                  <Reply className='w-[16px] h-auto fill-[#c0c0c0] group-hover:fill-emerald duration-500 ease-in-out' />
                  <span className='uppercase text-base ml-2 hidden sm:block sm:ml-[6px] text-[#c0c0c0] duration-500 ease-in-out group-hover:text-white'>
                    reply
                  </span>
                </button>
                <button className='cursor-pointer flex flex-row justify-start items-center mr-0 h-5 group'>
                  <Quote className='w-[16px] h-auto fill-[#c0c0c0] group-hover:fill-emerald duration-500 ease-in-out' />
                  <span className='uppercase text-base ml-2 hidden sm:block sm:ml-[6px] text-[#c0c0c0] duration-500 ease-in-out group-hover:text-white'>
                    quote
                  </span>
                </button>
              </div>
            </li>
            <li className='border border-solid border-[#222227] rounded-xl mb-5 block p-5 '>
              <div className='block relative mb-5'>
                <div className='md:mb-0 md:mr-[60px] flex flex-row justify-start items-center mb-[20px]'>
                  <div className='block relative w-[40px] cursor-pointer overflow-hidden rounded-[8px] mr-2.5'>
                    <ProfileAvatar className='w-full' />
                  </div>
                  <div className='flex flex-col justify-start items-start'>
                    <h3 className='block text-[16px] font-normal mb-[7px] leading-none'>Phan Quí Xuân</h3>
                    <span className='text-[#c0c0c0] text-[12px] leading-none'>17.11.2023, 17:23</span>
                  </div>
                </div>
              </div>
              <p className='block mb-0 text-[#c0c0c0] text-base relative py-5 border-t border-b border-solid leading-[26px] border-[#222227]'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                embarrassing hidden in the middle of text.
              </p>
              <div className='flex flex-row justify-end items-center pt-5 relative'>
                <div className='inline-flex flex-row justify-start items-center absolute left-0 top-5'>
                  <button className='comment1 mr-[14px] cursor-pointer flex-row flex justify-center items-center text-[#c0c0c0] text-sm relative h-5 group duration-300 ease-in-out hover:text-white'>
                    <AddIcon1 className='w-[16px] mr-[8px] opacity-75 duration-300 ease-in-out fill-emerald group-hover:opacity-100' />
                    2
                  </button>
                  <button className='ml-2 cursor-pointer flex-row flex justify-center items-center text-[#c0c0c0] text-sm relative h-5'>
                    17
                    <Subtraction className='w-[16px] ml-[8px] fill-[#eb5757]' />
                  </button>
                </div>
                <button className='cursor-pointer flex flex-row justify-start items-center mr-5 h-5 group'>
                  <Reply className='w-[16px] h-auto fill-[#c0c0c0] group-hover:fill-emerald duration-500 ease-in-out' />
                  <span className='uppercase text-base ml-2 hidden sm:block sm:ml-[6px] text-[#c0c0c0] duration-500 ease-in-out group-hover:text-white'>
                    reply
                  </span>
                </button>
                <button className='cursor-pointer flex flex-row justify-start items-center mr-0 h-5 group'>
                  <Quote className='w-[16px] h-auto fill-[#c0c0c0] group-hover:fill-emerald duration-500 ease-in-out' />
                  <span className='uppercase text-base ml-2 hidden sm:block sm:ml-[6px] text-[#c0c0c0] duration-500 ease-in-out group-hover:text-white'>
                    quote
                  </span>
                </button>
              </div>
            </li>
          </ul>
          <form action='' className='rounded-xl p-5 border border-solid border-[#222227] mt-[30px] mb-[40px]'>
            <div className='flex flex-row justify-start items-end flex-wrap relative mb-5 w-full'>
              <textarea
                className='bg-[#222227] border border-solid border-transparent rounded-xl text-white h-36 relative text-base w-full py-[15px] px-5 resize-none font-inter'
                name=''
                id=''
                placeholder='Add comments'
              ></textarea>
            </div>
            <button className='cursor-pointer sm:w-[180px] m-0 w-full bg-emerald flex flex-row justify-center items-center text-sm relative z-[2] uppercase font-medium h-[50px] rounded-xl'>
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Article
