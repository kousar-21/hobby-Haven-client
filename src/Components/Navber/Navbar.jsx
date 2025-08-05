import React, { use } from 'react';
import { NavLink } from 'react-router';
import Logo from '/hobbyhub-logo.jpg'
import { AuthContext } from '../../AuthProvider/AuthContext';
import './Navbar.css'
import { Tooltip } from 'react-tooltip';
import Swal from 'sweetalert2';
import { LuSunDim, LuSunMoon } from "react-icons/lu";

const Navbar = () => {
    const { users, logOut, theme, setTheme } = use(AuthContext);

    // console.log(users)

    const links = [
        <li className='dark:text-white' key='home'><NavLink to='/'>Home</NavLink></li>,
        <li className='dark:text-white' key='allGroups'><NavLink to='/groups'>All Groups</NavLink></li>,
        <li className='dark:text-white' key='createGroups'><NavLink to='/createGroup'>Create Groups</NavLink></li>,
        <li className='dark:text-white' key='myGroups'><NavLink to='/myGroups'>My Groups</NavLink></li>
    ]

    const hangleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You successfully logout from Hobby Haven",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    return (
        <div className=''>
            <div className={`${theme ? "dark" : ""} navbar bg-violet-200 lg:px-16 md:px-12 shadow-sm dark:bg-zinc-700`}>
                <div className="navbar-start space-x-3">
                    <div className="dropdown dark:bg-zinc-500">
                        <div tabIndex={0} role="button" className="btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 py-2 shadow">
                            <li className='dark:text-zinc-600' key='home'><NavLink to='/'>Home</NavLink></li>
                            <li className='dark:text-zinc-600' key='allGroups'><NavLink to='/groups'>All Groups</NavLink></li>
                            <li className='dark:text-zinc-600' key='createGroups'><NavLink to='/createGroup'>Create Groups</NavLink></li>
                            <li className='dark:text-zinc-600' key='myGroups'><NavLink to='/myGroups'>My Groups</NavLink></li>
                        </ul>
                    </div>
                    <div className='grid grid-cols-2  md:gap-2'>
                        <div className='space-y-2 py-1'>
                            <img src={Logo} className='size-12 md:size-16 rounded-2xl' alt="" />
                            <a className="text-xl font-extrabold dark:text-blue-200 text-blue-950">HobbyHaven</a>
                        </div>

                        <div className='flex md:flex-col lg:flex-row'>
                            <div className='lg:p-1 rounded-2xl '><button onClick={() => { setTheme(""); }} className='btn py-2 rounded-lg dark:bg-zinc-400 dark:hover:bg-zinc-100/20  dark:hover:text-white'><LuSunDim size={25} /></button></div>

                            <div onClick={() => { setTheme("dark"); }} className='lg:p-1 rounded-2xl'><button className='btn rounded-lg dark:bg-zinc-400 dark:hover:bg-zinc-100/20 dark:hover:text-white'><LuSunMoon size={25} /></button></div>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    {/* toot tip */}
                    {
                        users && <div className='example-container'>
                            <a data-tooltip-id="my-tooltip-styles" data-tooltip-content={users.displayName}>
                                <div>
                                    {users && <img className='size-14 rounded-full' src={users.photoURL} alt="" />}
                                </div>
                            </a>
                            <Tooltip id="my-tooltip-styles" className="example" />

                        </div>
                    }


                    <div>
                        {
                            users ? <button onClick={hangleLogOut} className='btn px-7 bg-violet-300'>Logout</button> : <NavLink className='btn px-7 bg-violet-300' to='/login'>Login</NavLink>
                        }

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;