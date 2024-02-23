import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '~/components/BreadCrumb'
import Tittle from '~/components/Titlle'

interface IContainer {
  Number: string
  Name: string
  Information: string
}

interface Ifeature {
  icon: string
  name: string
  information: string
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
    {}
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
                <span className='bg-[rgba(37,165,106,0.15)] text-emerald w-12 h-12 text-xl font-semibold rounded-md flex justify-center items-center'>
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
        <button className='bg-emerald h-12 w-40 rounded-lg hover:text-e+ ++++++++++++++++++++++++++++++++++++++++++++++++++'>SIGN UP</button>
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
      <div className='mt-5 flex flex-wrap flex-row'>
        <div className='flex basis-1/4'>hello</div>
        <div className='flex basis-1/4'>hello</div>
        <div className='flex basis-1/4'>hello</div>
        <div className='flex basis-1/4'>hello</div>
        <div className='flex basis-1/4'>hello</div>
        <div className='flex basis-1/4'>hello</div>
        <div className='flex basis-1/4'>hello</div>
        <div className='flex basis-1/4'>hello</div>
      </div>
    </div>
  )
}

export default About
