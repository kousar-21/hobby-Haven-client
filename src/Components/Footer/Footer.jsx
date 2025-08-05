import React, { use } from 'react';
import Logo from '/hobbyhub-logo.jpg'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { AuthContext } from '../../AuthProvider/AuthContext';

const Footer = () => {

    const {theme} = use(AuthContext)

    return (
        <div className={`${theme ? "dark" : ""} bg-violet-300 px-5 md:px-16 dark:bg-zinc-700`}>
            <div className='space-y-2 py-5'>
                <img src={Logo} className='size-16 rounded-2xl' alt="" />
                <a className="text-xl font-extrabold dark:text-blue-200 text-blue-950">HobbyHaven</a>
            </div>
            <div className='border border-b-0 dark:text-white'></div>
            <div className='py-5'>
                <div>
                    <h3 className='underline mb-2 dark:text-white'>Follow Us</h3>
                </div>
                <div className='flex flex-col md:flex-row  md:justify-between'>
                    <div className='flex space-x-5 mb-5'>
                        <a href="https://www.facebook.com/" target="_blank"><FaFacebookSquare className='text-blue-950' size={35} /></a>
                        <a href="https://www.instagram.com/" target="_blank"><FaInstagram className='text-red-400' size={35} /></a>
                        <a href="https://www.linkedin.com/" target="_blank"><FaLinkedin className='text-blue-950' size={35} /></a>
                        <a href="https://x.com/" target="_blank"><FaXTwitter size={35} /></a>
                    </div>
                    <div>
                        <h3 className='dark:text-white'>© HobbyHaven 2025 - All right reserved</h3>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Footer;