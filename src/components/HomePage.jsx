import React from 'react';
import img from './../assets/Client-First - IMAGES/Image.svg';

// Dummy data for testimonials
const testimonial = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  name: "Jonathan Vallem",
  location: "New York, USA",
  image: img, // Replace with actual image path
};

const TestimonialsSection = () => {
  return (
    <div className="py-16 md:py-28 bg-cream px-4 md:px-16 md:mr-16 md:ml-16 mr-4 ml-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="">
          <h2 className="text-sm md:text-base font-bold text-primary mb-4 md:mb-6 tracking-widest">TESTIMONIALS</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-heading">What people say <br className="hidden md:block" /> about our blog</h3>
          <p className="text-sm md:text-base text-primary">
            Lorem ipsum dolor sit amet, consectetur <br className="hidden md:block" /> adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>
        <div className="md:border-l md:pl-16 border-gray-400">
          <p className="text-lg md:text-xl font-bold text-primary mb-4">{testimonial.text}</p>
          <div className="flex items-center mt-8 md:mt-20">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full"
            />
            <div className="ml-4">
              <p className="font-bold text-primary">{testimonial.name}</p>
              <p className="text-sm text-lightGrey">{testimonial.location}</p>
            </div>
            <div className="flex ml-auto mt-4 md:mt-0">
              <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-md flex items-center justify-center mr-2 md:mr-4">
                <p className="text-primary text-xl md:text-3xl">←</p>
              </button>
              <button className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary shadow-md flex items-center justify-center">
                <p className="text-offWhite text-2xl md:text-4xl">→</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const JoinTeamSection = () => {
  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-2xl md:text-4xl font-heading font-bold text-primary mb-4 md:leading-tight">Join our team to be a part <br className="hidden md:block" /> of our story</h2>
        <p className="text-sm md:text-base text-lightGrey mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing <br className="hidden md:block" /> elit, sed do eiusmod tempor incididunt.
        </p>
        <button className="bg-accent text-primary font-bold py-3 px-6 md:px-8 shadow-md hover:bg-yellow-500 transition duration-300">
          Join Now
        </button>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      <TestimonialsSection />
      <JoinTeamSection />
    </div>
  );
};

export default HomePage;
