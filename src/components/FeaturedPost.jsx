import React from 'react';
import whiteBuilding from './../assets/Client-First - IMAGES/white-concrete-building-1838640.svg';
import Posts from './Posts';

function FeaturedPost() {
  return (
    <section className="featured-post container mx-auto py-8 md:py-16 px-4">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 ml-4 mr-4 md:ml-16 md:mr-16 mb-8">

        {/* Featured Post */}
        <div className="featured-post">
          <h2 className='heading text-2xl md:text-4xl text-primary'>Featured Post</h2>
          <div className='p-4 md:p-8 mt-4 md:mt-8 bg-white shadow-lg overflow-hidden'>
            <img
              src={whiteBuilding} // Replace with your image source
              alt="Featured Post"
              className="w-full h-48 md:h-80 object-cover"
            />
            <div className="mt-4">
              <p className='font-semibold text-lightGrey text-sm md:text-base'>
                By <span className='text-secondary'>John Doe </span>| Aug 23, 2021
              </p>
              <h3 className="text-lg md:text-[22px] font-bold mb-2 md:mb-4 mt-2 md:mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </h3>
              <p className="text-gray-600 mb-2 md:mb-4 text-sm md:text-base">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <button className='mt-4 border bg-accent text-primary p-2 md:p-3 font-bold w-full md:w-48 text-base'>
                Read More {'>'}
              </button>
            </div>
          </div>
        </div>

        {/* All Posts */}
        <div>
          <div className='flex  md:flex-row justify-between mb-4'>
            <h2 className="heading font-bold text-xl md:text-3xl mb-2">All Posts</h2>
            <div className="text-right  md:mt-4">
              <a href="#" className="text-secondary font-medium hover:underline">
                View All
              </a>
            </div>
          </div>
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>
      </div>
    </section>
  );
}

export default FeaturedPost;
