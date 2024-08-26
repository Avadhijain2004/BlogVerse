import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from './../../assets/Client-First - IMAGES/Logo.svg';

function Footer() {
  return (
    <footer className="footer bg-primary text-offWhite py-14 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Logo Section */}
          <div className="footer-logo mb-8 md:mb-14">
            <img className='ml-0 md:ml-12' src={logo} alt="Logo" />
          </div>
          
          {/* Navigation Links */}
          <div className="footer-links mb-8 md:mb-14 md:mr-16">
            <ul className="flex flex-col md:flex-row gap-4">
              <li>
                <NavLink to="/home" className="hover:text-yellow-500">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="hover:text-yellow-500">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" className="hover:text-yellow-500">
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-yellow-500">
                  Contact us
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy-policy" className="hover:text-yellow-500">
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Subscription Section */}
        <div className="footer-subscription flex flex-col md:flex-row mb-6 items-start md:items-center font-body bg-[#282b3f] p-6 md:h-60 ml-0 md:ml-14 mr-0 md:mr-16">
          <p className="text-[24px] md:text-[34px] font-semibold font-body mb-4 md:mb-0 md:mr-44 md:ml-16 leading-[32px] md:leading-[48px] text-neutral-100">
            Subscribe to our newsletter to get latest updates and news
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-3 text-offWhite bg-[#282b3f] border-gray-600 border w-full md:w-[360px]"
            />
            <Link to='/'>
              <button className="bg-accent text-black py-3 px-6 font-semibold w-full md:w-40">
                Subscribe
              </button>
            </Link>
          </div>
        </div>

        <div className="footer-bottom mt-8 md:mt-12 flex flex-col md:flex-row justify-between items-center text-gray-400 mx-0 md:mx-16 gap-4 md:gap-0">
          <p>Finstreet 118 2561 Fintown</p>
          
          <div className="footer-socials flex gap-6">
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
        <p className='text-center md:text-left text-gray-400 mx-0 md:mx-16 mt-4'>Hello@finsweet.com | 020 7993 2905</p>
      </div>
    </footer>
  );
}

export default Footer;
