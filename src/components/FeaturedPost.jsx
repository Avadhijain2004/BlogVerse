import React from 'react';
import whiteBuilding from './../assets/Client-First - IMAGES/white-concrete-building-1838640.svg'
import Posts from './Posts';

function FeaturedPost() {
  return (
    <section className="featured-post container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 ml-16 mr-16 mb-8">

        {/* Featured Post */}
        <div className="featured-post">
          <h2 className='heading'>Featured Post</h2>
          <div className='p-8 mt-8  bg-white shadow-lg overflow-hidden'>
            <img
              src={whiteBuilding} // Replace with your image source
              alt="Featured Post"
              className="w-full h-80 object-cover"
            />
            <div className="mt-4">
              <p className='font-semibold text-lightGrey'>
                By <span className='text-secondary'>John Doe </span>| Aug 23, 2021
              </p>
              <h3 className="text-[22px] font-bold mb-4 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </h3>
              <p className="text-gray-600 mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <button className='mt-4 border bg-accent text-primary p-3 font-bold w-48 pl-8 pr-8 text-lg'>Read More {'>'}</button>
            </div>
          </div>
        </div>

        {/* All Posts */}
        <div>
          <div className='flex flex-row-4 gap-36'>
            <div className="all-posts">
              <h2 className="heading font-bold mb-4">All Posts</h2>

            </div>
            <div></div>
            <div></div>
            <div className="text-right mt-4">
              <a href="#" className="text-secondary font-medium hover:underline">
                View All
              </a>
            </div>
          </div>
          <Posts />
          <Posts bgColor="bg-cream" />
          <Posts />
          <Posts />
        </div>


      </div>
    </section>
  );
}

export default FeaturedPost;
