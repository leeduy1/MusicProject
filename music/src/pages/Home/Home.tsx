import Slider from 'react-slick'
import NewRelease from '~/components/NewRelease'
import { SlideArrowNext, SlideArrowPrev } from '~/components/SlideArrow'

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
        <NewRelease />
      </div>
    </div>
  )
}

export default Home
