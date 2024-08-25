import React from "react";
import author from './../assets/Client-First - IMAGES/close-up-photography-of-man-wearing-sunglasses-1212984 (2).svg'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const WelcomeSection = () => {
    return (
        <div className="">
            <div className="p-24 pl-40 pr-40 bg-offWhite flex flex-col md:flex-row items-center">
                <div className="w-1/5">
                    <img
                        src={author}
                        alt="Andrew Johnson"
                        className="w-60"
                    />
                </div>
                <div className="w-4/5 ml-10">
                    <h1 className="text-5xl font-bold text-primary mb-8 leading-tight">
                        Hey there, I’m Andrew Johnson <br /> and welcome to my Blog
                    </h1>
                    <p className="text-lightGrey mb-4 leading-7">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, in! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, architecto.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4 text-gray-500">
                        <a href="#" className="hover:text-gray-700"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="hover:text-gray-700"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="hover:text-gray-700"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="hover:text-gray-700"><i className="fab fa-pinterest"></i></a>
                    </div>
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
