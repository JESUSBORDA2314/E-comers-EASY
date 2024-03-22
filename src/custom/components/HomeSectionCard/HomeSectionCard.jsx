import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
      <div className='h-[13rem] w-10rem]'>
        <img src="https://as1.ftcdn.net/v2/jpg/01/21/81/86/1000_F_121818673_6EID5iF76VCCc4aGOLJkd94Phnggre3o.jpg" className='object-cover object-top w-full h-full ' alt="" />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>Nofillte</h3>
        <p className='mt-2 text-sm text-gray-500'></p>
      </div>
    </div>
  )
}

export default HomeSectionCard
