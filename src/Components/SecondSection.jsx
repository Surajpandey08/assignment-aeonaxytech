import React from 'react'

export const SecondSection = () => {
  return (
    <section className='my-40 '>
      <div className='flex md:justify-around md:flex-row flex-col justify-center items-center'>
        <div className='w-96'>
          <header className='text-md font-semibold text-sky-600 border-b-2'>Small-to-medium Buisness</header>
          <div className='flex justify-between'>
            <div className='pt-10 font-medium text-xs'>
              <h1 className='pb-4' >Introduction</h1>
              <h1 className='pb-4'>Get started</h1>
            </div>
               <div className='pt-10 font-medium text-xs'>
                <h1 className='pb-4 ' >All Solutions</h1>
                <p className='pb-3 font-normal'>Accept Payment</p>
                <p className='pb-3 font-normal'> Manage Risk</p>
                <p className='pb-3 font-normal'>Accelarate Growth</p>
                <p className='pb-3 font-normal'>Streamline Operation</p>    
               </div>
          </div>
        </div>
        <div className='w-96'>
          <header className='text-md font-semibold text-sky-600 border-b-2'>Enterprise</header>
          <div className='flex justify-between'>
            <div className='pt-10 font-medium text-xs'>
              <h1 className='pb-4' >Introduction</h1>
              <h1 className='pb-4'>Marketplace & Partners</h1>
            </div>
               <div className='pt-10 font-medium text-xs'>
                <h1 className='pb-4 ' >Platform Solutions</h1>
                <p className='pb-3 font-normal'>Accept Payment</p>
                <p className='pb-3 font-normal'> Manage Risk</p>
                <p className='pb-3 font-normal'>Accelarate Growth</p>
                <p className='pb-3 font-normal'>Streamline Operation</p>    
               </div>
          </div>
          
        </div>
        <div className='w-96 md:w-24 h-[210px]'>
          <header className='text-md font-semibold text-sky-600 border-b-2'>More</header>
          <div className='flex justify-between'>
            <div className='pt-10 font-medium text-xs'>
              <h1 className='pb-4' >Non Profits</h1>
              <h1 className='pb-4'>Pricing</h1>
              <h1 className='pb-4'>Resources</h1>
            </div>
               
          </div>
          
        </div>
       
      </div>
    </section>
  )
}
