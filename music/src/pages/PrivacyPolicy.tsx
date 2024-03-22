import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '~/components/BreadCrumb'
import Tittle from '~/components/Titlle'

function PrivacyPolicy() {
  return (
    <div className='md:pt-[30px] pb-[70px] sm:pt-5 sm:pb-[50px] w-full px-[30px] mx-auto pt-[20px] relative '>
      <Breadcrumb name={'Privacy policy'} />
      <Tittle nameTittle={'Privacy policy'} />
      <div className='flex gap-3 flex-col text-[#c0c0c0] text-base'>
        <span>
          It's a long establish fact that a render will be distracted by th readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,as
          opposed to using 'Content here,content here' making it look like readable English
        </span>
        <span>
          Many desktop publishing packages and{' '}
          <Link className='text-emerald hover:text-[#c0c0c0] hover:no-underline underline' to='#'>
            web page
          </Link>
          editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web
          sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes
          on purpose (injected humour and the like).
        </span>
        <span>
          All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the
          first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of
          model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humour, or non-characteristic words etc.
        </span>
      </div>

    </div>
  )
}

export default PrivacyPolicy
