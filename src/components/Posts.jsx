import React from 'react';

function Posts({ bgColor }) {
    return (
        <div className={`bg-offWhite hover:bg-cream h-40 w-full mt-3`}>
            <p className='p-4 font-semibold text-lightGrey pl-8'>
                By <span className='text-secondary'>John Doe </span>| Aug 23, 2021
            </p>
            <h3 className='text-xl font-bold pl-8'>
                8 Figma design systems that <br /> 
                you can download for free <br /> 
                today.
            </h3>
        </div>
    );
}

export default Posts;
