import React from 'react';
import { NavLink , Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import img01 from './../assets/Client-First - IMAGES/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.svg'
import img04 from './../assets/Client-First - IMAGES/content-baker-with-delicious-puff-in-cafeteria-6205509.svg'
import img03 from './../assets/Client-First - IMAGES/fashion-woman-cute-shoes-5704849.svg'
import img02 from './../assets/Client-First - IMAGES/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg'

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
    <div className="text-center py-24 mr-16 ml-16">
      <h2 className="text-4xl font-bold mb-6 heading text-primary font-heading">List of Authors</h2>
      <div className="flex justify-center space-x-8">
        {authors.map((author, index) => (
          <div
            key={index}
            className={`w-64 h-72 p-6 border ${author.bgColor} shadow-md transition-colors duration-300`}
          >
            <img className="w-24 h-24 mx-auto rounded-full" src={author.image} alt={author.name} />
            <h3 className="text-2xl font-bold mb-2 mt-4">{author.name}</h3>
            <p className="text-lightGrey text-base mb-4">{author.title}</p>
            <div className="footer-socials flex gap-6 items-center justify-center">
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
        ))}
      </div>
    </div>
  );
};

export default AuthorCard;
