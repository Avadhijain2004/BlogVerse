import React from 'react';
import friends from './../assets/Client-First - IMAGES/close-up-photography-of-man-wearing-sunglasses-1212984.svg'

const StorySection = () => {
  return (
    <section className='mr-16 ml-16'>
        <div className="flex flex-col md:flex-row items-center bg-light p-6 md:p-12">
      <div className="md:w-1/2">
        <img 
          src={friends} 
          alt="Group of friends by the water" 
          className="shadow-lg w-full h-auto"
        />
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 md:ml-10 overflow">
        <h4 className="text-sm text-gray-600 uppercase mb-2">Why we started</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          It started out as a simple idea and evolved into our passion
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        <a 
          href="#"
          className="inline-block bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300"
        >
          Discover our story &gt;
        </a>
      </div>
    </div>
    </section>
  );
}

export default StorySection;
