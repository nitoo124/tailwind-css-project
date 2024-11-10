import React from 'react'
import Image from 'next/image'
import Button from './btn'



function Shop() {
    return (
        <div className='  lg:px-12 p-4 max-w-screen-2xl mx-auto mt-6 ' id='shop'>
            <div className=' shadow-3xl rounded-xl'>

              {/* heading */}
              <h2 className='  text-3xl text-pink-600 font-bold mt-10 text-center p-5'>Shop</h2>
              <p className=' mt-5 lg:line-clamp-none line-clamp-3 text-center px-10 lg:px-[200px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, expedita hic
                            facere voluptas esse, voluptatem saepe ut id sapiente, quibusdam commod psum dolor sit amet consectetur adipisicing elit. Quos, expedita hic
                            facere voluptas esse, voluptatem saepe ut id sapiente, quibusd 
                           </p>
                <div className=' grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 justify-between items-center gap-10 p-10'>
                  
                  {/* product 1 */}

                  <div className=' flex flex-col items-center  rounded-2xl shadow-3xl p-5 text-center hover:bg-gray-400 duration-1000'>
                    <Image className='rounded-2xl ' src={'/images/product1.webp'} alt='Fancy T-shirt' 
                    width={300} height={300} loading='lazy'/>
                    <h3 className='mt-3 text-xl font-bold'>T-shirt</h3>
                      <p className=' text-lg font-semibold'>price: $15</p>
                     <div className=' mt-2'>
                     <Button text='Add to cart'/>
                     </div>
                  </div>
                
                       {/* product 2 */}

                       <div className=' flex flex-col items-center rounded-2xl shadow-3xl p-6 text-center hover:bg-gray-400 duration-1000'>
                    <Image className='rounded-2xl' src={'/images/product2.webp'} alt='Fancy Hoodie' 
                    width={300} height={300} loading='lazy'/>
                    <h3 className='mt-3 text-xl font-bold'>Hoodie</h3>
                      <p className=' text-lg font-semibold'>price: $35</p>
                     <div className=' mt-2'>
                     <Button text='Add to cart'/>
                     </div>
                  </div>

                        {/* product 3 */}

                        <div className=' flex flex-col items-center rounded-2xl shadow-3xl p-5 text-center hover:bg-gray-400 duration-1000'>
                    <Image className='rounded-2xl' src={'/images/product3.jpeg'} alt='Frock' 
                    width={300} height={300} loading='lazy'/>
                    <h3 className='mt-3 text-xl font-bold'>Frock</h3>
                      <p className=' text-lg font-semibold'>price: $25</p>
                     <div className=' mt-2'>
                     <Button text='Add to cart'/>
                     </div>
                  </div>

                         {/* product 4 */}

                         <div className=' flex flex-col items-center rounded-2xl shadow-3xl p-5 text-center hover:bg-gray-400 duration-1000'>
                    <Image className='rounded-2xl' src='/images/product4.webp' alt='Stylish western dress' 
                    width={300} height={300} loading='lazy'/>
                    <h3 className='mt-3 text-xl font-bold'>Stylish western dress</h3>
                      <p className=' text-lg font-semibold'>price: $50</p>
                     <div className=' mt-2'>
                     <Button text='Add to cart'/>
                     </div>
                  </div>
     {/* product 5 */}

     <div className=' flex flex-col items-center rounded-2xl shadow-3xl p-5 text-center hover:bg-gray-400 duration-1000'>
     <Image className='rounded-2xl' src={'/images/product5.webp'} alt='Fancy CropTop' 
     width={300} height={300} loading='lazy'/>
     <h3 className='mt-3 text-xl font-bold'>Stylish Crop TOP</h3>
       <p className=' text-lg font-semibold'>price: $10</p>
      <div className=' mt-2'>
      <Button text='Add to cart'/>
      </div>
   </div>

       {/* product 6 */}

       <div className=' flex flex-col items-center rounded-2xl shadow-3xl p-5 text-center hover:bg-gray-400 duration-1000'>
     <Image className='rounded-2xl' src='/images/product6.jpeg' alt='Mom jeans' 
     width={300} height={300} loading='lazy'/>
     <h3 className='mt-3 text-xl font-bold'>Mom jeans</h3>
       <p className=' text-lg font-semibold'>price: $00</p>
      <div className=' mt-2'>
      <Button text='Add to cart'/>
      </div>
   </div>

       {/* product 7 */}
 <div className=' flex flex-col items-center rounded-2xl shadow-3xl p-5 text-center hover:bg-gray-400 duration-1000'>
     <Image className='rounded-2xl' src='/images/product7.jpeg' alt='Fancy long shirt' 
     width={300} height={300} loading='lazy'/>
     <h3 className='mt-3 text-xl font-bold'>Stylish long shirt</h3>
       <p className=' text-lg font-semibold'>price: $20</p>
      <div className=' mt-2'>
      <Button text='Add to cart'/>
      </div>
   </div> 

       {/* product 8 */}
 <div className=' flex flex-col items-center rounded-2xl shadow-3xl p-5 text-center hover:bg-gray-400 duration-1000'>
     <Image className='rounded-2xl' src={'/images/product8.jpeg'} alt='Fancy scarf' 
     width={300} height={300} loading='lazy'/>
     <h3 className='mt-3 text-xl font-bold'>stylish trouser</h3>
       <p className=' text-lg font-semibold'>price: $15</p>
      <div className=' mt-2'>
      <Button text='Add to cart'/>
      </div>
   </div> 


                </div>
                <div className=' py-10 text-center w-full'><Button text = 'See more'/></div>
            </div>

        </div>
    )
}

export default Shop
  
