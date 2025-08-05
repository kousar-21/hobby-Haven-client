import React from 'react';
import Lottie from "lottie-react";
import Animation from "./Animation - 1747793862733.json";
import { NavLink } from 'react-router';
import { FaArrowLeftLong } from 'react-icons/fa6';

const Error = () => {
    return (
        <div className='relative pt-28 md:pt-20 lg:pt-5'>
            <div>
                
                <Lottie 
                animationData={Animation}
                className='h-[600px] w-[1500px]'
                />
                
            </div>
            <button className='btn btn-warning absolute flex items-center py-5 z-50 ml-10 px-8 -bottom-16 left-44'><NavLink className="flex gap-2" to='/'><FaArrowLeftLong size={20} /><span>Back to Home</span></NavLink></button>
            
        </div>
    );
};

export default Error;