import React from 'react'
import { Link } from 'react-router-dom'
import FeatureIcon1 from '~/assets/Icons/FeatureIcon1'
import FeatureIcon2 from '~/assets/Icons/FeatureIcon2'
import FeatureIcon3 from '~/assets/Icons/FeatureIcon3'
import FeatureIcon4 from '~/assets/Icons/FeatureIcon4'
import FeatureIcon5 from '~/assets/Icons/FeatureIcon5'
import MinuteListenedIcon from '~/assets/Icons/MinutesListenedIcon'
import NewIcon1 from '~/assets/Icons/NewIcon1'
import PremiunPlanIcon from '~/assets/Icons/PremiumPlanIcon'
import Breadcrumb from '~/components/BreadCrumb'
import Features from '~/components/Features/Features'
import TabThree from '~/components/Profiles/TabThree'
import Tittle from '~/components/Titlle'

interface IContainer {
  Number: string
  Name: string
  Information: string
}

interface Ifeature {
  icon: JSX.Element
  name: string
  information: string
  colorBg: string
}

function About() {
  const container: IContainer[] = [
    {
      Number: '01',
      Name: 'Create an account',
      Information:
        'It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining'
    },
    {
      Number: '02',
      Name: 'Choose your plan',
      Information:
        'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first'
    },
    {
      Number: '03',
      Name: 'Enjoy your music',
      Information:
        'It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
    }
  ]

  const features: Ifeature[] = [
    {
      icon: <FeatureIcon1 className='fill-[#2f80ed]' />,
      name: 'Instant conclusion',
      information:
        'It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining',

      colorBg: 'rgba(47,128,237,0.15)'
    },
    {
      icon: <PremiunPlanIcon className='fill-[#eb5757]' />,
      name: 'Choose your plan',
      information:
        'If you are goin to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text',
      colorBg: 'rgba(235,87,87,0.15)'
    },
    {
      icon: <FeatureIcon2 className='fill-[#8051d4]' />,
      name: 'Create an account',
      information:
        'It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially',
      colorBg: 'rgba(128,81,212,0.15)'
    },
    {
      icon: <NewIcon1 className='fill-emerald' />,
      name: 'Enjoy blast music',
      information: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose',
      colorBg: 'rgba(37,165,106,0.15)'
    },
    {
      icon: <FeatureIcon3 className='fill-emerald' />,
      name: 'Choose your plan',
      information:
        'It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining',
      colorBg: 'rgba(37,165,106,0.15)'
    },
    {
      icon: <FeatureIcon4 className='fill-emerald' />,
      name: 'No contracts, no risk',
      information: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose',
      colorBg: 'rgba(37,165,106,0.15)'
    },
    {
      icon: <MinuteListenedIcon className='fill-emerald' />,
      name: 'Valid shares only',
      information: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose',
      colorBg: 'rgba(37,165,106,0.15)'
    },
    {
      icon: <FeatureIcon5 className='fill-emerald' />,
      name: 'Choose your plan',
      information:
        'If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text',
      colorBg: 'rgba(37,165,106,0.15)'
    }
  ]
  return (
    <div className='md:pt-[30px] pb-[70px] sm:pt-5 sm:pb-[50px] w-full px-[30px] mx-auto pt-[20px] relative '>
      <Breadcrumb name={'About'} />
      <Tittle nameTittle={'Online music HTML Template'} />
      <div className='flex gap-5 flex-col mt-5 text-[#c0c0c0]'>
        <p>
          Many desktop publishing packages and{' '}
          <Link className='underline text-emerald hover:no-underline' to={'#'}>
            web page
          </Link>{' '}
          editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web
          sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes
          on purpose (injected humour and the like).
        </p>
        <p>
          All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the
          first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of
          model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
      <div className='flex flex-row justify-center items-start flex-wrap gap-7 mt-14'>
        {container.map((key) => {
          return (
            <div className='border border-solid border-[#333333] basis-full max-w-full md:basis-1/3 md:max-w-[30%] relative p-4 rounded-xl'>
              <div className='flex flex-row gap-3 mb-5'>
                <span
                  className={`bg-[rgba(37,165,106,0.15)] text-emerald w-12 h-12 text-xl font-semibold rounded-md flex justify-center items-center`}
                >
                  {key.Number}
                </span>
                <span className='flex justify-center items-center text-lg font-base'>{key.Name}</span>
              </div>
              <div className=''>
                <span className='text-[#c0c0c0]'>{key.Information}</span>
              </div>
            </div>
          )
        })}
      </div>
      <div className='flex items-center justify-center mt-6'>
        <button className='bg-emerald h-12 w-40 rounded-lg hover:text-emerald'>SIGN UP</button>
      </div>
      <div className='mt-4 text-3xl'>
        <h1>Subscribe features</h1>
      </div>
      <div className='mt-5'>
        <span className='text-[#c0c0c0]'>
          Many desktop publishing packages and{' '}
          <Link className='underline text-emerald hover:no-underline' to='/#'>
            web page
          </Link>{' '}
          editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web
          sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes
          on purpose (injected humour and the like).
        </span>
      </div>
      <Features features={features} />
      <div className='mt-10'>
        <div className='w-full'>
          <h1 className='text-3xl mb-2 '>Select Your Plan</h1>
          <span className='text-[#c0c0c0]'>No hidden fees,equipment rentals,or installation appointments.</span>
        </div>
        <div className='w-full'>
          <TabThree />
        </div>
      </div>
    </div>
  )
}

export default About
