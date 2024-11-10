import React from 'react'
import Button from './btn'
import Image from 'next/image'

function About() {
    return (
        <main className=' max-w-screen-xl mx-auto  flex lg:flex-row flex-col justify-between items-center h-full mt-12 pb-12 '>

            {/* image section */}
            <section className='text-center p-5'>
              
              <Image className='rounded-3xl ' src={'/images/about.jpeg'} alt='beautifull girl image' width={500} height={500} loading='lazy'/>

            </section>

            {/*Content section  */}
            <section className='text-center basis-1/2 lg:pr-12 p-8'>
                <h1 className='text-3xl font-bold text-pink-600'>About Me</h1>
                <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quasi nostrum,
                    recusandae tempora aliquid aperiam ipsa accusantium reprehenderit similique odio eveniet,
                    repellat quibusdam adipisci cum quas labore. Exercitationem, odit repellendus? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Voluptas velit optio deleniti aliquam explicabo
                    beatae? Enim, accusantium quam incidunt fugit vitae magnam quibusdam temporibus asperiores,
                    officia, quos error quia labore!</p>
                <div className='mt-5'>
                    <Button text='Shop Now' />
                </div>
            </section>
        </main>
    )
}

export default About