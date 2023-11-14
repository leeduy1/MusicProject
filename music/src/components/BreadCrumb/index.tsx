import React from 'react'
import { Link } from 'react-router-dom'
import BreadcrumbIcon from '~/assets/Icons/BreadcrumbIcon'

interface IBreadCrumb {
  name: string
}
function Breadcrumb({ name }: IBreadCrumb) {
  return (
    <div className='md: flex flex-wrap basic-full grow-0 shrink-0'>
      <div className='max-w-full relative'>
        <ul className='flex flex-row justify-start items-center flex-wrap max-w-full list-none'>
          <li className="before:content-[''] flex left-full h-[34px] items-center justify-center text-sm cursor-default">
            <Link
              className='duration-[0.3s] ease-out cursor-pointer opacity-75 hover:text-emerald hover:ease-in '
              to='/'
            >
              Home
            </Link>
            <BreadcrumbIcon className='w-[20px] opacity-75' /> <p className='opacity-75'>{name}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Breadcrumb
