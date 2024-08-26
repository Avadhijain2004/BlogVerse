import React from 'react';
import backgroundImage from './../assets/Client-First - IMAGES/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.svg';
import { Link } from 'react-router-dom';

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
      className="flex items-center"
    >
      <div className='text-offWhite p-6 md:ml-16'>
        <p className='mt-12 md:mt-0 font-body tracking-widest text-sm md:text-lg'>
          POSTED ON <span className='font-bold font-heading'>STARTUP</span>
        </p>
        <h2 className='text-[32px] md:text-[56px] mt-4 md:mt-8 font-semibold tracking-wide leading-tight text-light'>
          Step-by-step guide to choosing <br className="hidden md:block" /> great font pairs
        </h2>
        <p className='mt-4 md:mt-6 text-sm md:text-base font-body tracking-wide'>
          By <span className='text-accent'>James West</span> | May 23, 2022
        </p>
        <p className='mt-4 md:mt-6 text-sm md:text-base font-body tracking-wider leading-6 md:leading-7'>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br className="hidden md:block" /> fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident.
        </p>
        <Link to='/blog'>
          <button className='mt-8 md:mt-12 bg-accent text-primary p-3 font-bold w-full md:w-48 text-base md:text-lg'>
            Read More {'>'}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroContent;
