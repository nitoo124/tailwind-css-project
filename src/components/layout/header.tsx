'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoClose } from "react-icons/io5";



function Header() {

  const[OpenMenu, setOpenMenu] = useState(false)

  const ToggleMenu =()=>{

    setOpenMenu(!OpenMenu)

  }
  return (
    <header className='sticky top-0'>
        <div className='flex justify-between py-4  bg-white '>
            {/* logo */}
              <div className='ml-12'>
                <h2 className='font-bold text-3xl text-zinc-500'><span className='text-pink-600'>N</span>itoo.</h2>
              </div>
              {/* navbar */}
              <nav className='hidden md:block mr-12  text-lg font-semibold '>
                <ul className='flex gap-12 text-zinc-500'>
                    <Link href='/'><li className='p-2 hover:text-pink-600 rounded-lg'>Home</li></Link>
                    <Link href='/about'><li className=' p-2 hover:text-pink-600 rounded-lg'>About</li></Link>
                    <Link href='/shop'><li className='mt-2  hover:text-pink-600'>Shop</li></Link>
                    <Link href='/contact'><li className=' p-2 hover:text-pink-600 rounded-lg'>Contact</li></Link>
                </ul>
              </nav>
               
               {/* mob button */}
               <button className='md:hidden mr-5' onClick={ToggleMenu}> {OpenMenu ? <IoClose  size={30}/>:<AiOutlineMenuUnfold  size={30}/>}</button>
        
        </div>

        {/* mob navbar */}
        <nav className={` w-full fixed left-0  md:hidden text-center  ${OpenMenu ? 'block' : 'hidden'}`}>
                <ul className='   flex-col py-10  bg-pink-600 gap-x-12 text-white text-lg font-bold  '>
                    <Link href='/'><li className='mt-6  hover:text-zinc-300 '>Home</li></Link>
                    <Link href='/about'><li className='mt-6  hover:text-zinc-300 '>About</li></Link>
                    <Link href='/shop'><li className='mt-6 hover:text-gray-300 '>Shop</li></Link>
                    <Link href='/contact'><li className='mt-6  hover:text-zinc-300 '>Contact</li></Link>
                </ul>
              </nav>
    </header>
  )
}

export default Header