import React from 'react';

function Posts({ bgColor }) {
  return (
    <div className={`bg-offWhite hover:bg-cream h-auto md:h-40 p-4 md:p-8 mt-3`}>
      <p className='font-semibold text-lightGrey text-sm md:text-base'>
        By <span className='text-secondary'>John Doe </span>| Aug 23, 2021
      </p>
      <h3 className='text-lg md:text-xl font-bold mt-2 md:mt-3'>
        8 Figma design systems that <br className="hidden md:block" /> 
        you can download for free <br className="hidden md:block" /> 
        today.
      </h3>
    </div>
  );
}

export default Posts;
