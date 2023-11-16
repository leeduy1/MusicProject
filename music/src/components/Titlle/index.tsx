import React from 'react'

interface ITittle {
  nameTittle: string
}

function Tittle({ nameTittle }: ITittle) {
  return (
    <div>
      <div className='flex flex-wrap mx-[-15] mt-[50px] basic-full grow-0'>
        <div className='mb-0 flex flex-row justify between items-end flex-wrap '>
          <h1 className='md:text-[38px] flex flex-row justify-start items-start font-sans font-normal text-[30px] cursor-default'>
            {nameTittle}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Tittle
