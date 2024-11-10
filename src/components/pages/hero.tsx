import React from 'react'
import Button from './btn'

function Hero() {
  return (
    <div>
      <section className='bg-bannerImg  md:bg-contain bg-repeat bg-center lg:bg-cover md:bg-bottom '>

        <div className='w-full h-screen flex items-end bg-black_overlay  '>

          <div className=' container mx-auto mb-40 flex flex-col items-center '>

            {/* heading */}
            <h1 className='text-white uppercase font-bold text-4xl text-center px-6 py-3 transition-all inline-block hover:scale-105'>New Collection
              <br />
              For Everyone</h1>

            <p className=' text-white w-full max-w-2xl my-8 text-center px-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati magnam hic
              fugit officia. Soluta delectus aliquam maiores necessitatibus, eum perspiciatis hic
              mollitia illo, molestiae illum molestias pariatur voluptatibus consequuntur
              asperiores?</p>
             
             
              <div className='mt-3'>

              <Button text ="Learn More"/>
              </div>
             

          </div>

        </div>

      </section>
    </div>
  )
}

export default Hero