import React from 'react'
interface INotificationProps {
  children: React.ReactNode
  title: string
  className?: string
}
function Notifications({ children, title, className }: INotificationProps) {
  return (
    <div
      className={`notification-drop overflow-y-auto absolute w-[260px] max-h-[300px] scale-0 px-[15px] py-[15px] bg-[#222227] rounded-[12px] transition-all duration-300 top-[calc(100%_+_5px)] -right-[15px] ${className}`}
    >
      <a
        href='#'
        className='w-full text-[13px] py-[2px] hover:text-emerald duration-150 flex items-center justify-center rounded-tl-[8px] rounded-tr-[8px] text-grey-C0 bg-white bg-opacity-[0.1]'
      >
        {title}
      </a>
      {children}
    </div>
  )
}

export default Notifications
