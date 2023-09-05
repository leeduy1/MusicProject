import { Link } from 'react-router-dom'
import React from 'react'
import { BsMailbox, BsFillTelephoneFill } from 'react-icons/bs'
import Logo from '../Logo'
import { footerLinks } from '~/store/footerLinks'
import { socialMedia } from '~/store/socialMedia'

function Footer() {
  return (
    <footer className='px-[30px] w-full pt-[60px] h-[375px]'>
      <div className='flex gap-[120px] mb-[60px] min-[1040px]:flex-nowrap flex-wrap'>
        <div className='flex flex-col gap-[15px]'>
          <Logo />
          <p className='text-[14px] text-grey-C0 font-open-sans leading-6'>
            Record Label & Internet Radio, <br />
            Online music HTML Template.
          </p>
          <ul className='flex flex-col gap-[15px]'>
            <li className='flex items-center gap-[12px]'>
              <BsMailbox size={18} className='text-emerald' />
              <Link className='text-[16px] text-grey-C0' to={'/'}>
                support@volna.template
              </Link>
            </li>
            <li className='flex items-center gap-[12px]'>
              <BsFillTelephoneFill size={18} className='text-emerald' />
              <Link className='text-[16px] text-grey-C0' to={'/'}>
                8 234 567-89-00
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex min-[1040px]:justify-around justify-between w-full flex-wrap'>
          {footerLinks.map((item) => (
            <div className='sm:basis-[25%] basis-[50%]'>
              <p className='text-[16px] font-[500] font-inter block mb-[20px]'>{item.title}</p>
              <ul className='flex flex-col gap-[10px]'>
                {item.links.length > 0 &&
                  item.links.map((link) => (
                    <li>
                      <Link
                        className='text-[15px] text-grey-C0 hover:text-emerald duration-150 font-open-sans'
                        to={link.url}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full h-[80px] border-t-[1px] border-white border-opacity-[0.1] flex items-center justify-between'>
        <span>© Volna, 2021. Created by LD - Team.</span>
        <ul className='flex gap-[15px]'>
          {socialMedia.length > 0 &&
            socialMedia.map((item, index) => (
              <li key={index}>
                <Link to={item.url}>{React.cloneElement(item.icon)}</Link>
              </li>
            ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
