import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const GroupDetails = () => {
    const detail = useLoaderData()


    const { _id, groupName, userName, email, category, location, member, date, image, description } = detail




    const handleJoin = (date) => {
        const todayDate = new Date();
        const groupDate = new Date(date)
        console.log(todayDate)
        console.log(groupDate)
        if (todayDate <= groupDate) {
            Swal.fire({
                title: "Thanks for joining! Welcome to our group",
                icon: "success",
                draggable: true
            });
            // console.log("you can join")
            return
        }
        else {
            // console.log("join date is expired")
            toast.error("The group is no longer active.")
            return
        }
    }


    return (
        <div className='px-5 md:px-16 py-10 md:py-16'>
            
            {/* new design */}
            <div>
                <div className='flex flex-col-reverse md:flex-row justify-between gap-10'>
                    {/* group name , end date, join button */}
                    <div className='w-2/3 h-full'>
                        <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold md:font-extrabold text-gray-700'>{groupName}</h1>
                        {/* <h3 className='text-sm pt-4'>User Id:  {_id}</h3> */}
                        <p className='text-lg pt-4 pb-8'>DeadLine:  <span className='text-sky-400'>{date}</span> </p>
                        <div className="card-actions w-2/3 pt-14 items-start">
                            <button onClick={() => handleJoin(date)} className="btn w-full btn-primary">Join</button>
                        </div>
                    </div>
                    {/* image */}
                    <div className='w-full md:w-1/3 h-full rounded-lg'>
                        <img className='w-full h-72 rounded-lg'
                            src={image}
                            alt="Album" />
                    </div>
                </div>
                {/* single data */}
                <div className='py-8 grid grid-cols-1 md:grid-cols-4 px-8'>
                    {/* category */}
                    <div>
                        <h1 className='text-lg lg:text-2xl font-bold pt-4'>Category</h1>
                        <p className='text-lg font-light py-2'>{category}</p>
                    </div>
                    {/* total member */}
                    <div>
                        <h1 className='text-lg lg:text-2xl font-bold pt-4'>Total Member</h1>
                        <p className='text-lg font-light py-2'>{member}</p>
                    </div>
                    {/* user details */}
                    <div>
                        <h1 className='text-lg lg:text-2xl font-bold pt-4'>{userName}</h1>
                        <p className='text-lg font-light py-2'>{email}</p>
                    </div>
                    {/* meeting location */}
                    <div>
                        <h1 className='text-lg lg:text-2xl font-bold pt-4'>Meeting Location</h1>
                        <p className='text-lg font-light py-2'>{location.slice(0, 8) === "https://" ? (<a href={location} target='_blank' className='text-blue-400 underline'>{location}</a>) : (<span>{location}</span>)}</p>
                    </div>
                </div>
                {/* Description */}
                <div className='px-5 text-gray-500 text-lg'>
                    <p>{description}</p>
                </div>
            </div>

        </div>
    );
};

export default GroupDetails;