import React from 'react'
import AuthorCard from '../components/AuthorCard'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import img01 from './../assets/Client-First - IMAGES/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313 (2).svg'
import img04 from './../assets/Client-First - IMAGES/cheerful-young-ethnic-male-millennial-standing-near-stone-wall-and-smiling-6147118.svg'
import img03 from './../assets/Client-First - IMAGES/content-unshaven-man-covering-eye-with-yellow-flower-5262459.svg'
import img02 from './../assets/Client-First - IMAGES/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083 (2).svg'
import hand from './../assets/Client-First - IMAGES/ground-group-growth-hands-461049.svg'
import blog from './../assets/Client-First - IMAGES/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.svg'

const authors = [
    {
        name: "Guy Hawkins",
        title: "Content Writer @Company",
        image: img01,
        bgColor: "bg-offWhite",
    },
    {
        name: "Eleanor Pena",
        title: "Content Writer @Company",
        image: img02,
        bgColor: "bg-cream",
    },
    {
        name: "Robert Fox",
        title: "Content Writer @Company",
        image: img03,
        bgColor: "bg-offWhite",
    },
    {
        name: "Jacob Jones",
        title: "Content Writer @Company",
        image: img04,
        bgColor: "bg-offWhite",
    },
];

function AboutUs() {
    return (
        <>
            <div className="bg-offWhite py-10 mr-16 ml-16">
                <div className="container mx-auto flex space-x-10">
                    {/* About Us Section */}
                    <div className="relative p-10 pr-6 pl-24 w-1/2">

                        <h3 className="text-lg font-bold text-primary mb-4 tracking-widest">ABOUT US</h3>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight heading">
                            We are a community of content writers who share their learnings
                        </h2>
                        <p className="text-lightGrey mb-6 leading-7">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <a href="#" className="text-secondary font-bold text-lg">
                            Read More &gt;
                        </a>
                    </div>

                    {/* Our Mission Section */}
                    <div className="relative w-1/2 p-10 pl-6 pr-28">

                        <h3 className="text-base font-semibold text-primary mb-4 tracking-widest">OUR MISSION</h3>
                        <h2 className="text-3xl font-semibold font-body text-primary heading mb-6 leading-tight">
                            Creating valuable content for creatives all around the world
                        </h2>
                        <p className="text-lightGrey mb-8 leading-7">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex  pt-24 pb-24">
                <div className="flex-1 mr-16 ml-16">
                    <div className='p-6'>
                        <h2 className='text-[42px] font-semibold leading-tight text-primary heading mt-10 '>Our team of Creatives</h2>
                        <p className='mt-6 text-2xl font-bold font-body tracking-wide text-left text-primary  leading-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis distinctio placeat voluptatem, ducimus dolorum modi.</p>
                        <p className='mt-6 font-body text-base tracking-wider leading-7 text-lightGrey pr-6'>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum possimus dolor cumque voluptas, itaque quisquam excepturi ad aspernatur veniam aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eum debitis rerum, dolores eaque dolore ullam illum quibusdam nobis impedit.
                        </p>
                    </div>
                </div>
                <div className="mr-16">
                    <img
                        src={hand}
                        alt="Man working at a desk"
                        className=""
                    />
                </div>
            </div>
            <div className="flex p-6 pt-24 pb-24">
                <div className=" ml-14">
                    <img
                        src={blog}
                        alt="Man working at a desk"
                        className=""
                    />
                </div>
                <div className="flex-1 mr-16 ml-16">
                    <div className='p-6'>
                        <h2 className='text-[42px] font-semibold leading-tight text-primary heading tracking-tight mt-16'>Why we shared this Blog</h2>
                        <p className='mt-6 text-2xl font-bold font-body tracking-wide text-left text-primary  leading-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis distinctio placeat voluptatem, ducimus dolorum modi.</p>
                        <p className='mt-6 font-body text-base tracking-wider leading-7 font-thin text-lightGrey pr-16'>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum possimus dolor cumque voluptas, itaque quisquam excepturi ad aspernatur veniam aliquam!
                        </p>
                    </div>
                </div>

            </div>
            <AuthorCard />
            <div className='text-center'>
                <div className="flex justify-center space-x-8">
                    {authors.map((author, index) => (
                        <div
                            key={index}
                            className={`w-64 h-72 p-6 border bg-offWhite hover:bg-cream shadow-md transition-colors duration-300`}
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
        </>
    )
}

export default AboutUs
