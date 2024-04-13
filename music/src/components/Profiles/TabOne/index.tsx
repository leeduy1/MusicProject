
import { Link } from 'react-router-dom'
import BalanceIcon from '~/assets/Icons/BalanceIcon'
import DashFreshIcon from '~/assets/Icons/DashFreshIcon'
import MinuteListenedIcon from '~/assets/Icons/MinutesListenedIcon'
import NewIcon1 from '~/assets/Icons/NewIcon1'
import NoficationDashboxIcon1 from '~/assets/Icons/NoficationDashboxIcon1'
import NoficationDashboxIcon2 from '~/assets/Icons/NoficationDashboxIcon2'
import NoficationDashboxIcon3 from '~/assets/Icons/NoficationDashboxIcon3'
import NoficationDashboxIcon4 from '~/assets/Icons/NoficationDashboxIcon4'
import NoficationProfile from '~/assets/Icons/NoficationProfile'
import PremiunPlanIcon from '~/assets/Icons/PremiumPlanIcon'
import NewItem from '~/components/NewItem'

function TabOne() {
  // const [promoCode, setPromoCode] = useState('')
  // const handleChangePromoCode = (e: any) => {
  //   if (promoCode.length <= 11) {
  //     setPromoCode(e.target.value)
  //   }
  // }

  return (
    <div className='duration-[0.4s] ease-linear delay-0 transition-opacity' id='tab-1'>
      <div className='flex flex-wrap md:mx-[-15px] mx-[-10px] '>
        <div className='md:px-[15px] md:basis-1/2 md:max-w-[50%] px-2.5 xl:basis-3/12 xl:max-w-[25%] basis-full max-w-full'>
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
        <div className='md:px-[15px] md:basis-1/2 md:max-w-[50%] px-2.5 xl:basis-3/12 xl:max-w-[25%] basis-full max-w-full'>
          <div className='md:mt-[30px] mt-5 flex flex-col items-start justify-center relative p-5 rounded-2xl w-full border border-solid border-[#222227]'>
            <span className='text-[20px] leading-[100%] font-normal mb-0 w-full flex flex-row justify-start items-end'>
              Premium Plan
            </span>
            <p className='text-[14px] text-[#c0c0c0] mb-0 mt-5 font-normal leading-[100%]'>
              <b className='text-[20px] font-medium'>$39.99</b>/month
            </p>
            <PremiunPlanIcon className='absolute bottom-[15px] right-[15px] w-[30px] h-auto fill-emerald' />
          </div>
        </div>
        <div className='md:px-[15px] md:basis-1/2 md:max-w-[50%] px-2.5 xl:basis-3/12 xl:max-w-[25%] basis-full max-w-full'>
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
        <div className='md:px-[15px] md:basis-1/2 md:max-w-[50%] px-2.5 xl:basis-3/12 xl:max-w-[25%] basis-full max-w-full'>
          <div className='md:mt-[30px] mt-5 flex flex-col items-start justify-center relative p-5 rounded-2xl w-full border border-solid border-[#222227]'>
            <span className='text-[20px] leading-[100%] font-normal mb-0 w-full flex flex-row justify-start items-end'>
              Promo Code
            </span>
            <form action='#' className='flex flex-row justify-between items-center relative w-full mt-2.5'>
              <input
                // value={promoCode}
                // onChange={handleChangePromoCode}
                className='outline-none relative z-2 h-6 w-full bg-transparent text-[#fff] text-[18px] pr-[50px]'
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
      <div className='flex flex-wrap md:mx-[-15px] mx-[-10px]'>
        {/* dashbox */}
        <div className='md:px-[15px] px-2.5 basis-full max-w-full md:basis-1/2 md:max-w-[50%] relative w-full'>
          <div className='md:mt-[30px] mt-5 rounded-xl overflow-hidden border border-[#222227] border-solid'>
            <div className='flex flex-row justify-between items-center p-5 border border-[#222227] border-solid'>
              <h3 className='flex flex-row justify-start items-center font-normal text-xl leading-[100%] mb-0 mt-0 '>
                <NoficationProfile className='mr-2.5 w-[22px] h-auto overflow-hidden align-middle' /> Notifications
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
        <div className='md:px-[15px] px-2.5 basis-full max-w-full md:basis-1/2 md:max-w-[50%] relative w-full'>
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
            <NewItem status={true} />
          </div>
        </div>
        {/* end dashbox */}
      </div>
    </div>
  )
}

export default TabOne
