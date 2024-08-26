import React from 'react';

function AboutSection() {
  return (
    <div>
      <div className="relative bg-white p-2 mx-4 md:mx-16">
        {/* Colored Bar */}
        <div className="absolute top-0 left-0 w-full h-6 flex">
          <div className="bg-white w-[15%] h-full"></div>
          <div className="bg-accent w-[70%] h-full"></div>
          <div className="bg-secondary w-[15%] h-full"></div>
        </div>
      </div>

      <div className="bg-offWhite py-8 md:py-10 mx-4 md:mx-16">
        <div className="container mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-10">
          {/* About Us Section */}
          <div className="relative p-6 md:p-10 md:pr-6 md:pl-24 w-full md:w-1/2">
            <h3 className="text-base md:text-lg font-bold text-primary mb-4 tracking-widest">ABOUT US</h3>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight heading">
              We are a community of content writers who share their learnings
            </h2>
            <p className="text-sm md:text-base text-lightGrey mb-6 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="text-secondary font-bold text-base md:text-lg">
              Read More &gt;
            </a>
          </div>

          {/* Our Mission Section */}
          <div className="relative w-full md:w-1/2 p-6 md:p-10 md:pl-6 md:pr-28">
            <h3 className="text-sm md:text-base font-semibold text-primary mb-4 tracking-widest">OUR MISSION</h3>
            <h2 className="text-xl md:text-3xl font-semibold font-body text-primary heading mb-6 leading-tight">
              Creating valuable content for creatives all around the world
            </h2>
            <p className="text-sm md:text-base text-lightGrey mb-8 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
