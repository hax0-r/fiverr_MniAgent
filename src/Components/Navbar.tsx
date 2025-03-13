import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { IoClose } from 'react-icons/io5';
import { NavLink } from 'react-router'

const Navbar = () => {

  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <div className='max-w-7xl w-full mx-auto p-5 flex items-center justify-between'>
        <img src="Assets/logo.png" alt="logo" className='md:h-12 h-9' />
        <ul className='md:flex hidden items-center space-x-10'>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/features "}>Features</NavLink></li>
          <li><NavLink to={"/About-us"}>About Us</NavLink></li>
          <li><NavLink to={"/faq"}>FAQ</NavLink></li>
          <li><NavLink to={"/contact-us"}>Contact us</NavLink></li>
        </ul>
        <FaBars onClick={() => setNavbar(true)} className='text-xl text-gray-900 md:hidden cursor-pointer' />
        <button className='bg-[#004aad]  md:block hidden text-white px-7 py-3 font-medium cursor-pointer transition-all duration-500 hover:bg-[#004aad]/80 rounded-lg'>Started free</button>
      </div>

      {/* responsive navbar */}

      <div className={`fixed bg-white overflow-hidden transition-all duration-500 top-0 ${navbar ? "w-full" : "w-0"} left-0 z-50`}>
        <div className=" w-full px-10 relative pt-6 min-h-screen">
          <IoClose onClick={() => setNavbar(false)} className='absolute top-6 right-7 text-3xl' />
          <img src="Assets/logo.png" alt="logo" className='h-12' />
          <ul className='flex mt-8 flex-col space-y-7'>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/features "}>Features</NavLink></li>
            <li><NavLink className="text-nowrap" to={"/About-us"}>About Us</NavLink></li>
            <li><NavLink to={"/faq"}>FAQ</NavLink></li>
            <li><NavLink className="text-nowrap" to={"/contact-us"}>Contact us</NavLink></li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default Navbar