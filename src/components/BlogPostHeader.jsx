import React from 'react';
import image from './../assets/Client-First - IMAGES/photo-of-woman-wearing-eyeglasses-3184405.svg'
import author from './../assets/Client-First - IMAGES/Image.svg'
import logo01 from "./../assets/icon2.png"

const BlogPostHeader = () => {
    return (
        <>
            <div className="bg-white py-16 px-4">
                <div className="max-w-5xl md:max-w-full mx-auto px-4 md:px-16">
                    <div className="md:pl-96 max-w-5xl">
                        {/* Author Information */}
                        <div className="flex items-center mb-6">
                            <img
                                src={author}
                                alt="Author"
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h2 className="text-lg font-semibold text-secondary">Andrew Jonson</h2>
                                <p className="text-sm text-lightGrey">Posted on 27th January 2022</p>
                            </div>
                        </div>

                        {/* Post Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
                            Step-by-step guide to choosing <br className="hidden md:block" /> great font pairs
                        </h1>

                        {/* Category */}
                        <p className="flex items-center text-lg font-bold text-primary mb-8">
                            <img className="w-10 mr-2" src={logo01} alt="Logo" />
                            Startup
                        </p>

                    </div>
                    {/* Main Image */}
                    <img
                        src={image}
                        alt="Post Image"
                        className="w-full h-auto"
                    />
                </div>
            </div>

            <div className="space-y-10 text-left md:mt-12 mx-4 md:mx-80">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 tracking-normal">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</h2>
                    <p className="text-sm md:text-base text-lightGrey md:leading-7">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula.
                    </p>
                </div>
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 tracking-normal">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</h2>
                    <p className="text-sm md:text-base text-lightGrey md:leading-7 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. 
                    </p>
                    <p className="text-sm md:text-base text-lightGrey md:leading-7 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. 
                    </p>
                    <ul className="list-disc list-inside text-primary font-bold text-lg mb-8">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                    <p className="text-sm md:text-base text-lightGrey md:leading-7 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. 
                    </p>
                </div>
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 tracking-normal">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</h2>
                    <p className="text-sm md:text-base text-lightGrey md:leading-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. 
                    </p>
                </div>
            </div>
        </>
    );
};

export default BlogPostHeader;
