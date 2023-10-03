import { Link } from "react-router-dom"

function TabTwo() {
  return (
    <div className='duration-[0.4s] ease-linear delay-0 transition-opacity' id='tab-2'>
      <div className='grow shrink-0 basis-full flex flex-wrap md:mx-[-15px] mx-[-10px] '>
        <div className='flex flex-wrap flex-grow flex-shrink-0 basis-full'>
          <div className='md:px-[15px] px-2.5 flex-grow-0 flex-shrink-0 basis-full max-w-full'>
            <div className='md:mt-2.5 mt-5 rounded-xl overflow-hidden border border-solid border-[#222227]'>
              <div className='relative block w-full overflow-auto px-5 pb-[5px] pt-5'>
                <div className='overflow-auto scrollbar w-full block relative'>
                  <table className='w-full min-w-[520px] border-collapse'>
                    <thead className='border-b border-solid border-[#222227]'>
                      <tr>
                        <th className='text-[14px] text-[#c0c0c0] font-normal pt-0 pr-2.5 pb-5 pl-0 leading-[100%] mb-0 border-none'>
                          No
                        </th>
                        <th className='text-[14px] text-[#c0c0c0] font-normal pt-0 pr-2.5 pb-5 pl-0 leading-[100%] mb-0 border-none'>
                          <Link to='' className="inline-flex flex-row ">Product</Link>
                        </th>
                        <th className='text-[14px] text-[#c0c0c0] font-normal pt-0 pr-2.5 pb-5 pl-0 leading-[100%] mb-0 border-none'>
                          <Link to='' className="inline-flex flex-row ">Title</Link>
                        </th>
                        <th className='text-[14px] text-[#c0c0c0] font-normal pt-0 pr-2.5 pb-5 pl-0 leading-[100%] mb-0 border-none'>
                          <Link to='' className="inline-flex flex-row ">Date</Link>
                        </th>
                        <th className='text-[14px] text-[#c0c0c0] font-normal pt-0 pr-2.5 pb-5 pl-0 leading-[100%] mb-0 border-none'>
                          <Link to='' className="inline-flex flex-row ">Quantity</Link>
                        </th>
                        <th className='text-[14px] text-[#c0c0c0] font-normal pt-0 pr-2.5 pb-5 pl-0 leading-[100%] mb-0 border-none'>
                          <Link to='' className="inline-flex flex-row ">Total</Link>
                        </th>
                        <th className='text-[14px] text-[#c0c0c0] font-normal pt-0 pr-2.5 pb-5 pl-0 leading-[100%] mb-0 border-none'>
                          <Link to='' className="inline-flex flex-row ">Status</Link>
                        </th>
                      </tr>
                    </thead>
                    <tbody></tbody>
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
