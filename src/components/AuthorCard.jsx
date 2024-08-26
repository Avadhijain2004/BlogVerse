import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import img01 from './../assets/Client-First - IMAGES/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.svg';
import img04 from './../assets/Client-First - IMAGES/content-baker-with-delicious-puff-in-cafeteria-6205509.svg';
import img03 from './../assets/Client-First - IMAGES/fashion-woman-cute-shoes-5704849.svg';
import img02 from './../assets/Client-First - IMAGES/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg';

const authors = [
  {
    name: "Floyd Miles",
    title: "Content Writer @Company",
    image: img01, 
    bgColor: "bg-offWhite",
  },
  {
    name: "Dianne Russell",
    title: "Content Writer @Company",
    image: img02,
    bgColor: "bg-cream",
  },
  {
    name: "Jenny Wilson",
    title: "Content Writer @Company",
    image: img03, 
    bgColor: "bg-offWhite",
  },
  {
    name: "Leslie Alexander",
    title: "Content Writer @Company",
    image: img04, 
    bgColor: "bg-offWhite",
  },
];

const AuthorCard = () => {
  return (
    <div className="text-center py-12 px-4 md:py-24 md:px-16">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10 heading text-primary font-heading">List of Authors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {authors.map((author, index) => (
          <Link to='/author' key={index}>
            <div
              className={`p-6 border bg-offWhite hover:bg-cream shadow-md transition-colors duration-300 text-center h-72`}
            >
              <img className="w-24 h-24 mx-auto rounded-full" src={author.image} alt={author.name} />
              <h3 className="text-xl md:text-2xl font-bold mb-2 mt-4">{author.name}</h3>
              <p className="text-sm md:text-base text-lightGrey mb-4">{author.title}</p>
              <div className="flex gap-4 items-center justify-center">
                <a href="#" className="hover:text-yellow-500">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-yellow-500">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-yellow-500">
                  <FaInstagram />
                </a>
                <a href="#" className="hover:text-yellow-500">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AuthorCard;
