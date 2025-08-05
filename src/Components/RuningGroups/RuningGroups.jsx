import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthContext';

const RuningGroups = ({ allGroups }) => {
    const {theme} = use(AuthContext)


    const todayDate = new Date()
    
    const runGroup = allGroups.filter(group => {
        const availables = new Date(group.date)
        // console.log(availables)
        return todayDate <= availables
    })
    // console.log(runGroups)

    const runGroups = runGroup.slice(0,6)




    return (
        <div>
            <div className={`${theme ? "dark" : ""} dark:bg-zinc-700 py-10 px-5 md:px-10 bg-violet-200 rounded-2xl shadow-2xl`}>
                <h1 className='text-4xl font-extrabold'>Featured Groups</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5'>
                    {
                    runGroups.map((groups, index) => <div key={index} className="card bg-base-100 shadow-sm">
                        <div>
                            <img
                                src={groups.image}
                                className='w-full h-60 rounded-lg'
                                alt="Shoes" />
                        </div>
                        <div className="card-body dark:bg-zinc-500 rounded-lg">
                            <h2 className="card-title dark:text-white">{groups.groupName}</h2>
                            <p className='dark:text-white'>{groups.category}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/group/${groups._id}`}><button className='btn -bg-conic-30 btn-active hover:bg-violet-400'>See More</button></Link>
                            </div>
                        </div>
                    </div>)
                }
                </div>
            </div>

        </div>
    );
};

export default RuningGroups;