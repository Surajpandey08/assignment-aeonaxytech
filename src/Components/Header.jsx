import React from 'react'
import logo from "../img/paypal.png"
import { FaBars } from "react-icons/fa";

export const Header = () => {
  return (
    <header className='p-5 flex justify-between sm:flex border-b  '>
        <div className='flex gap-16 items-center'>

        <div className='size-10 '>
            <img src={logo} alt="" />
        </div>
        <div className='hidden space-x-10   md:block'>
            <a href="/">Personal</a>
            <a href="/">Buisness</a>
            <a href="/">Developer</a>
            <a href="/">Help</a>
        </div>

        </div>

        <div className='flex gap-4 justify-between align-middle'>
        
        <button type="button" class="  text-xs py-1 px-4 h-10  font-normal sm:py-1 sm:px-9 sm:font-medium text-indigo-950 focus:outline-none bg-transparent rounded-full border-2 border-indigo-950 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Log In</button>
        <button type="button" class="  text-xs py-1 px-4 sm:text-sm sm:py-1 sm:px-9 h-10 font-normal  sm:font-medium  text-white focus:outline-none bg-indigo-950 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Sign Up</button>
        <button className='text-indigo-950 text-4xl md:hidden '><FaBars /></button>
        </div>

        
        
    </header>
  )
}
