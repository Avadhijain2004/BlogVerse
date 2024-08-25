import React from 'react';
import img from './../assets/Client-First - IMAGES/Image.svg'

// Dummy data for testimonials
const testimonial = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  name: "Jonathan Vallem",
  location: "New York, USA",
  image: img, // Replace with actual image path
};

const TestimonialsSection = () => {
  return (
    <div className="py-28 bg-cream mr-16 ml-16 ">
      <div className="max-w-4xl flex flex-cols-2 items-center justify-center mx-auto">
        <div className="flex items-center justify-between">
          <div className=''>
            <h2 className="text-base font-bold text-primary mb-6 tracking-widest">TESTIMONIALS</h2>
            <h3 className="text-3xl font-bold text-primary mb-4 font-heading">What people say <br /> about our blog</h3>
            <p className="text-sm text-primary">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>
          <div className="w-1/2 border-l pl-16 border-gray-400">
            <p className="text-xl font-bold text-primary mb-4">{testimonial.text}</p>
            <div className="flex items-center mt-20">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4">
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-sm text-lightGrey">{testimonial.location}</p>
              </div>
              <div className="flex ml-16">
              <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center mr-4">
              <p className=" text-primary text-3xl text-center">←</p>
              </button>
              <button className="w-16 h-16 rounded-full bg-primary shadow-md flex items-center justify-center">
                <p className=" text-offWhite text-4xl text-center">→</p>
              </button>
            </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

const JoinTeamSection = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-heading font-bold text-primary mb-4 leading-tight">Join our team to be a part <br /> of our story</h2>
        <p className="text-base text-lightGrey mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt.
        </p>
        <button className="bg-accent text-primary font-bold py-3 px-8 shadow-md hover:bg-yellow-500 transition duration-300">
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
