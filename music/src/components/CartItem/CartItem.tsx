import { AiOutlineClose } from 'react-icons/ai'

interface ICartItem {
  name: string
  url: string
  price: string
}
function CartItem(product: ICartItem) {
  return (
    <div
      key={product.name}
      className='w-full flex gap-[10px] py-[10px] border-b-[1px] border-white border-opacity-[0.1]'
    >
      <img className='w-[46px] h-auto rounded-[6px]' src={product.url} alt={product.name} />
      <div className='w-full'>
        <p className='text-[15px] text-ellipsis block break-all whitespace-nowrap'>
          <a href='product.html'>{product.name}</a>
        </p>
        <div className='flex items-center justify-between'>
          <span className='text-[14px] text-grey-C0'>${product.price}</span>
          <AiOutlineClose className='text-grey-C0 hover:text-emerald duration-150' size={14} />
        </div>
      </div>
    </div>
  )
}

export default CartItem
