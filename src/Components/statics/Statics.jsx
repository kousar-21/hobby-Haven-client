import React, { use } from 'react';
import { MdVerified } from "react-icons/md";
import { AuthContext } from '../../AuthProvider/AuthContext';

const Statics = () => {
    const {theme} = use(AuthContext)
    return (
        <div className={`${theme ? "dark" : ""} dark:bg-zinc-500 px-5 md:px-16 pb-10 space-y-7 bg-violet-100`}>
            {/* About us */}
            <div className='py-10 px-5 md:px-10 dark:bg-zinc-700 bg-violet-300 rounded-2xl shadow-2xl'>
                <h1 className='text-4xl font-extrabold dark:text-white'>What we’re about</h1>
                <p className='mt-3 text-lg dark:text-white'>Looking for your tribe? Connect, grow and explore new hobbies at Hobby Haven!At HobbyHaven, we believe everyone deserves a space to explore their interests and connect with like-minded individuals. Whether you're into painting, robotics, hiking, or photography — there's a group here for you.We make it easy to join or create groups based on your unique hobbies. Our platform is built to bring enthusiasts together, from beginners to experts, so everyone feels welcomed and valued.We’re committed to providing a positive environment where people can express their interests freely. Our moderation tools and group features help keep the space friendly, inclusive, and fun.</p>
            </div>


            {/* reviewers sections */}
            <div className='py-10 px-5 md:px-10 rounded-2xl shadow-2xl dark:bg-zinc-700 bg-violet-300'>
                <div>
                    <h1 className='text-4xl font-extrabold dark:text-white'>User's Opinion</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-10'>

                    {/* r-1 */}
                    <div>
                        <div className='mb-5'>
                            <h3 className='text-3xl font-bold dark:text-white'>Victoria Jensen</h3>
                            <p className='flex items-center gap-2'><MdVerified className='text-green-400' /> <span className='dark:text-zinc-200'>Verified</span></p>
                            <p className='dark:text-zinc-200'>Apr 11, 2025</p>
                        </div>
                        <div>
                            <p className='text-gray-600 dark:text-zinc-300'>I'm so glad I came across this website. I was having a really tough time finding a good company. I searched everywhere with no luck until I came across this company's website.</p>
                        </div>
                    </div>
                    {/* r-2 */}
                    <div>
                        <div className='mb-5'>
                            <h3 className='text-3xl font-bold dark:text-white'>Adrienne Lang</h3>
                            <p className='flex items-center gap-2'><MdVerified className='text-green-400' /> <span className='dark:text-zinc-200'>Verified</span></p>
                            <p className='dark:text-zinc-200'>May 11, 2025</p>
                        </div>
                        <div>
                            <p className='text-gray-600 dark:text-zinc-300'>I joined a group on HobbyHaven and ended up meeting people who shared the same creative energy. The layout is clean and easy to use — highly recommend it!</p>
                        </div>
                    </div>
                    {/* r-3 */}
                    <div>
                        <div className='mb-5'>
                            <h3 className='text-3xl font-bold dark:text-white'>Tom Bumgarner</h3>
                            <p className='flex items-center gap-2'><MdVerified className='text-green-400'/><span className='dark:text-zinc-200'>Verified</span></p>
                            <p className='dark:text-zinc-200'>Apr 22, 2025</p>
                        </div>
                        <div>
                            <p className='text-gray-600 dark:text-zinc-300'>Really good company to meet people online and offline and deserved this honest review. Always have fine security to be protected and decent for organizing as well!</p>
                        </div>
                    </div>
                    {/* r-4 */}
                    <div>
                        <div className='mb-5'>
                            <h3 className='text-3xl font-bold dark:text-white'>Samantha Hubbard</h3>
                            <p className='flex items-center gap-2'><MdVerified className='text-green-400' /><span className='dark:text-zinc-200'>Verified</span></p>
                            <p className='dark:text-zinc-200'>Mar 29, 2025</p>
                        </div>
                        <div>
                            <p className='text-gray-600 dark:text-zinc-300'>I created my own writing group in minutes. Scheduling events and sharing work has never been easier. I just wish there were more customization options for group pages.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Statics;