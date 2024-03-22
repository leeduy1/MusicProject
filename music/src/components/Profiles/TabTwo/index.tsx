import { Link } from 'react-router-dom'
import CanceledIcon from '~/assets/Icons/CanceledIcon'
import DeliveryIcons from '~/assets/Icons/DeliveryIcons'
import OnthewayIcon from '~/assets/Icons/OnthewayIcon'
import OrderIcons1 from '~/assets/Icons/OrderIcon1'
import OrderIcons3 from '~/assets/Icons/OrderIcon3'
import OrderIcons2 from '~/assets/Icons/OrderIcons2'

function TabTwo() {
  return (
    <div className='duration-[0.4s] ease-linear delay-0 transition-opacity' id='tab-2'>
      <div className='md:mx-[-15px] mx-[-10px] '>
        <div className='flex flex-wrap'>
          <div className='md:px-[15px] px-2.5 basis-full max-w-full'>
            <div className='mt-2.5 md:mt-[30px] rounded-xl overflow-hidden border border-solid border-[#222227]'>
              <div className='relative block w-full overflow-auto px-5 pb-[5px] pt-5'>
                <div className='overflow-auto scrollbar w-full block relative'>
                  <table className='w-full min-w-[520px] border-collapse'>
                    <thead className='border-b border-solid border-[#222227]'>
                      <tr>
                        <th className='text-[14px] text-left text-[#c0c0c0] font-normal pt-0 pr-0 pb-5 pl-0 leading-[100%] mb-0 border-none'>
                          №
                        </th>
                        <th className='text-[14px] text-left text-[#c0c0c0] font-normal pt-0 pr-0 mr-0 pb-5 pl-0 leading-[100%] group mb-0 border-none'>
                          <Link
                            to=''
                            className='inline-flex flex-row duration-[0.5s] items-center ease-in-out group-hover:text-white'
                          >
                            Product
                            <OrderIcons1 className='w-5 h-auto duration-[0.5s] fill-[#c0c0c0] ease-in-out items-center group-hover:fill-[#25a56a]' />
                          </Link>
                        </th>
                        <th className='text-[14px] text-left text-[#fff] font-normal pt-0 pr-2.5 pb-5 pl-0 leading-[100%] mb-0 border-none'>
                          <Link to='' className='inline-flex flex-row items-center'>
                            Title
                            <OrderIcons2 className='w-5 h-auto duration-[0.5s]' />
                          </Link>
                        </th>
                        <th className='text-[14px] text-left text-[#fff] font-normal pt-0 pr-2.5 pb-5 pl-0 leading-[100%] mb-0 border-none'>
                          <Link to='' className='inline-flex flex-row items-center'>
                            Date
                            <OrderIcons3 className='w-5 h-auto duration-[0.5s]' />
                          </Link>
                        </th>
                        <th className='text-[14px] text-left text-[#c0c0c0] font-normal pt-0 pr-2.5 pb-5 pl-0 leading-[100%] mb-0 border-none group'>
                          <Link
                            to=''
                            className='inline-flex flex-row duration-[0.5s] items-center ease-in-out group-hover:text-[#fff]'
                          >
                            Quantity
                            <OrderIcons1 className='w-5 h-auto duration-[0.5s] fill-[#c0c0c0] ease-in-out items-center group-hover:fill-[#25a56a]' />
                          </Link>
                        </th>
                        <th className='text-[14px] text-left text-[#c0c0c0] font-normal pt-0 pr-2.5 pb-5 pl-0 leading-[100%] mb-0 border-none group'>
                          <Link
                            to=''
                            className='inline-flex flex-row duration-[0.5s] items-center ease-in-out group-hover:text-[#fff]'
                          >
                            Total
                            <OrderIcons1 className='w-5 h-auto duration-[0.5s] fill-[#c0c0c0] ease-in-out items-center group-hover:fill-[#25a56a]' />
                          </Link>
                        </th>
                        <th className='text-[14px] text-left text-[#c0c0c0] font-normal pt-0 pr-2.5 pb-5 pl-0 leading-[100%] mb-0 border-none group'>
                          <Link
                            to=''
                            className='inline-flex flex-row duration-[0.5s] items-center ease-in-out group-hover:text-[#fff]'
                          >
                            Status
                            <OrderIcons1 className='w-5 h-auto duration-[0.5s] fill-[#c0c0c0] ease-in-out items-center group-hover:fill-[#25a56a]' />
                          </Link>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-b-0 border-t border-solid border-[#222227]'>
                        <td className='p-o bg-transparent border-0 border-solid border-transparent'>
                          <div className='first:rounded-l-xl bg-transparent first:rounded-r-none pt-[15px] leading-[30x] pr-5 pb-[15px] pl-0 flex flex-row justify-start items-center text-sm text-[#c0c0c0] font-normal'>
                            <Link
                              to=''
                              className='leading-[22px] text-sm border-b-2 border-dashed border-[#25a56a] hover:text-[#25a56a] ease-in-out duration-[0.5s] text-white'
                            >
                              631
                            </Link>
                          </div>
                        </td>
                        <td className='p-0'>
                          <div className='w-[100px] h-auto flex flex-row items-center justify-center rounded-lg bg-transparent overflow-hidden pt-[15px] pr-5 pb-[15px] pl-0'>
                            <img
                              className='w-full h-auto rounded-lg'
                              src='https://volna.volkovdesign.com/img/store/item3.jpg'
                              alt=''
                            />
                          </div>
                        </td>
                        <td>
                          <div className='pt-[15px] pr-5 pb-[15px] pl-0 flex flex-row justify-start items-center text-sm text-[#c0c0c0] font-normal'>
                            <Link
                              className='text-white text-base hover:text-[#25a56a] duration-[0.5s] ease-in-out'
                              to=''
                            >
                              Music Blank
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className='pt-[15px] pr-5 pb-[15px] pl-0 flex flex-row justify-start items-center text-sm text-[#c0c0c0] font-normal'>
                            October 5,2023
                          </div>
                        </td>
                        <td>
                          <div className='pt-[15px] pr-5 pb-[15px] pl-0 flex flex-row justify-start items-center text-sm text-[#c0c0c0] font-normal'>
                            17
                          </div>
                        </td>
                        <td>
                          <div className='pt-[15px] pr-5 pb-[15px] pl-0 bg-transparent text-[16px] font-inter font-medium opacity-80'>
                            $67.83
                          </div>
                        </td>
                        <td>
                          <div className='pt-[15px] pr-5 pb-[15px] pl-0 flex flex-row justify-start items-center text-sm text-[#25a56a] font-normal'>
                            <DeliveryIcons className='w-[18px] h-auto mr-[5px]' />
                            Delivered
                          </div>
                        </td>
                      </tr>
                      <tr className='border-b-0 border-t border-solid border-[#222227]'>
                        <td className='p-o bg-transparent border-0 border-solid border-transparent'>
                          <div className='first:rounded-l-xl bg-transparent first:rounded-r-none pt-[15px] leading-[30x] pr-5 pb-[15px] pl-0 flex flex-row justify-start items-center text-sm text-[#c0c0c0] font-normal'>
                            <Link
                              to=''
                              className='leading-[22px] text-sm border-b-2 border-dashed border-[#25a56a] hover:text-[#25a56a] ease-in-out duration-[0.5s] text-white'
                            >
                              632
                            </Link>
                          </div>
                        </td>
                        <td className='p-0'>
                          <div className='w-[100px] h-auto flex flex-row items-center justify-center rounded-lg bg-transparent overflow-hidden pt-[15px] pr-5 pb-[15px] pl-0'>
                            <img
                              className='w-full h-auto rounded-lg'
                              src='https://volna.volkovdesign.com/img/store/item3.jpg'
                              alt=''
                            />
                          </div>
                        </td>
                        <td>
                          <div className='pt-[15px] pr-5 pb-[15px] pl-0 flex flex-row justify-start items-center text-sm text-[#c0c0c0] font-normal'>
                            <Link
                              className='text-white text-base hover:text-[#25a56a] duration-[0.5s] ease-in-out'
                              to=''
                            >
                              Music Blank
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className='pt-[15px] pr-5 pb-[15px] pl-0 flex flex-row justify-start items-center text-sm text-[#c0c0c0] font-normal'>
                            October 5,2023
                          </div>
                        </td>
                        <td>
                          <div className='pt-[15px] pr-5 pb-[15px] pl-0 flex flex-row justify-start items-center text-sm text-[#c0c0c0] font-normal'>
                            17
                          </div>
                        </td>
                        <td>
                          <div className='pt-[15px] pr-5 pb-[15px] pl-0 bg-transparent text-[16px] font-inter font-medium opacity-80'>
                            $67.83
                          </div>
                        </td>
                        <td>
                          <div className='pt-[15px] pr-5 pb-[15px] pl-0 flex flex-row justify-start items-center text-sm text-[#eb5757] font-normal'>
                            <CanceledIcon className='w-[18px] h-auto mr-[5px]' />
                            Canceled
                          </div>
                        </td>
                      </tr>
                      <tr className='border-b-0 border-t border-solid border-[#222227]'>
                        <td className='p-o bg-transparent border-0 border-solid border-transparent'>
                          <div className='first:rounded-l-xl bg-transparent first:rounded-r-none pt-[15px] leading-[30x] pr-5 pb-[15px] pl-0 flex flex-row justify-start items-center text-sm text-[#c0c0c0] font-normal'>
                            <Link
                              to=''
                              className='leading-[22px] text-sm border-b-2 border-dashed border-[#25a56a] hover:text-[#25a56a] ease-in-out duration-[0.5s] text-white'
                            >
                              708
                            </Link>
                          </div>
                        </td>
                        <td className='p-0'>
                          <div className='w-[100px] h-auto flex flex-row items-center justify-center rounded-lg bg-transparent overflow-hidden pt-[15px] pr-5 pb-[15px] pl-0'>
                            <img
                              className='w-full h-auto rounded-lg'
                              src='https://volna.volkovdesign.com/img/store/item4.jpg'
                              alt=''
                            />
                          </div>
                        </td>
                        <td>
                          <div className='pt-[15px] pr-5 pb-[15px] pl-0 flex flex-row justify-start items-center text-sm text-[#c0c0c0] font-normal'>
                            <Link
                              className='text-white text-base hover:text-[#25a56a] duration-[0.5s] ease-in-out'
                              to=''
                            >
                              Headphones ZR-991
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className='pt-[15px] pr-5 pb-[15px] pl-0 flex flex-row justify-start items-center text-sm text-[#c0c0c0] font-normal'>
                            October 6,2023
                          </div>
                        </td>
                        <td>
                          <div className='pt-[15px] pr-5 pb-[15px] pl-0 flex flex-row justify-start items-center text-sm text-[#c0c0c0] font-normal'>
                            1
                          </div>
                        </td>
                        <td>
                          <div className='pt-[15px] pr-5 pb-[15px] pl-0 bg-transparent text-[16px] font-inter font-medium opacity-80'>
                            $199
                          </div>
                        </td>
                        <td>
                          <div className='pt-[15px] pr-5 pb-[15px] pl-0 flex flex-row justify-start items-center text-sm text-[#c0c0c0] font-normal'>
                            <OnthewayIcon className='w-[18px] h-auto mr-[5px]' />
                            On the way
                          </div>
                        </td>
                      </tr>
                      <tr className='border-b-0 border-t border-solid border-[#222227]'>
                        <td className='p-o bg-transparent border-0 border-solid border-transparent'>
                          <div className='first:rounded-l-xl bg-transparent first:rounded-r-none pt-[15px] leading-[30x] pr-5 pb-[15px] pl-0 flex flex-row justify-start items-center text-sm text-[#c0c0c0] font-normal'>
                            <Link
                              to=''
                              className='leading-[22px] text-sm border-b-2 border-dashed border-[#25a56a] hover:text-[#25a56a] ease-in-out duration-[0.5s] text-white'
                            >
                              750
                            </Link>
                          </div>
                        </td>
                        <td className='p-0'>
                          <div className='w-[100px] h-auto flex flex-row items-center justify-center rounded-lg bg-transparent overflow-hidden pt-[15px] pr-5 pb-[15px] pl-0'>
                            <img
                              className='w-full h-auto rounded-lg'
                              src='https://volna.volkovdesign.com/img/store/item1.jpg'
                              alt=''
                            />
                          </div>
                        </td>
                        <td>
                          <div className='pt-[15px] pr-5 pb-[15px] pl-0 flex flex-row justify-start items-center text-sm text-[#c0c0c0] font-normal'>
                            <Link
                              className='text-white text-base hover:text-[#25a56a] duration-[0.5s] ease-in-out'
                              to=''
                            >
                              Vinyl Player
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className='pt-[15px] pr-5 pb-[15px] pl-0 flex flex-row justify-start items-center text-sm text-[#c0c0c0] font-normal'>
                            September 25,2023
                          </div>
                        </td>
                        <td>
                          <div className='pt-[15px] pr-5 pb-[15px] pl-0 flex flex-row justify-start items-center text-sm text-[#c0c0c0] font-normal'>
                            2
                          </div>
                        </td>
                        <td>
                          <div className='pt-[15px] pr-5 pb-[15px] pl-0 bg-transparent text-[16px] font-inter font-medium opacity-80'>
                            $11 990
                          </div>
                        </td>
                        <td>
                          <div className='pt-[15px] pr-5 pb-[15px] pl-0 flex flex-row justify-start items-center text-sm text-[#25a56a] font-normal'>
                            <DeliveryIcons className='w-[18px] h-auto mr-[5px]' />
                            Delivered
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabTwo
