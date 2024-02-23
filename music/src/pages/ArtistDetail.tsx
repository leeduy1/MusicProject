import React from 'react'
import Slider from 'react-slick'
import Facebookicon1 from '~/assets/Icons/Facebookicon1'
import Twittericon1 from '~/assets/Icons/Twittericon1'
import VkIcon from '~/assets/Icons/VkIcon'
import Podcast from '~/components/Podcast'
import SlideArrowNext from '~/components/SlideArrow/SlideArrowNext'
import SlideArrowPrev from '~/components/SlideArrow/SlideArrowPrev'

interface IPodcast {
  state: boolean
  url: string
  viewers: string
  img: string
  name: string
}

function ArtistDetail() {
  const podcastList: IPodcast[] = [
    {
      state: true,
      url: 'https://www.youtube.com/watch?v=FN7ALfpGxiI&pp=ygUKc8ahbiB0w7luZw%3D%3D',
      viewers: '6.5k viewers',
      img: 'https://volna.volkovdesign.com/img/live/1.jpg',
      name: 'Beautiful Stories From Anonymous People'
    },
    {
      state: true,
      url: 'https://www.youtube.com/watch?v=Llw9Q6akRo4&pp=ygUKc8ahbiB0w7luZw%3D%3D',
      viewers: '1.7k viewers',
      img: 'https://volna.volkovdesign.com/img/live/2.jpg',
      name: 'Song Exploder'
    },
    {
      state: true,
      url: 'https://www.youtube.com/watch?v=xypzmu5mMPY&pp=ygUKc8ahbiB0w7luZw%3D%3D',
      viewers: '924 viewers',
      img: 'https://volna.volkovdesign.com/img/live/3.jpg',
      name: 'Broken Record'
    },
    {
      state: true,
      url: 'https://www.youtube.com/watch?v=r1OtnOs-utU&pp=ygUKc8ahbiB0w7luZw%3D%3D',
      viewers: '638 viewers',
      img: 'https://volna.volkovdesign.com/img/live/4.jpg',
      name: 'Desert Island Discs'
    },
    {
      state: false,
      url: 'https://www.youtube.com/watch?v=-vtBgNxMyZI&pp=ygUKc8ahbiB0w7luZw%3D%3D',
      viewers: '588 viewers',
      img: 'https://volna.volkovdesign.com/img/live/5.jpg',
      name: 'Riffs On Riffs'
    },
    {
      state: false,
      url: 'https://www.youtube.com/watch?v=PdbsnGuduvo&pp=ygUKc8ahbiB0w7luZw%3D%3D',
      viewers: '638 viewers',
      img: 'https://volna.volkovdesign.com/img/live/6.jpg',
      name: 'Popcast'
    },
    {
      state: false,
      url: 'https://www.youtube.com/watch?v=knW7-x7Y7RE&pp=ygUKc8ahbiB0w7luZw%3D%3D',
      viewers: '9.5k viewers',
      img: 'https://volna.volkovdesign.com/img/live/7.jpg',
      name: 'Rolling Stone Music Now'
    },
    {
      state: false,
      url: 'https://www.youtube.com/watch?v=Thf6-faRGI4&pp=ygUKc8ahbiB0w7luZw%3D%3D',
      viewers: '1.6K viewers',
      img: 'https://volna.volkovdesign.com/img/live/8.jpg',
      name: 'Song VS .Song'
    },
    {
      state: false,
      url: 'https://www.youtube.com/watch?v=2-zSSzg8i3Y&pp=ygUKc8ahbiB0w7luZw%3D%3D',
      viewers: '638 viewers',
      img: 'https://volna.volkovdesign.com/img/live/9.jpg',
      name: 'Disgraceland'
    }
  ]

  const settings = {
    customPaging: function () {
      return <div className={`dot w-[10px] h-1 bg-white bg-opacity-[0.6] duration-500`}></div>
    },
    dots: false,
    infinite: true,
    speed: 400,
    slidesToScroll: 1,
    slidesToShow: 3,
    slidesPerRow: 1,
    nextArrow: <SlideArrowNext />,
    prevArrow: <SlideArrowPrev />
  }

  return (
    <div className='md:pt-[30px] pb-[70px] sm:pt-5 sm:pb-[50px] w-full px-[30px] mx-auto pt-[20px] relative'>
      <div className='flex flex-row gap-3 w-full'>
        <div className='w-[200px] min-w-[200px]'>
          <img className='rounded-lg w-full h-[220px]' src='/Image/sontung.jpg' alt='' />
        </div>
        <div className='flex flex-col'>
          <h3 className='text-4xl font-medium mb-2'>Sơn Tùng MTP</h3>
          <span className='text-[#c0c0c0] text-sm mb-8'>Nguyễn Thanh Tùng</span>
          <span className='text-[#c0c0c0]'>
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </span>
        </div>
      </div>
      <div className='mt-3 flex flex-wrap gap-5 text-[#c0c0c0]'>
        <span className=''>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like readable English.
        </span>
        <span className=''>
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </span>
        <ul className='block'>
          <li className='acticle text-base leading-7 pl-5 relative text-[#c0c0c0]'>Theme Forest</li>
          <li className='acticle text-base leading-7 pl-5 relative text-[#c0c0c0]'>Graphics River</li>
          <li className='acticle text-base leading-7 pl-5 relative text-[#c0c0c0]'>Audio Jungle</li>
          <li className='acticle text-base leading-7 pl-5 relative text-[#c0c0c0]'>3D Ocean</li>
          <li className='acticle text-base leading-7 pl-5 relative text-[#c0c0c0]'>Code Canayon</li>
        </ul>
        <span>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
          to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
          text. Link the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
          this the first true generator on the Internet.
        </span>
        <div className='w-full flex flex-row mb-10 flex-wrap'>
          <div className='flex mt-5 mr-5 flex-row h-[30px] pl-1 pr-[15px] rounded-lg bg-[#3b5998] justify-start items-center text-base cursor-pointer hover:bg-emerald duration-500 ease-in-out'>
            <Facebookicon1 className='w-[40px] h-5 pt-1 pb-1 fill-white' />
            <span className='text-white'>share</span>
          </div>
          <div className='flex mt-5 mr-5 flex-row h-[30px] pl-1 pr-[15px] rounded-lg bg-[#55acee] justify-start items-center text-base cursor-pointer hover:bg-emerald duration-500 ease-in-out'>
            <Twittericon1 className='w-[40px] h-5 pt-1 pb-1 fill-white' />
            <span className='text-white'>tweet</span>
          </div>
          <div className='flex mt-5 flex-row h-[30px] pl-1 py-0 pr-[15px] mr-5 rounded-lg bg-[#4c6c91] justify-start items-center text-base cursor-pointer hover:bg-emerald duration-500 ease-in-out'>
            <VkIcon className='w-[30px] h-5 mr-1 mt-2.5 fill-white' />
            <span className='text-white'>share</span>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap flex-col'>
        <div>
          <h3 className='text-4xl w-full'>Music videos</h3>
        </div>
        <div className='w-full'>
          <div className='slide-container block'>
            <Slider {...settings}>
              {podcastList.map((choose) => (
                <div className='pr-2'>
                  <Podcast
                    state={false}
                    url={choose.url}
                    viewers={choose.viewers}
                    img={choose.img}
                    name={choose.name}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistDetail
