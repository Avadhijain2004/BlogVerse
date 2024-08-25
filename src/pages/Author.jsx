import React from 'react'
import { Link } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'
import img from './../assets/Client-First - IMAGES/stained-glass-high-rise-building-1106476.svg'
import img03 from './../assets/Client-First - IMAGES/photo-of-woman-looking-at-man-3183173.svg'
import img04 from './../assets/Client-First - IMAGES/photo-of-people-walking-on-hallway-3182811.svg'
import img02 from './../assets/Client-First - IMAGES/man-in-black-crew-neck-t-shirt-sitting-beside-woman-in-gray-crew-neck-t-shirt-3153201.svg'
import WelcomeSection from '../components/WelcomeSection'




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
            <div className="mr-40 ml-40 mx-auto px-4 mt-24">
                <h1 className='heading text-primary text-4xl mb-10 pb-10 border-b border-neutral-300'>My Posts</h1>
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
        </>
    )
}

export default Author
