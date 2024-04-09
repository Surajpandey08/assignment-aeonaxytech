import React from 'react'

export const Footer = () => {
  return (
   <section>
    <div className='mx-10'>
        <div>
            <img className='w-32' src="https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/pp_fc_hl.svg" alt="" />
        </div>
    </div>
    <div className='flex justify-between px-2 pt-8 pb-4 border-b-2'>
        <div className='md:px-8 px-2  flex  flex-wrap justify-evenly text-xs font-normal gap-2 md:gap-4 md:text-sm md:font-semibold text-blue-950'>
            <a href="/">Help</a>
            <a href="/">Contact</a>
            <a href="/">Fees</a>
            <a href="/">Security</a>
            <a href="/">Apps</a>
            <a href="/">Shop</a>
            <a href="/">Enterprise</a>
            <a href="/">Partners</a>
            <a href="/">Feedback</a>
        </div>
        <div>
            <img className='w-8 flex-wrap md:block hidden' src="https://png.pngtree.com/png-vector/20210129/ourmid/pngtree-the-national-flag-of-india-png-image_2845292.jpg" alt="" />
        </div>
    </div>
    <div className='flex flex-col md:flex-row justify-between px-2 pt-4 pb-6 border-b-2'>
        <div className='md:px-8 px-1  flex flex-wrap justify-evenly text-xs font-normal gap-2 md:gap-4 md:text-sm md:font-semibold text-blue-950'>
            <a href="/">About</a>
            <a href="/">Newsroom</a>
            <a href="/">Investor Relations</a>
            <a href="/">values</a>
            <a href="/">Public Policy</a>
            <a href="/">Sitemap</a>
            
        </div>
        <div className=' md:py py-2  md:px-8 px-1  flex flex-wrap justify-evenly text-xs font-normal gap-2 md:gap-4 md:text-sm md:font-semibold text-blue-950'>
            <a href="/" className='text-xs font-medium text-gray-600'>©1999-2024</a>
            <a href="/">Accessibilty</a>
            <a href="/">Privacy</a>
            <a href="/">Cookies</a>
            <a href="/">Legal</a>
        </div>
    </div>
   </section>
  )
}
