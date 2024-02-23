import React, { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import AbtractionIcon from '~/assets/Icons/AbtractionIcon'
import AddIcon from '~/assets/Icons/AddIcon'
import Facebookicon1 from '~/assets/Icons/Facebookicon1'
import Twittericon1 from '~/assets/Icons/Twittericon1'
import VkIcon from '~/assets/Icons/VkIcon'
import { SlideArrowNext, SlideArrowPrev } from '~/components/SlideArrow'
import Tittle from '~/components/Titlle'

interface IElement {
  url: string
  name: string
  price: string
  state: boolean
}

function Product() {
  const settings = {
    customPaging: function () {
      return <div className={`dot w-[10px] h-1 bg-white bg-opacity-[0.6] duration-500`}></div>
    },
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SlideArrowNext />,
    prevArrow: <SlideArrowPrev />
  }

  const elements: IElement[] = [
    { url: 'https://volna.volkovdesign.com/img/store/item1.jpg', name: 'Vinyl Player', price: '$1 099', state: true },
    { url: 'https://volna.volkovdesign.com/img/store/item2.jpg', name: 'Microphone R4', price: '$799', state: false },
    { url: 'https://volna.volkovdesign.com/img/store/item3.jpg', name: 'Music Blank', price: '$3.99', state: true },
    {
      url: 'https://volna.volkovdesign.com/img/store/item4.jpg',
      name: 'Headphones ZR-991',
      price: '$199',
      state: false
    },
    { url: 'https://volna.volkovdesign.com/img/store/item5.jpg', name: 'Piano', price: '$11 899', state: false },
    { url: 'https://volna.volkovdesign.com/img/store/item6.jpg', name: 'Vinyl Player', price: '$2 499', state: false },
    { url: 'https://volna.volkovdesign.com/img/store/item7.jpg', name: 'Guitar', price: '$299', state: false },
    { url: 'https://volna.volkovdesign.com/img/store/item8.jpg', name: 'Microphone R4s', price: '$199', state: false }
  ]

  const [currentImage, setCurrentImage] = useState(1)

  const onChangeImage = (ImageNumber: number) => {
    setCurrentImage(ImageNumber)
  }
  const [count, setCount] = useState(1)

  const handleDecreaseCount = () => {
    count === 1 ? setCount(1) : setCount(count - 1)
  }
  const handleIncreaseCount = () => {
    setCount(count + 1)
  }
  return (
    <div className='md:pt-[30px] pb-[70px] sm:pt-5 sm:pb-[50px] w-full px-[30px] mx-auto pt-[20px] relative'>
      <div className='w-full'>
        <Tittle nameTittle={'Headphones ZR-991'} />
      </div>
      <div className='mt-5'>
        {/* product */}
        <div className='border border-solid border-[#222227] rounded-xl p-5 flex'>
          <div className='basis-1/4 max-w-[25%] flex flex-col h-[300px] relative'>
            <div className='flex flex-row'>
              <div className='absolute overflow-hidden w-[280px] '>
                <div className='flex flex-row gap-4 w-[560px]'>
                  <div className='w-[280px]'>
                    <img
                      src='https://volna.volkovdesign.com/img/store/item4.jpg'
                      className={`w-full rounded-lg duration-500 ease-linear ${
                        currentImage === 1 ? 'block' : '-translate-x-[290px]'
                      }`}
                      alt=''
                    />
                  </div>
                  <div className='w-[280px]'>
                    <img
                      src='https://volna.volkovdesign.com/img/store/item4.jpg'
                      className={`w-full rounded-lg duration-500 ease-linear ${
                        currentImage === 2 ? 'block -translate-x-[290px]' : ''
                      }`}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row bottom-0 left-[50%] -translate-x-[50%] absolute mt-5 gap-3'>
              <button onClick={() => onChangeImage(1)}>
                <span
                  className={`duration-500 ease-in-out block h-1 rounded-sm hover:bg-emerald ${
                    currentImage === 1 ? 'bg-emerald w-5' : 'bg-[#c0c0c0] w-3'
                  }`}
                ></span>
              </button>
              <button onClick={() => onChangeImage(2)}>
                <span
                  className={`duration-500 ease-in-out block h-1 rounded-sm hover:bg-emerald ${
                    currentImage === 2 ? 'bg-emerald w-5' : 'w-3 bg-[#c0c0c0]'
                  }`}
                ></span>
              </button>
            </div>
          </div>
          <div className='flex basis-3/4 max-w-[75%] flex-col'>
            <h1 className='md:text-2xl text-[22px] font-inter font-normal mb-[15px] leading-[140%]'>
              About Headphones ZR-991
            </h1>
            <span className='text-3xl leading-[100%] block w-full font-medium mb-[15px]'>$199</span>
            <p className='block text-base leading-7 text-[#c0c0c0] mb-[20px]'>
              There are many <b>variations</b> of passages of Lorem Ipsum available, but the majority have
              <Link className='underline text-emerald px-1 hover:no-underline' to=''>
                suffered
              </Link>
              alteration in some form, by injected humour, or randomised words which don't look even slightly
              believable. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
              passages.
            </p>
            <div className='flex flex-row gap-2 bg-[#222227] w-[90px] justify-center items-center rounded-lg h-8 mb-5'>
              <button onClick={() => handleDecreaseCount()}>
                <AbtractionIcon className='hover:fill-emerald fill-[#c0c0c0] duration-500 ease-in-out h-auto w-5' />
              </button>
              <span>{count}</span>
              <button onClick={() => handleIncreaseCount()}>
                <AddIcon className='hover:fill-emerald fill-[#c0c0c0] duration-500 ease-in-out h-auto w-5' />
              </button>
            </div>
            <button className='flex justify-center bg-emerald w-44 rounded-xl h-12 flex-row items-center px-6 uppercase text-sm relative font-medium font-inter mb-5 duration-500 ease-in-out hover:bg-[#222227] hover:text-emerald'>
              add to cart
            </button>
            <ul className='block mb-5'>
              <li className='acticle text-base leading-7 pl-5 relative text-[#c0c0c0]'>Theme Forest</li>
              <li className='acticle text-base leading-7 pl-5 relative text-[#c0c0c0]'>Graphics River</li>
              <li className='acticle text-base leading-7 pl-5 relative text-[#c0c0c0]'>Audio Jungle</li>
              <li className='acticle text-base leading-7 pl-5 relative text-[#c0c0c0]'>3D Ocean</li>
              <li className='acticle text-base leading-7 pl-5 relative text-[#c0c0c0]'>Code Canayon</li>
            </ul>
            <div className='w-full flex flex-row mb-10 flex-wrap'>
              <div className='flex mt-5 mr-5 flex-row h-[30px] pl-1 pr-[15px] rounded-lg bg-[#3b5998] justify-start items-center text-base cursor-pointer hover:bg-emerald duration-500 ease-in-out'>
                <Facebookicon1 className='w-[40px] h-6 pt-1 pb-1 fill-white' />
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
          </div>
        </div>
        <div className='mt-8'>
          <div className='w-full'>
            <div className='md:mt-[70px] md:mb-0 flex flex-row justify-between items-end flex-wrap mb-2.5 mt-[60px]'>
              <h1 className='md:text-3xl flex flex-row justify-start items-start font-inter font-normal text-[26px] mb-0 relative'>
                Recommend
              </h1>
              <Link
                to=''
                className='flex flex-row justify-center items-center text-base text-[#c0c0c0] font-normal group hover:text-white duration-500 ease-in-out'
              >
                See all
                <FiArrowRight className='ml-1 group-hover:text-emerald duration-100 w-[22px] h-auto ease-in-out' />
              </Link>
            </div>
            <div className='slide-container block'>
              <Slider {...settings}>
                {elements.map((element) => {
                  return (
                    <div className=' pr-5'>
                      <div className='md:mt-[30px] relative mt-5 rounded-xl bg-[#212529] w-full overflow-hidden flex flex-col justify-start items-start p-5'>
                        <div className='product w-full relative rounded-xl overflow-hidden select-none group'>
                          <img src={element.url} alt='' className='w-full relative block z-[1]' />
                          <button className='cursor-pointer absolute top-1/2 left-1/2 rounded-xl w-[48px] h-[48px] flex flex-row justify-center items-center mt-[-24px] ml-[-24px] z-[5] bg-[#222227] scale-0 group-hover:scale-[1] ease-in-out duration-500'>
                            <AddIcon className='fill-white hover:fill-emerald w-[24px] h-auto duration-500 ease-in-out' />
                          </button>
                        </div>
                        <h3 className='block w-full text-[17px] font-normal mb-0 text-ellipsis mt-[15px] hover:text-emerald duration-500 ease-in-out'>
                          {element.name}
                        </h3>
                        <span className='block text-[17px] text-[#c0c0c0] mt-[5px] w-full font-medium'>
                          {element.price}
                        </span>
                        <span className='absolute bottom-6 right-6 text-[#eb5757]'>{element.state ? 'New' : ''}</span>
                      </div>
                    </div>
                  )
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
