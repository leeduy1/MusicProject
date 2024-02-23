import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AbtractionIcon from '~/assets/Icons/AbtractionIcon'
import AddIcon from '~/assets/Icons/AddIcon'
import Breadcrumb from '~/components/BreadCrumb'
import Tittle from '~/components/Titlle'

interface ICart {
  product: string
  title: string
  amount: number
  price: string
  discount: { isDiscount: boolean; discountPrice: string }
}

function Cart() {
  const Mycart: ICart[] = [
    {
      product: 'https://volna.volkovdesign.com/img/store/item2.jpg',
      title: 'Microphone R4',
      amount: 1,
      price: '$699',
      discount: { isDiscount: true, discountPrice: '$799' }
    },
    {
      product: 'https://volna.volkovdesign.com/img/store/item3.jpg',
      title: 'Music Blank',
      amount: 1,
      price: '$3.99',
      discount: { isDiscount: false, discountPrice: '' }
    },
    {
      product: 'https://volna.volkovdesign.com/img/store/item4.jpg',
      title: 'Headphones ZR-991',
      amount: 1,
      price: '$199',
      discount: { isDiscount: false, discountPrice: '' }
    }
  ]
  const [count, setcount] = useState(1)
  const [option, setOption] = useState('#visa')

  const handleDecreaseCount = () => {
    count === 1 ? setcount(1) : setcount(count - 1)
  }
  const handleIncreaseCount = () => {
    setcount(count + 1)
  }
  const handleSelectOption = (id: string) => {
    setOption(id)
  }
  return (
    <div className='md:pt-[30px] pb-[70px] sm:pt-5 sm:pb-[50px] w-full px-[30px] mx-auto pt-[20px] relative '>
      <div className='w-full'>
        {/* BreadCrumb */}
        <Breadcrumb name={'Cart'} />
        {/* EndBreadCrumb */}
        {/* Tiltle */}
        <Tittle nameTittle={'Cart'} />
      </div>
      <div className='flex flex-row mt-7'>
        <div className='flex flex-col flex-wrap basis-2/3 max-w-[66.6666666%] rounded-2xl border border-solid border-[#333333] p-4 mr-5'>
          <table className='w-full min-w-[520px]'>
            <thead className=''>
              <tr>
                <th className='text-lg text-left text-[#c0c0c0] font-normal pt-2 pb-5 leading-[100%]'>Product</th>
                <th className='text-lg text-left text-[#c0c0c0] font-normal pt-2 pr-2.5 pb-5 pl-0 leading-[100%] mb-0'>
                  Title
                </th>
                <th className='text-lg text-left text-[#c0c0c0] font-normal pt-2 pr-2.5 pb-5 pl-0 leading-[100%] mb-0'>
                  Amount
                </th>
                <th className='text-lg text-left text-[#c0c0c0] font-normal pt-2 pr-2.5 pb-5 pl-0 leading-[100%] mb-0'>
                  Price
                </th>
                <th className=''></th>
              </tr>
            </thead>
            <tbody>
              {Mycart.map((key) => (
                <tr className=''>
                  <td className=''>
                    <div className='w-[100px] h-auto flex flex-row items-center justify-center rounded-lg bg-transparent overflow-hidden pt-[15px] pb-[15px] pl-0'>
                      <img className='w-full h-auto rounded-lg' src={key.product} alt='' />
                    </div>
                  </td>
                  <td>
                    <div className='pt-[15px] pr-5 pb-[15px] pl-0 flex flex-row justify-start items-center text-sm text-[#c0c0c0] font-normal'>
                      <Link className='text-white text-base hover:text-[#25a56a] duration-[0.5s] ease-in-out' to=''>
                        {key.title}
                      </Link>
                    </div>
                  </td>
                  <td>
                    <div className='pt-[30px] pr-5 pb-[15px] pl-0 flex flex-row justify-start items-center text-sm font-normal'>
                      <div className='flex flex-row gap-2 bg-[#222227] w-[90px] justify-center items-center rounded-lg h-8 mb-5'>
                        <button onClick={() => handleDecreaseCount()}>
                          <AbtractionIcon className='hover:fill-emerald fill-[#c0c0c0] duration-500 ease-in-out h-auto w-5' />
                        </button>
                        <span>{count}</span>
                        <button onClick={() => handleIncreaseCount()}>
                          <AddIcon className='hover:fill-emerald fill-[#c0c0c0] duration-500 ease-in-out h-auto w-5' />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='pt-[15px] pr-5 pb-[15px] pl-0 flex gap-2 flex-row justify-start items-center text-sm text-[#c0c0c0] font-normal'>
                      <span className='text-base '>{key.price}</span>
                      <span className='text-[red] line-through'>{key.discount.discountPrice}</span>
                    </div>
                  </td>
                  <td>
                    <div className='pt-[15px] pr-5 pb-[15px] pl-0 bg-transparent text-[16px] font-inter font-medium opacity-80'>
                      <span className='hover:text-emerald duration-500 cursor-pointer'>X</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='flex flex-row justify-between items-end w-full pt-2.5 pb-5'>
            <div className='flex flex-col justify-start items-start md:order-1'>
              <h1 className='text-[#c0c0c0]'>Total:</h1>
              <span className='text-3xl font-medium'>$909.99</span>
            </div>
            <form action='' className='md:order-3 md:w-[250px] flex flex-row justify-between item-center relative'>
              <input
                style={{ width: 'calc(100% - 90px)' }}
                placeholder='Promo code'
                className='h-10 bg-[#333333] border border-solid border-transparent relative px-5 outline-none focus:border-emerald rounded-xl'
                type='text'
                name=''
                id=''
              />
              <button className='hover:bg-[#333333] duration-500 ease-in-out w-20 h-10 rounded-xl cursor-pointer bg-emerald flex flex-row justify-center items-center text-sm font-medium'>
                Apply
              </button>
            </form>
          </div>
        </div>
        <div className='flex flex-col basis-1/3 max-w-[33.33333333%] rounded-2xl border border-solid border-[#333333] p-4 relative'>
          <h1 className='mb-2 text-xl text-[#c0c0c0]'>Checkout</h1>
          <form action='' className='flex flex-col mt-3 font-inter gap-2 relative'>
            <label htmlFor='' className='text-[#c0c0c0]'>
              Name:
            </label>
            <input type='text' className='bg-[#333333] h-10 rounded-xl px-4 mb-3' placeholder='Phan Quí Xuân' />
            <label htmlFor='' className='text-[#c0c0c0]'>
              Email:
            </label>
            <input type='text' className='bg-[#333333] h-10 rounded-xl px-4 mb-3' placeholder='xuanphan742@gmail.com' />
            <label htmlFor='' className='text-[#c0c0c0]'>
              Phone Number:
            </label>
            <input type='text' className='bg-[#333333] h-10 rounded-xl px-4 mb-3' placeholder='0703092742' />
            <h1 className='text-sm text-[#c0c0c0]'>Payment method:</h1>
            <ul className='flex flex-col justify-start items-start w-full mt-1 relative'>
              <li className='overflow-hidden relative'>
                <input
                  type='radio'
                  name='1'
                  id='#visa'
                  className='absolute left-[-9999px]'
                  onChange={() => handleSelectOption('#visa')}
                />
                <label
                  className={`pay-before block relative cursor-pointer text-base pl-8 ${
                    option === '#visa'
                      ? `before:border-emerald text-white`
                      : `text-[#c0c0c0] hover:text-white duration-300 ease-in-out`
                  }`}
                  htmlFor='#visa'
                >
                  Visa
                </label>
              </li>
              <li className='overflow-hidden relative'>
                <input
                  type='radio'
                  name='1'
                  id='#mastercard'
                  className='absolute left-[-9999px]'
                  onChange={() => {
                    handleSelectOption('#mastercard')
                  }}
                />
                <label
                  className={`pay-before block relative cursor-pointer text-base pl-8 ${
                    option === '#mastercard'
                      ? `before:border-emerald text-white`
                      : `text-[#c0c0c0] hover:text-white duration-300 ease-in-out`
                  }`}
                  htmlFor='#mastercard'
                >
                  MasterCard
                </label>
              </li>
              <li className='overflow-hidden relative'>
                <input
                  type='radio'
                  name='1'
                  id='#paypal'
                  className='absolute left-[-9999px]'
                  onChange={() => {
                    handleSelectOption('#paypal')
                  }}
                />
                <label
                  className={`pay-before block relative cursor-pointer text-base pl-8 ${
                    option === '#paypal'
                      ? `before:border-emerald text-white`
                      : `text-[#c0c0c0] hover:text-white duration-300 ease-in-out`
                  }`}
                  htmlFor='#paypal'
                >
                  Paypal
                </label>
              </li>
            </ul>
            <button className='mt-4 bg-emerald h-14 uppercase rounded-xl hover:bg-[#333333] duration-500 ease-in-out'>
              Complete
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cart
