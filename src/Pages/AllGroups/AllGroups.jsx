import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllGroups = () => {
    const allGroups = useLoaderData()
    console.log(allGroups)


    // const handleDetails = (id) => {
    //     fetch(`http://localhost:3000/groups/${id}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    // }



    return (
        <div className='px-3 md:px-14 py-10 md:py-16'>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    allGroups.map((groups, index) => <div key={index} className="card bg-base-100 shadow-sm">
                        <div>
                            <img
                                src={groups.image}
                                className='w-full h-60 rounded-lg'
                                alt="Shoes" />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">{groups.groupName}</h2>
                            <p>{groups.category}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/group/${groups._id}`}><button className='btn -bg-conic-30 btn-active hover:bg-violet-400'>See More</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>




            {/* <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100"> */}
            {/* <table className="table">
                   
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Group Name</th>
                            <th>Group Category</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            allGroups.map((groups, index) => <tr key={index}>
                                <th>{index + 1}.</th>
                                <td><img className="mask mask-squircle h-12 w-12" src={groups.image} alt="" /></td>
                                <td>{groups.groupName}</td>
                                <td>{groups.category}</td>
                                <td><Link to={`/group/${groups._id}`}><button className='btn -bg-conic-30 btn-active'>See More</button></Link></td>
                            </tr>)
                        }
                    </tbody>
                </table> */}
            {/* </div> */}
        </div>
    );
};

export default AllGroups;