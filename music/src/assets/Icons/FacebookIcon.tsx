interface IProps {
  className?: string
  fill?: string
}

function FacebookIcon({ className, fill }: IProps) {
  return (
    <svg
      className={className}
      width='30'
      height='30'
      viewBox='0 0 30 30'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15Z'
        fill='#3B5998'
      ></path>
      <path
        d='M16.5634 23.8197V15.6589H18.8161L19.1147 12.8466H16.5634L16.5672 11.4391C16.5672 10.7056 16.6369 10.3126 17.6904 10.3126H19.0987V7.5H16.8457C14.1394 7.5 13.1869 8.86425 13.1869 11.1585V12.8469H11.4999V15.6592H13.1869V23.8197H16.5634Z'
        fill='white'
      ></path>
    </svg>
  )
}

export default FacebookIcon
