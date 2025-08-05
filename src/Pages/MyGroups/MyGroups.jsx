import React, { use, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthContext';
import Swal from 'sweetalert2';

const MyGroups = () => {
    const { users } = use(AuthContext);
    const myGroup = useLoaderData();
    console.log(users.email)
    // console.log(myGroup)

    const groups = myGroup.filter(grp => grp.email === users.email)
    // console.log(groups)

    const [group, setGroup] = useState(groups)

    const handleDelete = (id) => {
        // console.log(id)

        const datas = group.filter(dat => dat._id !== id);

        //delete from data base
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            // console.log(result.isConfirmed)

            if (result.isConfirmed) {

                fetch(`https://b11a10-server-side-kousar-21.vercel.app/groups/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("After delete data from data base", data)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Group has been deleted.",
                                icon: "success"
                            });
                            setGroup(datas)
                        }
                    })



            }
        });
    }


    return (
        <div className='px-5 md:px-16 py-10 md:py-16'>
            
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table overflow-scroll">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Group Name</th>
                            <th>Group Category</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            group.map((groups, index) => <tr key={index}>
                                <th>{index + 1}.</th>
                                <td>{groups.groupName}</td>
                                <td>{groups.category}</td>
                                <td><Link to={`/updateGroup/${groups._id}`}><button className='btn btn-info'>Update</button></Link></td>
                                <td><button onClick={() => handleDelete(groups._id)} className='btn btn-error'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyGroups;