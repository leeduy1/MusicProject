import React from 'react'
import NewItem from '../NewItem'
import ReleaseCardSlide from '../ReleaseCardSlide'

function EventPart() {
  const events = [
    {
      url: 'https://volna.volkovdesign.com/img/events/event1.jpg',
      date: 'March 14, 2021',
      time: '8:00 pm',
      name: 'Sorry Babushka',
      address: '1 East Plumb Branch St.Saint Petersburg, FL 33702',
      state: true
    },
    {
      url: 'https://volna.volkovdesign.com/img/events/event5.jpg',
      date: 'March 16, 2021',
      time: '7:00 pm',
      name: 'Big Daddy',
      address: '71 Pilgrim Avenue Chevy Chase, MD 20815',
      state: true
    }
  ]
  return (
    <div className='flex flex-wrap'>
      <div className='lg:basis-2/3 lg:max-w-[66.66667%] basis-full max-w-full'>
        <h1 className='cursor-pointer duration-500 ease-in-out hover:text-emerald md:text-3xl flex flex-row justify-start items-start font-inter font-normal text-[26px] mb-0 '>
          Upcoming events
        </h1>
        <div className='mt-5 absolute flex flex-wrap flex-row max-w-full pt-2 lg:max-w-[62%]'>
          {events.map((opinion) => {
            return (
              <div className='md:basis-1/2 md:max-w-[50%] basis-full max-w-full py-2.5 pr-5'>
                <ReleaseCardSlide
                  url={opinion.url}
                  date={opinion.date}
                  time={opinion.time}
                  name={opinion.name}
                  address={opinion.address}
                  state={opinion.state}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className='w-full lg:hidden h-[750px] block relative md:h-[410px]'></div>
      <div className='lg:basis-1/3 lg:max-w-[33.33333%] basis-full max-w-full'>
        <h1 className='cursor-pointer duration-500 ease-in-out hover:text-emerald md:text-3xl lg:pl-5 flex flex-row justify-start items-start font-inter font-normal text-[26px] mb-0 relative'>
          New Singles
        </h1>
        <NewItem />
      </div>
    </div>
  )
}

export default EventPart
