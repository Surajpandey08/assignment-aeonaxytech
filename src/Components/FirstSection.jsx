import React from 'react'


export const FirstSection = () => {
  return (
    <section className="md:min-h-[1024px] min-h-[1400px] ">

      <div >

<div className='h-80 bg-white md:bg-primary py-20  '>
        <div className='w-3/4 md:w-1/3 mx-10 md:mx-20'>
            <h1 className=' font-medium text-primary md:text-white text-4xl md:text-4xl font-poppins'>Connect with our sales team</h1>
            <p className=' mt-2  font-medium text-primary md:text-white font-poppins'>Let's talk about how PayPal can power your growth.</p>
        
        </div>
</div>

<div className="parent inline-block relative w-3/4 top-20"> 
<form className='child border-2  bg-white font-poppins rounded-lg p-8 z-20 absolute top-0 mt-[-180px] left-12 m-4/5 w-full md:w-2/5 md:mt-[-300px] md:left-3/4'>
  <div>
    <h1 className='text-3xl font-medium py-2 text-primary'>Get started</h1>
    <p className='font-normal text-primary'>Tell us a little about your business so we can connect you with the right people.</p>
    <div className='mt-6'>

    <div className='pb-4'>
    <input required  className='w-full border text-xs border-gray-500 rounded-md p-3 focus:outline-teal-500  ' type="text" placeholder='First Name*' name='firstname' />

    </div>
    <div className='pb-4'>
      <input required className=' w-full border text-xs border-gray-500 rounded-md p-3 focus:outline-teal-500 ' type="text" placeholder='Last Name*' name='lastname' />
    </div>
    <div className='pb-4'>
      <input required className=' w-full border text-xs border-gray-500 rounded-md p-3 focus:outline-teal-500 ' type="email" placeholder='Work Email*' name='email' />
    </div>
    <div className='pb-4'>
      <input required className=' w-full border text-xs border-gray-500 rounded-md p-3 focus:outline-teal-500 ' type="tel" placeholder='Phone Number*' name='number' />
    </div>
    <div className='pb-4'>
      <input required className=' w-full border text-xs border-gray-500 rounded-md p-3 focus:outline-teal-500 ' type="text" placeholder='Company Name*' name='companyname' />
    </div>
    <div className='pb-4'>
      <input required className=' w-full border text-xs border-gray-500 rounded-md p-3 focus:outline-teal-500 ' type="text" placeholder='Comapny Website*' name='website' />
    </div>
    <div className='pb-4'>
      <select className=' w-full border text-xs border-gray-500 rounded-md p-3 focus:outline-teal-500 text-gray-500 ' placeholder='Country Name*' name='country' >
      <option  value="" disabled selected hidden >Country Name*</option>
      <option>India</option>
      <option>United States</option>
      <option>United KIngdom</option>
      <option>Germany</option>
      </select>
    </div>
    <div className='pb-4'>
      <select required className=' text-gray-500 w-full border text-xs border-gray-500 rounded-md p-3 focus:outline-teal-500 ' placeholder='Estimated annual sales*' name='country' >
      <option  value="" disabled selected hidden >Estimated annual sales*</option>
      <option>Less than $100000</option>
      <option>$100000-$400000</option>
      <option>$500000-$1000000</option>
      <option>More than $1000000</option>
      </select>
    </div>
    <div className='pb-4'>
      <select required className=' text-gray-500 w-full border text-xs border-gray-500 rounded-md p-3 focus:outline-teal-500 ' placeholder='Estimated annual sales*' name='country' >
      <option  value="" disabled selected hidden >Do you already have PayPal Buisness Account*</option>
      <option>Yes</option>
      <option>No</option>
      </select>
    
    </div>
    <div className='pb-4 flex items-center gap-2'>
      <input required  type="checkbox" placeholder='Comapny Website*' name='website' />
      <p className='text-xs'>I have read and accepted the <span className='text-teal-600 font-medium'>PayPal Privacy Policy.</span> </p>
    </div>
    <div className='pb-4'>
      <p className=' w-11/12  text-xs pl-5  ' type="text" placeholder='Comapny Website*' name='website'>
      I consent to PayPal contacting me by phone or by email, and to sending me product or industry information relevant to my query. I know I can unsubscribe at any time.
      </p>
    </div>
    <div className='pt-4 flex justify-center'>
    <button type="button" class="  text-sm  h-10 w-60 font-normal md:font-medium text-white focus:outline-none bg-sky-600 rounded-full   ">Submit</button>
    </div>
  


    </div>
    
  </div>
</form>
</div>

<div className='mx-20 md:top-[450px] top-[1150px] pt-20 md:pt-0  absolute h-400'>
  <div className='pt-10'><h1 className='text-2xl font-medium'>Some other way to connect with us</h1></div>
  <div className='pt-10'><p className='text-md'>Want to speak with sales right away?</p><p className='text-sky-600 font-semibold'>Call 1-855-787-1009.</p></div>
  <div className='pt-10'><p>Need help with your existing account?</p><p className='text-sky-600 font-semibold'>Visit our Help Center</p></div>
  <div className='pt-10'><p>Want helpful buisness insights</p><p className='text-sky-600 font-semibold '>Visit our buisness resource center</p></div>
</div>

    </div>

    </section>
    

    
  )
}
