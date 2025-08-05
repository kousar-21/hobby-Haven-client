import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthContext';
import Swal from 'sweetalert2';

const Update = () => {
    const { users, loading } = use(AuthContext)
    const userData = useLoaderData();
    const { _id, groupName, category, location, member, date, image, description } = userData

    const handleUpdateGroup = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const updateData = Object.fromEntries(formData.entries())
        console.log(updateData)


        //update data to firebase
        fetch(`https://b11a10-server-side-kousar-21.vercel.app/groups/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log("after updated to firebase", data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Group has been Updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    return (
        <div className='px-8 md:px-28 py-10'>
            {loading ? (<Spinner></Spinner>) : users && (<div>
                <div className='px-5 md:px-12 text-center space-y-10'>
                    <h1 className="text-3xl md:text-6xl font-bold">Update Your Group Info</h1>
                </div>
                <form onSubmit={handleUpdateGroup}>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-10'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Group Name</legend>
                            <input type="text" name='groupName' defaultValue={groupName} className="input w-full" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Hobby Category</legend>
                            <input type="text" name='category' className="input w-full" defaultValue={category} list="browsers" />
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
                            <input type="text" name='location' className="input w-full" defaultValue={location} />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Max Members</legend>
                            <input type="text" name='member' className="input w-full" defaultValue={member} />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Start Date</legend>
                            <input type="date" name='date' className="input w-full" defaultValue={date} />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Image</legend>
                            <input type="text" name='image' className="input w-full" defaultValue={image} />
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
                            <input type="text" name='description' className="input w-full" defaultValue={description} />
                        </fieldset>
                    </div>
                    <input type="submit" className='btn btn-primary w-full ' value="Update" />
                </form>
            </div>)}

        </div>
    );
};

export default Update;