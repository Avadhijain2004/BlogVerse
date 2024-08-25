import React from 'react';

// Dummy data for testimonials
const testimonial = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  name: "Jonathan Vallem",
  location: "New York, USA",
  image: "path_to_jonathan_image", // Replace with actual image path
};

const TestimonialsSection = () => {
  return (
    <div className="py-16 bg-cream mr-16 ml-16">
      <div className="max-w-4xl px-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-primary mb-2">TESTIMONIALS</h2>
            <h3 className="text-3xl font-bold text-dark mb-4">What people say about our blog</h3>
            <p className="text-base text-darkGrey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>
          <div className="w-1/2 pl-8">
            <p className="text-lg font-medium text-dark mb-4">{testimonial.text}</p>
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4">
                <p className="font-bold text-dark">{testimonial.name}</p>
                <p className="text-sm text-darkGrey">{testimonial.location}</p>
              </div>
            </div>
            <div className="flex mt-4">
              <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center mr-2">
                <i className="fas fa-arrow-left text-dark"></i>
              </button>
              <button className="w-10 h-10 rounded-full bg-dark shadow-md flex items-center justify-center">
                <i className="fas fa-arrow-right text-white"></i>
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
