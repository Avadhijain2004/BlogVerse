import React from 'react'
import { Link } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'
import img from './../assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533-1.svg'
import img03 from './../assets/Client-First - IMAGES/photo-of-woman-looking-at-man-3183173.svg'
import img04 from './../assets/Client-First - IMAGES/photo-of-people-walking-on-hallway-3182811.svg'
import img02 from './../assets/Client-First - IMAGES/photo-of-people-doing-handshakes-3183197.svg'
import image from './../assets/Client-First - IMAGES/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-840996.svg'


function Blog() {

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
        {
            title: "Logo design trends to avoid in 2022",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
            category: "Startup",
            image: img03
        },
        {
            title: "8 Figma design systems you can download for free today",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
            category: "Technology",
            image: img04
        },
        {
            title: "Font sizes in UI design: The complete guide to follow",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
            category: "Economy",
            image: img
        },
    ];

    return (
        <>

            <div className="flex flex-col md:flex-row bg-gray-100 p-6 md:pt-24 pb-24">
                <div className="flex-1 md:mr-16 md:ml-16 mb-8 md:mb-0">
                    <p className="text-primary tracking-widest uppercase text-base mb-2 font-bold">Featured Post</p>
                    <h2 className='text-[28px] md:text-[42px] mt-4 font-semibold leading-tight text-primary heading '>Step-by-step guide to choosing great <br className='hidden md:block' /> font pairs</h2>
                    <p className='mt-6 text-base font-body tracking-wide'>By <span className='text-secondary'>John Doe</span> | May 23, 2022</p>
                    <p className='mt-6 font-body text-base tracking-wider leading-7 font-thin text-lightGrey'>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br className='hidden md:block' /> fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                    </p>
                    <button className='mt-8 border bg-accent text-primary p-3 font-bold w-48 pl-8 pr-8 text-lg'>Read More {'>'}</button>
                </div>
                <div className="md:mr-16 flex justify-center">
                    <img
                        src={image}
                        alt="Man working at a desk"
                        className="w-full h-auto max-w-xs md:max-w-none"
                    />
                </div>
            </div>

            <div className="mr-6 md:mr-40 ml-6 md:ml-16 mx-auto px-4 mt-12 md:mt-24">
                <h1 className='heading text-primary text-2xl md:text-4xl mb-10 pb-10 border-b border-neutral-300'>All Posts</h1>
                <div className="flex flex-col gap-10">
                    <div>
                        {posts.map((post, index) => (
                            <div key={index} className="mb-10 md:mb-20 flex flex-col md:flex-row items-start">
                                <img className="w-full md:w-2/5 h-56 md:h-66 object-cover mb-6 md:mb-0 md:mr-6" src={post.image} alt={post.title} />
                                <div>
                                    <Link to='/category'>
                                        <p className="text-base font-bold text-secondary mb-2 md:mb-4 uppercase tracking-widest">{post.category}</p>
                                    </Link>
                                    <h2 className="text-2xl md:text-[40px] font-bold text-primary mb-4 md:mb-6 leading-tight">{post.title}</h2>
                                    <p className="text-base text-gray-600">{post.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center gap-4 text-lightGrey font-bold md:text-lg'>
                <button className='hover:text-primary'>{'<'} Prev</button>
                <button className='hover:text-primary'>Next {'>'}</button>
            </div>
            <CategoryCard title="All Categories" />
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
        </>
    )
}

export default Blog
