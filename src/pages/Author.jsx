import React from 'react';
import { Link } from 'react-router-dom';
import WelcomeSection from '../components/WelcomeSection';
import img from './../assets/Client-First - IMAGES/stained-glass-high-rise-building-1106476.svg';
import img02 from './../assets/Client-First - IMAGES/man-in-black-crew-neck-t-shirt-sitting-beside-woman-in-gray-crew-neck-t-shirt-3153201.svg';

function Author() {
    const posts = [
        {
            title: "Design tips for designers that cover everything you need",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
            category: "Startup",
            image: img
        },
        {
            title: "How to build rapport with your web design clients",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
            category: "Business",
            image: img02
        },
    ];

    return (
        <>
            <WelcomeSection />
            <div className="mr-4 md:mr-40 ml-4 md:ml-40 mx-auto px-4 mt-12 md:mt-24">
                <h1 className='heading text-primary text-3xl md:text-4xl mb-6 md:mb-10 pb-4 md:pb-10 border-b border-neutral-300'>My Posts</h1>
                <div className="flex flex-col md:flex-row gap-10">
                    <div>
                        {posts.map((post, index) => (
                            <div key={index} className="mb-10 md:mb-20 flex flex-col md:flex-row items-start">
                                <img className="w-full md:w-2/5 h-48 md:h-80 object-cover mb-4 md:mb-0 md:mr-6" src={post.image} alt={post.title} />
                                <div>
                                    <Link to='/blog-post'>
                                        <p className="text-sm md:text-base font-bold text-secondary mb-2 md:mb-4 mt-1 md:mt-4 uppercase tracking-widest">{post.category}</p>
                                    </Link>
                                    <h2 className="text-2xl md:text-[40px] font-bold text-primary mb-4 md:mb-6 leading-tight">{post.title}</h2>
                                    <p className="text-sm md:text-base text-gray-600">{post.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Author;
