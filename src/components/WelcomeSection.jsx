import React from "react";
import author from './../assets/Client-First - IMAGES/close-up-photography-of-man-wearing-sunglasses-1212984 (2).svg';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const WelcomeSection = () => {
    return (
        <div>
            <div className="p-8 md:p-24 md:pl-40 md:pr-40 bg-offWhite flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/5 mb-8 md:mb-0">
                    <img
                        src={author}
                        alt="Andrew Johnson"
                        className="w-40 md:w-60 mx-auto md:mx-0"
                    />
                </div>
                <div className="w-full md:w-4/5 md:ml-10 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6 md:mb-8 leading-tight">
                        Hey there, I’m Andrew Johnson <br className="hidden md:block" /> and welcome to my Blog
                    </h1>
                    <p className="text-sm md:text-base text-lightGrey mb-4 leading-6 md:leading-7">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, in! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, architecto.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4 text-gray-500">
                        <a href="#" className="hover:text-gray-700"><FaFacebookF /></a>
                        <a href="#" className="hover:text-gray-700"><FaTwitter /></a>
                        <a href="#" className="hover:text-gray-700"><FaInstagram /></a>
                        <a href="#" className="hover:text-gray-700"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
            <div className="relative bg-offWhite">
                {/* Colored Bar */}
                <div className="absolute top-0 left-0 w-full h-6">
                    <div className="bg-offWhite w-[11%] h-full inline-block"></div>
                    <div className="bg-accent w-[65%] h-full inline-block"></div>
                    <div className="bg-secondary w-[10%] h-full inline-block"></div>
                    <div className="bg-offWhite w-[14%] h-full inline-block"></div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeSection;
