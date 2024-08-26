import React from 'react';
import logo1 from './../assets/Client-First - IMAGES/Logo 1.svg';
import logo2 from './../assets/Client-First - IMAGES/Logo 2.svg';
import logo3 from './../assets/Client-First - IMAGES/Logo 3.svg';
import logo4 from './../assets/Client-First - IMAGES/Logo 4.svg';
import logo5 from './../assets/Client-First - IMAGES/Logo 5.svg';

const FeaturedIn = () => {
  return (
    <div className="md:ml-20 md:mr-16 mb-12 px-4 md:px-0">
      <h4 className="text-lg text-lightGrey text-center md:text-left">We are</h4>
      <div className="md:flex md:items-center md:justify-start">
        <h2 className="md:mr-24 text-2xl md:text-3xl text-center md:text-left text-primary font-bold mb-6 md:mb-0">Featured In</h2>
        <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12">
          <img src={logo1} alt="Logo 1" className="h-8 md:h-10" />
          <img src={logo2} alt="Logo 2" className="h-8 md:h-10" />
          <img src={logo3} alt="Logo 3" className="h-8 md:h-10" />
          <img src={logo4} alt="Logo 4" className="h-8 md:h-10" />
          <img src={logo5} alt="Logo 5" className="h-8 md:h-10" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
