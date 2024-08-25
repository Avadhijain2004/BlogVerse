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
            
            <div className="flex bg-gray-100 p-6 pt-24 pb-24">
                <div className="flex-1 mr-16 ml-16">
                    <p className="text-primary tracking-widest uppercase text-base mb-2 font-bold">Featured Post</p>
                    <h2 className='text-[42px] mt-4 font-semibold leading-tight text-primary heading '>Step-by-step guide to choosing  great <br /> font pairs</h2>
                    <p className='mt-6 text-base font-body tracking-wide'>By <span className='text-secondary'>John Doe</span> | May 23, 2022</p>
                    <p className='mt-6 font-body text-base tracking-wider leading-7 font-thin text-lightGrey'>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                    </p>
                    <button className='mt-8 border bg-accent text-primary p-3 font-bold w-48 pl-8 pr-8 text-lg'>Read More {'>'}</button>
                </div>
                <div className="mr-16">
                    <img
                        src={image}
                        alt="Man working at a desk"
                        className=""
                    />
                </div>
            </div>
            <div className="mr-40 ml-16 mx-auto px-4 mt-24">
                <h1 className='heading text-primary text-4xl mb-10 pb-10 border-b border-neutral-300'>All Posts</h1>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="">
                        {posts.map((post, index) => (
                            <div key={index} className="mb-20 flex items-start">
                                <img className="w-2/5 h-66 object-cover mr-6" src={post.image} alt={post.title} />
                                <div>
                                    <Link to='/category'>
                                    <p className="text-base font-bold text-secondary mb-4 mt-4 uppercase tracking-widest">{post.category}</p>
                                    </Link>
                                    <h2 className="text-[40px] font-bold text-primary mb-6 leading-tight">{post.title}</h2>
                                    <p className="text-base text-gray-600">{post.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center gap-4 text-lightGrey font-bold text-xl'>
                <button className='hover:text-primary'>{'<'} Prev</button>
                <button className='hover:text-primary'>Next {'>'}</button>
            </div>
            <CategoryCard title="All Categories" />
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

export default Blog
