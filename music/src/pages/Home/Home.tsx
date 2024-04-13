import { AiOutlineArrowRight } from 'react-icons/ai'
import { TiMicrophoneOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import NewIcon1 from '~/assets/Icons/NewIcon1'
import Note from '~/assets/Icons/Note'
import Artist from '~/components/Artist'
import NewItem from '~/components/NewItem'
import TabNews1 from '~/components/News/TabNews1'
import Podcast from '~/components/Podcast'
import ProductSlide from '~/components/Product'
import ReleaseCard from '~/components/ReleaseCard'
import ReleaseCardSlide from '~/components/ReleaseCardSlide'
import { SlideArrowNext, SlideArrowPrev } from '~/components/SlideArrow'

interface IElement {
  url: string
  name: string
  price: string
  state: boolean
}
interface IPodcast {
  state: boolean
  url: string
  viewers: string
  img: string
  name: string
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
interface IArtists {
  name: string
  url: string
}
interface ISlide {
  url: string
  caption: string
  date: string
  time: string
  name: string
  address: string
  state: boolean
}

function Home() {
  const settings = {
    customPaging: function () {
      return <div className={`dot w-[10px] h-1 bg-white bg-opacity-[0.6] rounded-[12px] duration-500`}></div>
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SlideArrowNext />,
    prevArrow: <SlideArrowPrev />
  }

  const settingProduct = {
    customPaging: function () {
      return <div className={`dot w-[10px] h-1 bg-white bg-opacity-[0.6] duration-500 `}></div>
    },
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SlideArrowNext />,
    prevArrow: <SlideArrowPrev />
  }

  const settings1 = {
    customPaging: function () {
      return <div className={`dot w-[10px] h-1 bg-white bg-opacity-[0.6] rounded-[12px] duration-500`}></div>
    },
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SlideArrowNext />,
    prevArrow: <SlideArrowPrev />
  }
  const settings2 = {
    customPaging: function () {
      return (
        <div
          className={`dot
       w-[10px] h-1 bg-white bg-opacity-[0.6] rounded-[12px] duration-500`}
        ></div>
      )
    },
    useCSS: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SlideArrowNext />,
    prevArrow: <SlideArrowPrev />
  }
  const artists: IArtists[] = [
    {
      name: 'Sơn Tùng',
      url: '/Image/sontung.jpg'
    },
    {
      name: 'Jack',
      url: '/Image/jack.jpg'
    },
    { name: 'Tăng Duy Tân', url: '/Image/tangduytang.jpg' },
    { name: 'Đức Phúc', url: '/Image/đức phúc.jpg' },
    { name: 'Mỹ Tâm', url: '/Image/mytam.jpg' },
    { name: 'Bùi Anh Tuấn', url: '/Image/buianhtuan.jpg' },
    { name: 'Hà Anh Tuấn', url: '/Image/haanhtuan.jpg' },
    { name: 'Lệ Quyên', url: '/Image/lequen.jpg' },
    { name: 'Hòa Minzy', url: '/Image/hoaminzy.jpg' },
    { name: 'Mono', url: '/Image/mono.jpg' },
    { name: 'Erik', url: '/Image/erik.jpg' },
    { name: 'Tuấn Hưng', url: '/Image/tuanhung.jpg' },
    { name: 'Anh Tú', url: '/Image/anhtu.jpg' },
    { name: 'Noo Phước Thịnh', url: '/Image/noophuocthinh.jpg' },
    { name: 'Karik', url: '/Image/karrik.jpg' }
  ]

  const slide: ISlide[] = [
    {
      url: 'https://volna.volkovdesign.com/img/events/event1.jpg',
      caption: 'Slide 1',
      date: 'March 14, 2021',
      time: '8:00 pm',
      name: 'Sorry Babushka',
      address: '1 East Plumb Branch St.Saint Petersburg, FL 33702',
      state: true
    },
    {
      url: 'https://volna.volkovdesign.com/img/events/event2.jpg',
      caption: 'Slide 2',
      date: 'March 16, 2021',
      time: '7:00 pm',
      name: 'Big Daddy',
      address: '71 Pilgrim Avenue Chevy Chase, MD 20815',
      state: true
    },
    {
      url: 'https://volna.volkovdesign.com/img/events/event3.jpg',
      caption: 'Slide 3',
      date: 'March 23, 2021',
      time: '9:30 pm',
      name: 'Rocky Pub',
      address: '514 S. Magnolia St. Orlando, FL 32806',
      state: false
    },
    {
      url: 'https://volna.volkovdesign.com/img/events/event4.jpg',
      caption: 'Slide 4',
      date: 'March 30, 2021',
      time: '6:00 pm',
      name: 'Big Club',
      address: '123 6th St. Melbourne, FL 32904',
      state: true
    },
    {
      url: 'https://volna.volkovdesign.com/img/events/event5.jpg',
      caption: 'Slide 5',
      date: 'March 30, 2021',
      time: '10:00 pm',
      name: 'Big Daddy',
      address: '71 Pilgrim Avenue Chevy Chase, MD 20815',
      state: true
    },
    {
      url: 'https://volna.volkovdesign.com/img/events/event6.jpg',
      caption: 'Slide 6',
      date: 'March 31, 2021',
      time: '6:30 pm',
      name: 'Rocky Pub',
      address: '514 S. Magnolia St. Orlando, FL 32806',
      state: false
    }
  ]

  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 1'
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      caption: 'Slide 2'
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 3'
    }
  ]
  const List = [
    {
      url: 'http://volna.volkovdesign.com/img/covers/cover1.jpg',
      videoAmount: '22',
      listenerAmount: '19503',
      artistName: 'Space Melody',
      creator: ['VIZE', 'Alan Walker', 'Lean']
    },
    {
      url: 'http://volna.volkovdesign.com/img/covers/cover2.jpg',
      videoAmount: '7',
      listenerAmount: '4731',
      artistName: 'Said Sum',
      creator: ['MoneyBagg']
    },
    {
      url: 'http://volna.volkovdesign.com/img/covers/cover3.jpg',
      videoAmount: '16',
      listenerAmount: '300000',
      artistName: 'I Love My Country',
      creator: ['Florida Georgia']
    },
    {
      url: 'http://volna.volkovdesign.com/img/covers/cover4.jpg',
      videoAmount: '7',
      listenerAmount: '4731',
      artistName: 'Said Sum',
      creator: ['MoneyBagg']
    },
    {
      url: 'http://volna.volkovdesign.com/img/covers/cover5.jpg',
      videoAmount: '7',
      listenerAmount: '4731',
      artistName: 'Said Sum',
      creator: ['MoneyBagg']
    },
    {
      url: 'http://volna.volkovdesign.com/img/covers/cover6.jpg',
      videoAmount: '7',
      listenerAmount: '4731',
      artistName: 'Said Sum',
      creator: ['MoneyBagg']
    },
    {
      url: 'http://volna.volkovdesign.com/img/covers/cover7.jpg',
      videoAmount: '7',
      listenerAmount: '4731',
      artistName: 'Said Sum',
      creator: ['MoneyBagg']
    },
    {
      url: 'http://volna.volkovdesign.com/img/covers/cover8.jpg',
      videoAmount: '7',
      listenerAmount: '4731',
      artistName: 'Said Sum',
      creator: ['MoneyBagg']
    },
    {
      url: 'http://volna.volkovdesign.com/img/covers/cover9.jpg',
      videoAmount: '7',
      listenerAmount: '4731',
      artistName: 'Said Sum',
      creator: ['MoneyBagg']
    },
    {
      url: 'http://volna.volkovdesign.com/img/covers/cover10.jpg',
      videoAmount: '7',
      listenerAmount: '4731',
      artistName: 'Said Sum',
      creator: ['MoneyBagg']
    },
    {
      url: 'http://volna.volkovdesign.com/img/covers/cover11.jpg',
      videoAmount: '7',
      listenerAmount: '4731',
      artistName: 'Said Sum',
      creator: ['MoneyBagg']
    },
    {
      url: 'http://volna.volkovdesign.com/img/covers/cover12.jpg',
      videoAmount: '7',
      listenerAmount: '4731',
      artistName: 'Said Sum',
      creator: ['MoneyBagg']
    }
  ]
  const settingPodcasts = {
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
    <div className='container'>
      <div className='slide-container min-[468px]:block hidden slideHome'>
        <Slider {...settings}>
          {slideImages.map((slideImage, index) => (
            <div key={index} className={`w-full h-[460px] rounded-[12px] overflow-hidden relative`}>
              <img src={slideImage.url} alt='' className='w-full h-full' />
              <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-[0.3] -z-0'></div>
              <div className='absolute top-0 left-0 right-0 bottom-0 z-[1] flex flex-col justify-center gap-[20px] md:px-[60px] md:py-[60px] sm:px-[30px] sm:py-[30px] px-[20px] py-[20px]'>
                <h2 className='md:text-[44px] font-inter md:leading-[130%] sm:text-[32px] sm:leading-[42px] text-[28px]'>
                  Record Label & Music Streaming
                </h2>
                <p className='text-[17px] leading-[28px] text-grey-C0 max-w-[730px] sm:line-clamp-none line-clamp-3'>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised words which don't look even slightly
                  believable
                </p>
                <div className='flex gap-[30px] mt-[20px]'>
                  <button className='h-[50px] px-[25px] uppercase flex items-center justify-center text-[14px] rounded-[12px] bg-emerald font-[500] min-w-[160px]'>
                    Buy now
                  </button>
                  <button className='h-[50px] px-[25px] uppercase flex items-center justify-center text-[14px] rounded-[12px] bg-[#222227] font-[500] min-w-[160px]'>
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className='mt-10'>
          <div className='flex justify-between items-center'>
            <h1 className='text-[30px] font-inter'>New Release</h1>
            <div className='flex items-center gap-[10px] text-[#c0c0c0] cursor-pointer group '>
              <Link to='/releases' className='group-hover:text-white duration-150'>
                See all
              </Link>
              <AiOutlineArrowRight className='group-hover:text-emerald duration-150' />
            </div>
          </div>
          <div className='flex flex-row mb-14 justify-center flex-wrap'>
            {List.map((choose) => {
              return (
                <ReleaseCard
                  thumbnail={choose.url}
                  numbersOfVideo={choose.videoAmount}
                  numbersOfListener={choose.listenerAmount}
                  name={choose.artistName}
                  authors={choose.creator}
                />
              )
            })}
          </div>
          <div className='flex justify-between items-center mb-5'>
            <h1 className='text-[30px] font-inter'>Upcoming Events</h1>
            <div className='flex items-center gap-[10px] text-[#c0c0c0] cursor-pointer group '>
              <Link to='/releases' className='group-hover:text-white duration-150'>
                See all
              </Link>
              <AiOutlineArrowRight className='group-hover:text-emerald duration-150' />
            </div>
          </div>
          <div className='slide-container block'>
            <Slider {...settings1} className='pb-20'>
              {slide.map((slideImage) => (
                <div className='pr-7'>
                  <ReleaseCardSlide
                    url={slideImage.url}
                    date={slideImage.date}
                    time={slideImage.time}
                    name={slideImage.name}
                    address={slideImage.address}
                    state={slideImage.state}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className='flex justify-between items-center'>
            <h1 className='text-[30px] font-inter'>Artists</h1>
            <div className='flex items-center gap-[10px] text-[#c0c0c0] cursor-pointer group '>
              <Link to='/artists' className='group-hover:text-white duration-150'>
                See all
              </Link>
              <AiOutlineArrowRight className='group-hover:text-emerald duration-150' />
            </div>
          </div>
          <div className='mt-1 w-full'>
            <div className='slide-container block'>
              <Slider {...settings2} className='pb-20'>
                {artists.map((artist) => (
                  <div className='pr-5'>
                    <Artist name={artist.name} url={artist.url} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className='flex flex-row justify-center items-center'>
            <div className='flex basis-1/3 max-w-[33.333333%] flex-col'>
              <div className='flex flex-row items-center gap-2'>
                <NewIcon1 className='w-7 h-7' />
                <h1 className='text-3xl font-medium'>Top singles</h1>
              </div>
              <NewItem status={false} />
            </div>
            <div className='flex basis-1/3 max-w-[33.333333%] flex-col'>
              <div className='flex flex-row items-center gap-2'>
                <Note className='w-7 h-7' />
                <h1 className='text-3xl font-medium'>New singles</h1>
              </div>
              <NewItem status={false} />
            </div>
            <div className='flex basis-1/3 max-w-[33.333333%] flex-col'>
              <div className='flex flex-row items-center gap-2'>
                <TiMicrophoneOutline className='w-7 h-7 fill-emerald' />
                <h1 className='text-3xl font-medium'>Podcasts</h1>
              </div>
              <NewItem status={false} />
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center mb-5 mt-5'>
          <h1 className='text-[30px] font-inter'>Podcasts</h1>
          <div className='flex items-center gap-[10px] text-[#c0c0c0] cursor-pointer group '>
            <Link to='/releases' className='group-hover:text-white duration-150'>
              See all
            </Link>
            <AiOutlineArrowRight className='group-hover:text-emerald duration-150' />
          </div>
        </div>
        <div className='w-full'>
          <div className='slide-container block'>
            <Slider {...settingPodcasts} className='pb-16'>
              {podcastList.map((choose) => (
                <div className='pr-3'>
                  <Podcast
                    state={choose.state}
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
        <div className='flex justify-between items-center'>
          <h1 className='text-[30px] font-inter'>Products</h1>
          <div className='flex items-center gap-[10px] text-[#c0c0c0] cursor-pointer group '>
            <Link to='/releases' className='group-hover:text-white duration-150'>
              See all
            </Link>
            <AiOutlineArrowRight className='group-hover:text-emerald duration-150' />
          </div>
        </div>
        <div className='w-full'>
          <div className='slide-container block'>
            <Slider className='pb-20' {...settingProduct}>
              {elements.map((element) => {
                return (
                  <ProductSlide url={element.url} name={element.name} price={element.price} state={element.state} />
                )
              })}
            </Slider>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <h1 className='text-[30px] font-inter'>News</h1>
          <div className='flex items-center gap-[10px] text-[#c0c0c0] cursor-pointer group '>
            <Link to='/releases' className='group-hover:text-white duration-150'>
              See all
            </Link>
            <AiOutlineArrowRight className='group-hover:text-emerald duration-150' />
          </div>
        </div>
        <TabNews1 state={false} />
      </div>
    </div>
  )
}

export default Home
