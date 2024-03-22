import React from 'react'
import { Link } from 'react-router-dom'
import FeatureIcon1 from '~/assets/Icons/FeatureIcon1'
import FeatureIcon6 from '~/assets/Icons/FeatureIcon6'
import FeatureIcon7 from '~/assets/Icons/FeatureIcon7'
import NewIcon1 from '~/assets/Icons/NewIcon1'
import Breadcrumb from '~/components/BreadCrumb'
import Features from '~/components/Features'
import TabThree from '~/components/Profiles/TabThree'
import Tittle from '~/components/Titlle'

interface Ifeature {
  icon: JSX.Element
  name: string
  information: string
  colorBg: string
}

function PricingPlan() {
  const features: Ifeature[] = [
    {
      icon: <FeatureIcon1 className='fill-emerald' />,
      name: 'Instant conclusion',
      information:
        'It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining',

      colorBg: 'rgba(37,165,106,0.15)'
    },
    {
      icon: <FeatureIcon6 className='fill-emerald' />,
      name: 'Instant conclusion',
      information:
        'It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining',

      colorBg: 'rgba(37,165,106,0.15)'
    },
    {
      icon: <FeatureIcon7 className='fill-emerald' />,
      name: 'Instant conclusion',
      information:
        'It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining',

      colorBg: 'rgba(37,165,106,0.15)'
    },
    {
      icon: <NewIcon1 className='fill-emerald' />,
      name: 'Enjoy Blast music',
      information: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose',

      colorBg: 'rgba(37,165,106,0.15)'
    }
  ]
  return (
    <div className='md:pt-[30px] pb-[70px] sm:pt-5 sm:pb-[50px] w-full px-[30px] mx-auto pt-[20px] relative '>
      <Breadcrumb name={'Pricing plans'} />
      <Tittle nameTittle={'Pricing plans'} />
      <div className='mt-5 text-[#c0c0c0]'>
        <span>
          Many desktop publishing packages and{' '}
          <Link className='underline text-emerald hover:no-underline' to='#'>
            web page
          </Link>{' '}
          editors now use Lorem Ipsum as their default model text,and search for 'lorem ipsum' will uncover many web
          sites still in their infancy. Various versions have evolved over the years,sometimes by accident, sometimes on
          purpose (injected humour and the like).
        </span>
      </div>
      <Features features={features} />
      <div className='mt-9'>
        <h1 className='text-3xl'>Select Your Plan</h1>
        <div className='w-full'>
          <TabThree />
        </div>
      </div>
    </div>
  )
}

export default PricingPlan
