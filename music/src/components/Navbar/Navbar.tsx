import { FiSearch } from 'react-icons/fi'
import { FaBars } from 'react-icons/fa'
import { MdNotifications } from 'react-icons/md'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { HiOutlineLogin, HiOutlineLogout } from 'react-icons/hi'
import SuccessIcon from '~/assets/Icons/SuccessIcon'
import FailedIcon from '~/assets/Icons/FailedIcon'
import InformationIcon from '~/assets/Icons/InformationIcon'
import GiftIcon from '~/assets/Icons/GiftIcon'
import Notifications from '../Notifications'
import NotificationItem from '../NotificationItem'
import CartItem from '../CartItem'
import Logo from '../Logo'
import { Link } from 'react-router-dom'
import { useAuth } from '~/pages/AuthProvider'

function Navbar() {
  const { authInfo } = useAuth()
  const isLoggedIn = authInfo?.fullName

  const notificationData = [
    {
      icon: <SuccessIcon className='w-4 h-auto' fill='#25a56a' />,
      content: 'Payment #51 was successful!',
      time: '1 hour ago'
    },
    {
      icon: <FailedIcon className='w-4 h-auto' fill='red' />,
      content: 'Payment #50 failed!',
      time: '2 hour ago'
    },
    {
      icon: <InformationIcon className='w-4 h-auto' fill='#C0C0C0' />,
      content: 'Example of notification!',
      time: '2 hour ago'
    },
    {
      icon: <GiftIcon className='w-4 h-auto' fill='#8051d4' />,
      content: 'You have received a gift!',
      time: '4 hour ago'
    }
  ]

  const userProducts = [
    {
      url: 'http://volna.volkovdesign.com/img/store/item4.jpg',
      name: 'Headphones ZR-991',
      price: '199'
    },
    {
      url: 'http://volna.volkovdesign.com/img/store/item3.jpg',
      name: 'Music Blank',
      price: '399'
    },
    {
      url: 'http://volna.volkovdesign.com/img/store/item2.jpg',
      name: 'Microphone R4',
      price: '799'
    }
  ]
  return (
    <div className='h-[71px] w-full flex items-center px-[30px] justify-between border-b-[1px] border-[#222222]'>
      <Logo className='xl:hidden block' />
      <div className='xl:flex xl:items-center hidden gap-[60px]'>
        <ul className='flex gap-[30px]'>
          <li className='text-[16px] font-inter text-grey-C0 font-[400] hover:text-[#25a56a] ease-in-out duration-[0.5s]'>
            <Link to='/profile'>Profile</Link>
          </li>
          <li className='text-[16px] font-inter text-grey-C0 font-[400] hover:text-[#25a56a] ease-in-out duration-[0.5s]'>
            <Link to='/about'>About</Link>
          </li>
          <li className='text-[16px] font-inter text-grey-C0 font-[400] hover:text-[#25a56a] ease-in-out duration-[0.5s]'>
            <Link to='/contact'>Contacts</Link>
          </li>
        </ul>
        <div className='w-[320px] h-10 flex relative items-center'>
          <input
            className='w-full h-full focus:outline-none bg-[#222227] text-[16px] rounded-[12px] text-white border-none font-inter px-5 pr-[60px]'
            type='search'
            placeholder='Artist, track or podcast'
          />
          <FiSearch className='absolute right-5' size={24} />
        </div>
      </div>
      <div className='flex items-center sm:gap-[30px] gap-[15px]'>
        <div className='flex items-center sm:gap-[30px] gap-[15px] sm:pr-[30px] pr-0 sm:border-r-[1px] border-none border-white border-opacity-[0.1]'>
          <FiSearch className='xl:hidden block' size={24} />
          <div className='relative cursor-pointer group min-[420px]:block hidden'>
            <MdNotifications size={24} />
            <Notifications className='z-10 group-hover:scale-100' title='View all'>
              {notificationData.length > 0 &&
                notificationData.map((notification) => <NotificationItem {...notification} />)}
            </Notifications>
            <span className='bg-[#2f80ed] rounded-[4px] h-4 absolute -top-1 -right-[50%] text-[10px] px-[5px]'>
              {notificationData.length}
            </span>
          </div>
          <div className='relative cursor-pointer group min-[420px]:block hidden'>
            <AiOutlineShoppingCart size={24} />
            <Notifications className='z-10 group-hover:scale-100' title='Go to cart'>
              {userProducts.length > 0 && userProducts.map((product) => <CartItem {...product} />)}
            </Notifications>
            <span className='bg-emerald rounded-[4px] h-4 absolute -top-1 -right-[50%] text-[10px] px-[5px]'>
              {userProducts.length}
            </span>
          </div>
        </div>
        <div className='flex items-center cursor-pointer gap-[10px] group'>
          {isLoggedIn ? (
            <>
              <p className='group-hover:text-white text-grey-C0 duration-200 sm:block hidden'>
                Welcome, {authInfo?.fullName}!
              </p>
              <HiOutlineLogout className='text-grey-C0 group-hover:text-emerald duration-200' size={28} />
            </>
          ) : (
            <>
              <Link to='/SignIn' className='group-hover:text-white text-grey-C0 duration-200 sm:block hidden'>
                Sign in
              </Link>
              <HiOutlineLogin className='text-grey-C0 group-hover:text-emerald duration-200' size={28} />
            </>
          )}
          <FaBars className='xl:hidden block' size={28} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
