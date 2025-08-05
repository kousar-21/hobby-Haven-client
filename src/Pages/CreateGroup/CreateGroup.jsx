import React, { use } from 'react';
import { AuthContext } from '../../AuthProvider/AuthContext';
import Swal from 'sweetalert2';
import Spinner from '../Spinner/Spinner';

const CreateGroup = () => {
    const { users, loading } = use(AuthContext)



    const handleCreateGroup = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const createData = Object.fromEntries(formData.entries())
        console.log(createData)


        //send data to data base
        fetch('https://b11a10-server-side-kousar-21.vercel.app/groups', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(createData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log("after adding create group to data base", data)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Congratulation! Your Group is created successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                form.reset()
            })
    }



    return (
        <div className='px-8 md:px-28 py-10'>
            {loading ? (<Spinner></Spinner>) : users && (<div>
                <div className='px-5 md:px-12 text-center space-y-10'>
                    <h1 className="text-3xl md:text-6xl font-bold">Create Your Own Group</h1>
                </div>
                <form onSubmit={handleCreateGroup}>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-10'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Group Name</legend>
                            <input type="text" name='groupName' className="input w-full" placeholder="Your Group Name" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Hobby Category</legend>
                            <input type="text" name='category' className="input w-full" placeholder="Chose Hobby Category" list="browsers" />
                            <datalist id="browsers">
                                <option value="Drawing & Painting"></option>
                                <option value="Photography"></option>
                                <option value="Video Gaming"></option>
                                <option value="Fishing"></option>
                                <option value="Running"></option>
                                <option value="Cooking"></option>
                                <option value="Reading"></option>
                                <option value="Writing"></option>
                            </datalist>
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Meeting Location</legend>
                            <input type="text" name='location' className="input w-full" placeholder="Share Your Meeting Location " />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Max Members</legend>
                            <input type="text" name='member' className="input w-full" placeholder="Your Groups maximum member" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Start Date</legend>
                            <input type="date" name='date' className="input w-full" placeholder="Deadline For Join Group" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Image</legend>
                            <input type="text" name='image' className="input w-full" placeholder="Image URL" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">User Name</legend>
                            <input type="text" name='userName' className="input w-full" readOnly value={users?.displayName || ""} />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">User Email</legend>
                            <input type="email" name='email' className="input w-full" readOnly value={users?.email || ""} />
                        </fieldset>
                        <fieldset className="fieldset md:col-span-2">
                            <legend className="fieldset-legend">Description</legend>
                            <input type="text" name='description' className="input w-full" placeholder="Write something about your group" />
                        </fieldset>
                    </div>
                    <input type="submit" className='btn btn-primary w-full ' value="Create" />
                </form>
            </div>)}

        </div>
    );
};

export default CreateGroup;





/**
 * 
 * 
 * 
 *  <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
 * 
 * 
 * 
 * 
 * 
 * */ 