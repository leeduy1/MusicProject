import React from 'react'
interface INotificationItem {
  icon: React.ReactElement
  content: string
  time: string
}

function NotificationItem({ icon, content, time }: INotificationItem) {
  return (
    <div className='py-[10px] flex-col gap-[10px] border-b-[1px] border-[#fff] border-opacity-[0.1]'>
      <div className='flex items-center gap-[5px]'>
        {React.cloneElement(icon)}
        <p className='text-[14px] w-[calc(100%_-_25px)] text-ellipsis'>
          <a href='#modal-info2' className='hover:border-b-[1px]'>
            {content}
          </a>
        </p>
      </div>
      <span className='text-[12px] text-grey-C0'>{time}</span>
    </div>
  )
}

export default NotificationItem
