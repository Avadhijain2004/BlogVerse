import React from 'react'
import backgroundImage from './../assets/Client-First - IMAGES/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.svg';

function HeroContent() {
    return (
        <div
        style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0,0.5)), url(${backgroundImage})`,
            backgroundSize: 'cover', 
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
        }}
      > 
        {/* Your content here */}
        
        <div className='ml-16 text-offWhite'>
        <p className='text-gray-700'>.</p>
        <p className='mt-20 font-body tracking-widest text-lg'>POSTED ON <span className='font-bold font-heading tracking-widest'>STARTUP</span></p>
        <h2 className='text-[56px] mt-8 font-semibold tracking-wide leading-tight text-light heading '>Step-by-step guide to choosing <br /> great font pairs</h2>
        <p className='mt-6 text-base font-body tracking-wide'>By <span className='text-accent'>James West</span> | May 23, 2022</p>
        <p className='mt-6 font-body text-base tracking-wider leading-7 font-thin'>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident.
        </p>
        <button className='mt-12 border bg-accent text-primary p-3 font-bold w-48 pl-8 pr-8 text-lg'>Read More {'>'}</button>
        </div>
      
      </div>
    )
}

export default HeroContent
