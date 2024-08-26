import React from 'react'
import BlogPostHeader from '../components/BlogPostHeader'
import WhatToReadNext from '../components/WhatToReadNext'

function BlogPost() {
    return (
        <>   
            <BlogPostHeader />
            <WhatToReadNext />
            <div className="py-16">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 leading-tight">Join our team to be a part <br className="hidden md:block" /> of our story</h2>
                    <p className="text-sm md:text-base text-lightGrey mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing <br className="hidden md:block" /> elit, sed do eiusmod tempor incididunt.
                    </p>
                    <button className="bg-accent text-primary font-bold py-3 px-8 shadow-md hover:bg-yellow-500 transition duration-300">
                        Join Now
                    </button>
                </div>
            </div>
        </>
    )
}

export default BlogPost
