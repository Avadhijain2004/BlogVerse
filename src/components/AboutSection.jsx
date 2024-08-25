import React from 'react';

function AboutSection() {
    return (
        <div>
            <div className="relative bg-white p-2 mr-16 ml-16">
                {/* Colored Bar */}
                <div className="absolute top-0 left-0 w-full h-6">
                    <div className="bg-white w-[15%] h-full inline-block"></div>
                    <div className="bg-accent w-[70%] h-full inline-block"></div>
                    <div className="bg-secondary w-[15%] h-full inline-block"></div>
                </div>

            </div>
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
        </div>

    );
}

export default AboutSection;
