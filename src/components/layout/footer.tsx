import React from 'react'
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFacebook, FaPhoneAlt   } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



function Footer() {
    return (
        <footer className='bg-zinc-500 p-12  text-white '>
           
           <main className='  flex md:flex-row flex-col md:justify-between  items-center '>
            {/* section1 for content */}
            <section className=' my-5'>

            <h2 className='font-bold text-3xl text-center  '><span className='text-pink-600'>N</span>itoo.</h2>
            <div className='flex gap-5 mt-5 text-2xl '>
                <FaGithub />
                <FaLinkedin />
                <FaFacebook  />
            </div>



            </section>

            {/* section2 for links */}
            <section className=' mt-5 text-center'>

                <h3 className='text-lg font-semibold text-center' >Links</h3>

                <ul className='text-sm mt-3'>
                    <Link href='/'><li className='mt-2 text-gray-200 hover:text-pink-600'>Home</li></Link>
                    <Link href='/about'><li className='mt-2 text-gray-200 hover:text-pink-600'>About</li></Link>
                    <Link href='/shop'><li className='mt-2 text-gray-200 hover:text-pink-600'>Shop</li></Link>
                    <Link href='/contact'><li className='mt-2 text-gray-200 hover:text-pink-600'>Contact</li></Link>
                </ul>

            </section>

            {/* section3 for contact info */}
            <section className=' mt-5'>
                <h3 className='text-lg font-semibold text-center'>Have a Question?</h3>
                 
                 {/* email */}
                <div className='mt-4 flex gap-3 text-gray-200 '>
                    <MdEmail size={25}/>
                    <p className='text-sm hover:text-pink-600'>example@gmail.com</p>
                </div>
                
                {/* phone */}
                <div className='mt-4 flex gap-3 text-gray-200'>
                    <FaPhoneAlt size={23}/>
                    <p className='text-sm hover:text-pink-600'>0133456789</p>

                </div>
                

            </section>
            </main>

            <hr className='mt-5 w-full' />
            <p className='text-center mt-5'>copyright © Designed by Nitoo Kumari</p>

            


        </footer>

    )
}

export default Footer