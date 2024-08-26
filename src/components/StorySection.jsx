import React from 'react';
import friends from './../assets/Client-First - IMAGES/close-up-photography-of-man-wearing-sunglasses-1212984.svg';

const StorySection = () => {
    return (
        <section className='px-4 md:px-16'>
            <div className="flex flex-col md:flex-row items-center bg-cream p-6 md:p-12">
                {/* Image Section */}
                <div className="md:w-1/2 w-full">
                    <img
                        src={friends}
                        alt="Group of friends by the water"
                        className="shadow-lg w-full"
                    />
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 mt-6 md:mt-0 md:ml-10 bg-white p-6 md:p-12">
                    <h4 className="text-xs md:text-sm text-primary uppercase mb-4 md:mb-6 font-bold tracking-widest">
                        Why we started
                    </h4>
                    <h2 className="text-3xl md:text-[42px] font-bold text-gray-900 mb-4 text-left tracking-wide leading-tight font-heading">
                        It started out as a simple idea and evolved into our passion
                    </h2>
                    <p className="text-gray-600 mb-6 text-sm md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                    </p>
                    <a
                        href="#"
                        className="inline-block bg-accent text-primary font-bold py-2 md:py-3 px-4 md:px-6 shadow-md hover:bg-yellow-600 transition-colors duration-300 text-sm md:text-base"
                    >
                        Discover our story &gt;
                    </a>
                </div>
            </div>
        </section>
    );
}

export default StorySection;
