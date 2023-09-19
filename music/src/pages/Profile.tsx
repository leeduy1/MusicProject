import React from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '~/assets/Icons/AddIcon'
import BalanceIcon from '~/assets/Icons/BalanceIcon'
import BreadcrumbIcon from '~/assets/Icons/BreadcrumbIcon'
import CoverIcon from '~/assets/Icons/CoverIcon'
import CoverIcon1 from '~/assets/Icons/CoverIcon1'
import CoverIcon2 from '~/assets/Icons/CoverIcon2'
import DashFreshIcon from '~/assets/Icons/DashFreshIcon'
import ExportIcon from '~/assets/Icons/ExportIcon'
import MinuteListenedIcon from '~/assets/Icons/MinutesListenedIcon'
import NewIcon1 from '~/assets/Icons/NewIcon1'
import NoficationDashboxIcon1 from '~/assets/Icons/NoficationDashboxIcon1'
import NoficationDashboxIcon2 from '~/assets/Icons/NoficationDashboxIcon2'
import NoficationDashboxIcon3 from '~/assets/Icons/NoficationDashboxIcon3'
import NoficationDashboxIcon4 from '~/assets/Icons/NoficationDashboxIcon4'
import NoficationProfile from '~/assets/Icons/NoficationProfile'
import PremiunPlanIcon from '~/assets/Icons/PremiunPlanIcon'
import ProfileAvatar from '~/assets/Icons/ProfileAvatar'
import SignoutIcon from '~/assets/Icons/SignoutIcon'

function Profile() {
  return (
    <div className='md:pt-[30px] md:pb-[70px] sm:pt-5 sm:pb-[50px] w-full px-[30px] mx-auto pt-[20px] relative'>
      <div className='w-full'>
        {/* BreadCrumb */}
        <div className='md: flex flex-wrap basic-full grow-0 shrink-0'>
          <div className='max-w-full relative'>
            <ul className='flex flex-row justify-start items-center flex-wrap max-w-full list-none'>
              <li className="before:content-[''] flex left-full h-[34px] items-center justify-center text-sm cursor-default">
                <Link
                  className='duration-[0.5s] ease-out cursor-pointer opacity-75 hover:text-green-700 hover:ease-in '
                  to='/'
                >
                  Home
                </Link>{' '}
                <BreadcrumbIcon className='w-[20px] opacity-75' /> <p className='opacity-75'>Profile</p>
              </li>
            </ul>
          </div>
        </div>
        {/* EndBreadCrumb */}
        {/* Tiltle */}
        <div className='flex flex-wrap mx-[-15] mt-[50px] basic-full grow-0'>
          <div className='mb-0 flex flex-row justify-between items-end flex-wrap '>
            <h1 className='md:text-[36px] flex flex-row justify-start items-start font-sans font-normal text-[30px] cursor-default'>
              Profile
            </h1>
          </div>
        </div>
        {/* EndTittle */}
      </div>
      <div className='w-full '>
        <div className='md:mt-[30px] md:px-[20px] md:flex-row md:content-between md:items-center flex flex-col relative bg-[#16151a] items-start justify-start px-[20px] pt-[20px] rounded-lg border-solid border-[#222227] border-[1px] mt-[20px]'>
          <div className='md:mb-0 md:mr-[60px] flex flex-row justify-start items-center mb-[20px]'>
            <div className='block relative w-[40px] cursor-pointer overflow-hidden rounded-[8px] mr-[15px]'>
              <ProfileAvatar className='w-full' />
            </div>
            <div className='flex flex-col justify-start items-start'>
              <h3 className='block text-[16px] font-normal mb-[7px] leading-none'>Phan Quí Xuân</h3>
              <span className='text-[#c0c0c0] text-[12px] leading-none'>Volna ID: 0802</span>
            </div>
          </div>
          {/* Tabs Nav */}
          <ul
            className='md:w-auto md:mr-auto flex flex-row justify-start items-center overflow-hidden w-full list-none'
            id='profile__tabs'
            role='tablist'
          >
            <li className='md:mr-[30px] mr-5 opacity-75 hover:opacity-100 cursor-pointer'>
              <Link
                className='md:items-center md:h-[70px] md:text-[16px] flex flex-row justify-start items-start h-[40px] relative text-[14px] duration-[0.5s] ease-in-out hover:opacity-100 opacity-75'
                to=''
              >
                Profile
              </Link>
            </li>
            <li className='md:mr-[30px] mr-5 opacity-75 hover:opacity-100 cursor-pointer '>
              <Link
                className='md:items-center md:h-[70px] md:text-[16px] flex flex-row justify-start items-start h-[40px] relative text-[14px] duration-[0.5s] ease-in-out hover:opacity-100 opacity-75'
                to=''
              >
                Order
              </Link>
            </li>
            <li className='md:mr-[30px] mr-5 opacity-75 hover:opacity-100 cursor-pointer'>
              <Link
                className='md:items-center md:h-[70px] md:text-[16px] flex flex-row justify-start items-start h-[40px] relative text-[14px] duration-[0.5s] ease-in-out hover:opacity-100 opacity-75'
                to=''
              >
                Princing Plan
              </Link>
            </li>
            <li className='md:mr-[30px] mr-5 opacity-75 hover:opacity-100 cursor-pointer'>
              <Link
                className='md:items-center md:h-[70px] md:text-[16px] flex flex-row justify-start items-start h-[40px] relative text-[14px] duration-[0.5s] ease-in-out hover:opacity-100 opacity-75'
                to=''
              >
                Settings
              </Link>
            </li>
          </ul>
          {/* EndTabs Nav */}
          <button className='md:relative group md:top-auto md:right-auto flex flex-row justify-start items-center w-auto absolute top-5 right-5'>
            <span className='opacity-75 duration-[0.5s] ease-in-out mr-[10px] md:block hidden group-hover:opacity-100 cursor-pointer'>
              Sign out
            </span>
            <SignoutIcon className='duration-[0.5] ease-in-out opacity-75 group-hover:text-green-700' />
          </button>
        </div>
        {/* content tabs */}
        <div className='w-full'>
          <div className='duration-[0.4s] ease-linear delay-0 transition-opacity' id='tab-1'>
            <div className='grow shrink-0 basis-full flex flex-wrap md:mx-[-15px] mx-[-10px] '>
              <div className='md:px-[15px] vl:basis-full vl:max-w-full lg:basis-1/2 lg:max-w-[50%] px-2.5 basis-3/12 max-w-[25%]'>
                <div className='md:mt-[30px] mt-5 flex flex-col items-start justify-center relative p-5 rounded-2xl w-full border border-solid border-[#222227]'>
                  <span className='text-[20px] leading-[100%] font-normal mb-0 w-full flex flex-row justify-start items-end'>
                    My Balance{' '}
                    <Link
                      className='inline-flex flex-row justify-start items-center text-[13px] ml-2.5 leading-[100%] border-b-2 border-dashed border-[#25a56a] duration-[0.5s] ease-in-out hover:text-[#25a56a]'
                      to=''
                    >
                      top up
                    </Link>
                  </span>
                  <p className='text-[14px] text-[#c0c0c0] mb-0 mt-5 font-normal leading-[100%]'>
                    <b className='text-[20px] font-medium'>$90.99</b>
                  </p>
                  <BalanceIcon className='absolute bottom-[15px] right-[15px] w-[30px] h-auto' />
                </div>
              </div>
              <div className='md:px-[15px] vl:basis-full vl:max-w-full lg:basis-1/2 lg:max-w-[50%] px-2.5 basis-3/12 max-w-[25%]'>
                <div className='md:mt-[30px] mt-5 flex flex-col items-start justify-center relative p-5 rounded-2xl w-full border border-solid border-[#222227]'>
                  <span className='text-[20px] leading-[100%] font-normal mb-0 w-full flex flex-row justify-start items-end'>
                    Premium Plan
                  </span>
                  <p className='text-[14px] text-[#c0c0c0] mb-0 mt-5 font-normal leading-[100%]'>
                    <b className='text-[20px] font-medium'>$39.99</b>/month
                  </p>
                  <PremiunPlanIcon className='absolute bottom-[15px] right-[15px] w-[30px] h-auto' />
                </div>
              </div>
              <div className='md:px-[15px] vl:basis-full vl:max-w-full lg:basis-1/2 lg:max-w-[50%] px-2.5 basis-3/12 max-w-[25%]'>
                <div className='md:mt-[30px] mt-5 flex flex-col items-start justify-center relative p-5 rounded-2xl w-full border border-solid border-[#222227]'>
                  <span className='text-[20px] leading-[100%] font-normal mb-0 w-full flex flex-row justify-start items-end'>
                    Minutes listened
                  </span>
                  <p className='text-[14px] text-[#c0c0c0] mb-0 mt-5 font-normal leading-[100%]'>
                    <b className='text-[20px] font-medium'>407 021</b>
                  </p>
                  <MinuteListenedIcon className='absolute bottom-[15px] right-[15px] w-[30px] h-auto' />
                </div>
              </div>
              <div className='md:px-[15px] vl:basis-full vl:max-w-full lg:basis-1/2 lg:max-w-[50%] px-2.5 basis-3/12 max-w-[25%]'>
                <div className='md:mt-[30px] mt-5 flex flex-col items-start justify-center relative p-5 rounded-2xl w-full border border-solid border-[#222227]'>
                  <span className='text-[20px] leading-[100%] font-normal mb-0 w-full flex flex-row justify-start items-end'>
                    Promo Code
                  </span>
                  <form action='#' className='flex flex-row justify-between items-center relative w-full mt-2.5'>
                    <input
                      className='relative z-2 h-6 w-full bg-transparent text-[#fff] text-[18px] pr-[50px]'
                      type='text'
                      placeholder='__-__-__-__'
                      inputMode='text'
                    />
                    <button className='hover:text-[#fff] ease-in-out absolute z-3 right-0 top-0 flex flex-row justify-center items-end h-6 text-[#25a56a] duration-[0.5s] text-[14px] uppercase font-medium'>
                      SEND
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className='grow shrink-0 basis-full flex flex-wrap md:mx-[-15px] mx-[-10px] '>
              {/* dashbox */}
              <div className='md:px-[15px] px-2.5 vl:basis-full vl:max-w-full basis-1/2 max-w-[50%] relative w-full'>
                <div className='md:mt-[30px] mt-5 rounded-xl overflow-hidden border border-[#222227] border-solid'>
                  <div className='flex flex-row justify-between items-center p-5 border border-[#222227] border-solid'>
                    <h3 className='flex flex-row justify-start items-center font-normal text-xl leading-[100%] mb-0 mt-0 '>
                      <NoficationProfile className='mr-2.5 w-[22px] h-auto overflow-hidden align-middle' />{' '}
                      Notifications
                      <span className='flex flex-row justify-center items-center h-[18px] min-w-[18px] px-[5px] py-0 rounded-md text-[10px] pointer-events-none bg-[#25a56a] mb-auto ml-[5px]'>
                        20
                      </span>
                    </h3>
                    <div className='flex flex-row justify-start items-center'>
                      <Link
                        to='#'
                        className='flex flex-row justify-center items-center w-[22px] h-[30px] duration-[0.5s] ease-in-out no-underline bg-transparent'
                      >
                        <DashFreshIcon className='w-[18px] h-auto duration-[0.5s] ease-in-out fill-[#c0c0c0] hover:fill-[#25a56a]' />
                      </Link>
                    </div>
                  </div>
                  <div className='p-5 relative block w-full'>
                    <div className='overflow-y-scroll scrollbar max-h-80 w-full pr-3.5'>
                      <div className='transform translate-y-0'>
                        <div className='flex flex-row justify-start items-center flex-wrap w-full pb-2.5 mb-2.5 border-b border-solid border-[#222227] h-[58px]'>
                          <NoficationDashboxIcon1 className='w-5 h-auto mr-2.5 ' />
                          <p className='text-[#c0c0c0] text-[16px] leading-5 truncate break-words w-[calc(100%-30px)] block mb-0 font-normal'>
                            <Link className='text-[#fff] underline hover:no-underline' to=''>
                              Payment #51
                            </Link>{' '}
                            was successful!
                          </p>
                          <span className='p-0 text-[13px] text-[#c0c0c0] relative bg-transparent top-auto left-auto block w-full mt-[5px]'>
                            1 hour ago
                          </span>
                        </div>
                        <div className='flex flex-row justify-start items-center flex-wrap w-full pb-2.5 mb-2.5 border-b border-solid border-[#222227] h-[58px]'>
                          <NoficationDashboxIcon2 className='w-5 h-auto mr-2.5 ' />
                          <p className='text-[#c0c0c0] text-[16px] leading-5 truncate break-words w-[calc(100%-30px)] block mb-0 font-normal'>
                            <Link className='text-[#fff] underline hover:no-underline' to=''>
                              Payment #50
                            </Link>{' '}
                            failed!
                          </p>
                          <span className='p-0 text-[13px] text-[#c0c0c0] relative bg-transparent top-auto left-auto block w-full mt-[5px]'>
                            2 hour ago
                          </span>
                        </div>
                        <div className='flex flex-row justify-start items-center flex-wrap w-full pb-2.5 mb-2.5 border-b border-solid border-[#222227] h-[58px]'>
                          <NoficationDashboxIcon3 className='w-5 h-auto mr-2.5 ' />
                          <p className='text-[#c0c0c0] text-[16px] leading-5 truncate break-words w-[calc(100%-30px)] block mb-0 font-normal'>
                            <Link className='text-[#fff] underline hover:no-underline' to=''>
                              Example
                            </Link>{' '}
                            of nofication.
                          </p>
                          <span className='p-0 text-[13px] text-[#c0c0c0] relative bg-transparent top-auto left-auto block w-full mt-[5px]'>
                            2 hour ago
                          </span>
                        </div>
                        <div className='flex flex-row justify-start items-center flex-wrap w-full pb-2.5 mb-2.5 border-b border-solid border-[#222227] h-[58px]'>
                          <NoficationDashboxIcon4 className='w-5 h-auto mr-2.5 ' />
                          <p className='text-[#c0c0c0] text-[16px] leading-5 truncate break-words w-[calc(100%-30px)] block mb-0 font-normal'>
                            <Link className='text-[#fff] underline hover:no-underline' to=''>
                              You have received a gift!
                            </Link>
                          </p>
                          <span className='p-0 text-[13px] text-[#c0c0c0] relative bg-transparent top-auto left-auto block w-full mt-[5px]'>
                            4 hour ago
                          </span>
                        </div>
                        <div className='flex flex-row justify-start items-center flex-wrap w-full pb-2.5 mb-2.5 border-b border-solid border-[#222227] h-[58px]'>
                          <NoficationDashboxIcon4 className='w-5 h-auto mr-2.5 ' />
                          <p className='text-[#c0c0c0] text-[16px] leading-5 truncate break-words w-[calc(100%-30px)] block mb-0 font-normal'>
                            <Link className='text-[#fff] underline hover:no-underline' to=''>
                              You have received a gift!
                            </Link>
                          </p>
                          <span className='p-0 text-[13px] text-[#c0c0c0] relative bg-transparent top-auto left-auto block w-full mt-[5px]'>
                            5 hour ago
                          </span>
                        </div>
                        <div className='flex flex-row justify-start items-center flex-wrap w-full pb-2.5 mb-2.5 border-b border-solid border-[#222227] h-[58px]'>
                          <NoficationDashboxIcon1 className='w-5 h-auto mr-2.5 ' />
                          <p className='text-[#c0c0c0] text-[16px] leading-5 truncate break-words w-[calc(100%-30px)] block mb-0 font-normal'>
                            <Link className='text-[#fff] underline hover:no-underline' to=''>
                              Payment #51
                            </Link>{' '}
                            was successful!
                          </p>
                          <span className='p-0 text-[13px] text-[#c0c0c0] relative bg-transparent top-auto left-auto block w-full mt-[5px]'>
                            1 hour ago
                          </span>
                        </div>
                        <div className='flex flex-row justify-start items-center flex-wrap w-full pb-2.5 mb-2.5 border-b border-solid border-[#222227] h-[58px]'>
                          <NoficationDashboxIcon2 className='w-5 h-auto mr-2.5 ' />
                          <p className='text-[#c0c0c0] text-[16px] leading-5 truncate break-words w-[calc(100%-30px)] block mb-0 font-normal'>
                            <Link className='text-[#fff] underline hover:no-underline' to=''>
                              Payment #50
                            </Link>{' '}
                            failed!
                          </p>
                          <span className='p-0 text-[13px] text-[#c0c0c0] relative bg-transparent top-auto left-auto block w-full mt-[5px]'>
                            2 hour ago
                          </span>
                        </div>
                        <div className='flex flex-row justify-start items-center flex-wrap w-full pb-2.5 mb-2.5 border-b border-solid border-[#222227] h-[58px]'>
                          <NoficationDashboxIcon3 className='w-5 h-auto mr-2.5 ' />
                          <p className='text-[#c0c0c0] text-[16px] leading-5 truncate break-words w-[calc(100%-30px)] block mb-0 font-normal'>
                            <Link className='text-[#fff] underline hover:no-underline' to=''>
                              Example
                            </Link>{' '}
                            of nofication.
                          </p>
                          <span className='p-0 text-[13px] text-[#c0c0c0] relative bg-transparent top-auto left-auto block w-full mt-[5px]'>
                            2 hour ago
                          </span>
                        </div>
                        <div className='flex flex-row justify-start items-center flex-wrap w-full pb-2.5 mb-2.5 border-b border-solid border-[#222227] h-[58px]'>
                          <NoficationDashboxIcon4 className='w-5 h-auto mr-2.5 ' />
                          <p className='text-[#c0c0c0] text-[16px] leading-5 truncate break-words w-[calc(100%-30px)] block mb-0 font-normal'>
                            <Link className='text-[#fff] underline hover:no-underline' to=''>
                              You have received a gift!
                            </Link>
                          </p>
                          <span className='p-0 text-[13px] text-[#c0c0c0] relative bg-transparent top-auto left-auto block w-full mt-[5px]'>
                            4 hour ago
                          </span>
                        </div>
                        <div className='flex flex-row justify-start items-center flex-wrap w-full pb-2.5 mb-2.5 border-b border-solid border-[#222227] h-[58px]'>
                          <NoficationDashboxIcon4 className='w-5 h-auto mr-2.5 ' />
                          <p className='text-[#c0c0c0] text-[16px] leading-5 truncate break-words w-[calc(100%-30px)] block mb-0 font-normal'>
                            <Link className='text-[#fff] underline hover:no-underline' to=''>
                              You have received a gift!
                            </Link>
                          </p>
                          <span className='p-0 text-[13px] text-[#c0c0c0] relative bg-transparent top-auto left-auto block w-full mt-[5px]'>
                            5 hour ago
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end dashbox */}
              {/* dashbox */}
              <div className='md:px-[15px] px-2.5 vl:basis-full vl:max-w-full basis-1/2 max-w-[50%] relative w-full'>
                <div className='md:mt-[30px] mt-5 rounded-xl overflow-hidden border border-[#222227] border-solid'>
                  <div className='flex flex-row justify-between items-center p-5 border border-[#222227] border-solid'>
                    <h3 className='flex flex-row justify-start items-center font-normal text-xl leading-[100%] mb-0 mt-0 '>
                      <NewIcon1 className='mr-2.5 w-[22px] h-auto overflow-hidden align-middle' /> New item for you
                    </h3>
                    <div className='flex flex-row justify-start items-center'>
                      <Link className='flex flex-row justify-center items-center w-[22px] h-[30px]' to='#'>
                        <DashFreshIcon className='w-[18px] h-auto duration-[0.5s] ease-in-out fill-[#c0c0c0] hover:fill-[#25a56a]' />
                      </Link>
                      <Link
                        className='flex flex-row justify-center items-center text-[13px] ml-[15px] text-[#c0c0c0]  duration-[0.5s] ease-in-out hover:text-[#25a56a] delay-0'
                        to=''
                      >
                        View All
                      </Link>
                    </div>
                  </div>
                  <div className='p-5 relative block w-full'>
                    <ul className='md:mt-0'>
                      <li className='flex flex-row justify-start items-center mb-2.5 pb-0.5 border-b border-solid border-[#222227] h-[58px]'>
                        <Link
                          className='flex flex-row justify-center items-center rounded-lg overflow-hidden duration-[0.5s] ease-in-out'
                          to=''
                        >
                          <CoverIcon className='w-[48px] h-auto opacity-100 duration-[0.5s] ease-in-out relative align-middle border-none'/>
                          <CoverIcon1 className='absolute opacity-0 fill-[#fff] w-[24px] mt-px mr-0 mb-0 ml-px duration-[0.5s] ease-in-out overflow-hidden align-middle'/>
                          <CoverIcon2 className='absolute opacity-0 fill-[#fff] w-[24px] mt-px mr-0 mb-0 ml-px duration-[0.5s] ease-in-out overflow-hidden align-middle'/>
                        </Link>
                        <div className='inline-flex flex-col justify-start items-start ml-[15px] mr-auto xn:max-w-[200px] sx:max-w-[150px] jv:max-w-[110px]'>
                          <h3 className='block w-full text-base font-normal mb-0 whitespace-nowrap overflow-hidden text-ellipsis break-words'><Link to="">Em của ngày hôm qua</Link></h3>
                          <span className='block w-full text-[14px] leading-6 font-normal text-[#c0c0c0] whitespace-nowrap overflow-hidden text-ellipsis break-words'><Link to="">Sơn Tùng MTP</Link></span>
                        </div>
                        <Link to='' className='flex ml-[15px] flex-row justify-center items-center w-[32px] h-[32px] rounded-lg bg-[#25a56a] bg-opacity-[0.15]'>
                          <AddIcon className='w-[18px] h-auto'/>
                        </Link>
                        <Link to='' className='flex ml-[15px] flex-row justify-center items-center w-[32px] h-[32px] rounded-lg bg-[rgba(128,81,212,0.15)] bg-opacity-[0.15]'>
                        <ExportIcon className='w-[18px] h-auto'/>
                        </Link>
                        <span className='ml-[15px] text-[13px] text-[#c0c0c0] '>3:12</span>
                      </li>
                      <li className='flex flex-row justify-start items-center mb-2.5 pb-0.5 border-b border-solid border-[#222227] h-[58px]'><Link
                          className='flex flex-row justify-center items-center rounded-lg overflow-hidden duration-[0.5s] ease-in-out'
                          to=''
                        >
                          <CoverIcon className='w-[48px] h-auto opacity-100 duration-[0.5s] ease-in-out relative align-middle border-none'/>
                          <CoverIcon1 className='absolute opacity-0 fill-[#fff] w-[24px] mt-px mr-0 mb-0 ml-px duration-[0.5s] ease-in-out overflow-hidden align-middle'/>
                          <CoverIcon2 className='absolute opacity-0 fill-[#fff] w-[24px] mt-px mr-0 mb-0 ml-px duration-[0.5s] ease-in-out overflow-hidden align-middle'/>
                        </Link>
                        <div className='inline-flex flex-col justify-start items-start ml-[15px] mr-auto xn:max-w-[200px] sx:max-w-[150px] jv:max-w-[110px]'>
                          <h3 className='block w-full text-base font-normal mb-0 whitespace-nowrap overflow-hidden text-ellipsis break-words'><Link to="">Không phải dạng vừa đâu</Link></h3>
                          <span className='block w-full text-[14px] leading-6 font-normal text-[#c0c0c0] whitespace-nowrap overflow-hidden text-ellipsis break-words'><Link to="">Sơn Tùng MTP</Link></span>
                        </div>
                        <Link to='' className='flex ml-[15px] flex-row justify-center items-center w-[32px] h-[32px] rounded-lg bg-[#25a56a] bg-opacity-[0.15]'>
                          <AddIcon className='w-[18px] h-auto'/>
                        </Link>
                        <Link to='' className='flex ml-[15px] flex-row justify-center items-center w-[32px] h-[32px] rounded-lg bg-[rgba(128,81,212,0.15)] bg-opacity-[0.15]'>
                        <ExportIcon className='w-[18px] h-auto'/>
                        </Link>
                        <span className='ml-[15px] text-[13px] text-[#c0c0c0] '>3:12</span></li>
                      <li className='flex flex-row justify-start items-center mb-2.5 pb-0.5 border-b border-solid border-[#222227] h-[58px]'><Link
                          className='flex flex-row justify-center items-center rounded-lg overflow-hidden duration-[0.5s] ease-in-out'
                          to=''
                        >
                          <CoverIcon className='w-[48px] h-auto opacity-100 duration-[0.5s] ease-in-out relative align-middle border-none'/>
                          <CoverIcon1 className='absolute opacity-0 fill-[#fff] w-[24px] mt-px mr-0 mb-0 ml-px duration-[0.5s] ease-in-out overflow-hidden align-middle'/>
                          <CoverIcon2 className='absolute opacity-0 fill-[#fff] w-[24px] mt-px mr-0 mb-0 ml-px duration-[0.5s] ease-in-out overflow-hidden align-middle'/>
                        </Link>
                        <div className='inline-flex flex-col justify-start items-start ml-[15px] mr-auto xn:max-w-[200px] sx:max-w-[150px] jv:max-w-[110px]'>
                          <h3 className='block w-full text-base font-normal mb-0 whitespace-nowrap overflow-hidden text-ellipsis break-words'><Link to="">Making my way</Link></h3>
                          <span className='block w-full text-[14px] leading-6 font-normal text-[#c0c0c0] whitespace-nowrap overflow-hidden text-ellipsis break-words'><Link to="">Sơn Tùng MTP</Link></span>
                        </div>
                        <Link to='' className='flex ml-[15px] flex-row justify-center items-center w-[32px] h-[32px] rounded-lg bg-[#25a56a] bg-opacity-[0.15]'>
                          <AddIcon className='w-[18px] h-auto'/>
                        </Link>
                        <Link to='' className='flex ml-[15px] flex-row justify-center items-center w-[32px] h-[32px] rounded-lg bg-[rgba(128,81,212,0.15)] bg-opacity-[0.15]'>
                        <ExportIcon className='w-[18px] h-auto'/>
                        </Link>
                        <span className='ml-[15px] text-[13px] text-[#c0c0c0] '>3:12</span></li>
                      <li className='flex flex-row justify-start items-center mb-2.5 pb-0.5 border-b border-solid border-[#222227] h-[58px]'><Link
                          className='flex flex-row justify-center items-center rounded-lg overflow-hidden duration-[0.5s] ease-in-out'
                          to=''
                        >
                          <CoverIcon className='w-[48px] h-auto opacity-100 duration-[0.5s] ease-in-out relative align-middle border-none'/>
                          <CoverIcon1 className='absolute opacity-0 fill-[#fff] w-[24px] mt-px mr-0 mb-0 ml-px duration-[0.5s] ease-in-out overflow-hidden align-middle'/>
                          <CoverIcon2 className='absolute opacity-0 fill-[#fff] w-[24px] mt-px mr-0 mb-0 ml-px duration-[0.5s] ease-in-out overflow-hidden align-middle'/>
                        </Link>
                        <div className='inline-flex flex-col justify-start items-start ml-[15px] mr-auto xn:max-w-[200px] sx:max-w-[150px] jv:max-w-[110px]'>
                          <h3 className='block w-full text-base font-normal mb-0 whitespace-nowrap overflow-hidden text-ellipsis break-words'><Link to="">Hồng Nhan</Link></h3>
                          <span className='block w-full text-[14px] leading-6 font-normal text-[#c0c0c0] whitespace-nowrap overflow-hidden text-ellipsis break-words'><Link to="">Jack-J97</Link></span>
                        </div>
                        <Link to='' className='flex ml-[15px] flex-row justify-center items-center w-[32px] h-[32px] rounded-lg bg-[#25a56a] bg-opacity-[0.15]'>
                          <AddIcon className='w-[18px] h-auto'/>
                        </Link>
                        <Link to='' className='flex ml-[15px] flex-row justify-center items-center w-[32px] h-[32px] rounded-lg bg-[rgba(128,81,212,0.15)] bg-opacity-[0.15]'>
                        <ExportIcon className='w-[18px] h-auto'/>
                        </Link>
                        <span className='ml-[15px] text-[13px] text-[#c0c0c0] '>3:12</span></li>
                      <li className='flex flex-row justify-start items-center mb-0 pb-0 border-none h-[48px]'>
                      <Link
                          className='flex flex-row justify-center items-center rounded-lg overflow-hidden duration-[0.5s] ease-in-out'
                          to=''
                        >
                          <CoverIcon className='w-[48px] h-auto opacity-100 duration-[0.5s] ease-in-out relative align-middle border-none'/>
                          <CoverIcon1 className='absolute opacity-0 fill-[#fff] w-[24px] mt-px mr-0 mb-0 ml-px duration-[0.5s] ease-in-out overflow-hidden align-middle'/>
                          <CoverIcon2 className='absolute opacity-0 fill-[#fff] w-[24px] mt-px mr-0 mb-0 ml-px duration-[0.5s] ease-in-out overflow-hidden align-middle'/>
                        </Link>
                        <div className='inline-flex flex-col justify-start items-start ml-[15px] mr-auto xn:max-w-[200px] sx:max-w-[150px] jv:max-w-[110px]'>
                          <h3 className='block w-full text-base font-normal mb-0 whitespace-nowrap overflow-hidden text-ellipsis break-words'><Link to="">Yêu</Link></h3>
                          <span className='block w-full text-[14px] leading-6 font-normal text-[#c0c0c0] whitespace-nowrap overflow-hidden text-ellipsis break-words'><Link to="">Khắc Việt</Link></span>
                        </div>
                        <Link to='' className='flex ml-[15px] flex-row justify-center items-center w-[32px] h-[32px] rounded-lg bg-[#25a56a] bg-opacity-[0.15]'>
                          <AddIcon className='w-[18px] h-auto'/>
                        </Link>
                        <Link to='' className='flex ml-[15px] flex-row justify-center items-center w-[32px] h-[32px] rounded-lg bg-[rgba(128,81,212,0.15)] bg-opacity-[0.15]'>
                        <ExportIcon className='w-[18px] h-auto'/>
                        </Link>
                        <span className='ml-[15px] text-[13px] text-[#c0c0c0] '>3:12</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* end dashbox */}
            </div>
          </div>
          <div className='duration-[0.4s] ease-linear delay-0 transition-opacity' id='tab-2'></div>
          <div className='duration-[0.4s] ease-linear delay-0 transition-opacity' id='tab-3'></div>
          <div className='duration-[0.4s] ease-linear delay-0 transition-opacity' id='tab-4'></div>
        </div>
      </div>
    </div>
  )
}

export default Profile
