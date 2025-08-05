import React, { use } from 'react';
import Banner from '../../Components/Banner/Banner';
import Statics from '../../Components/statics/Statics';
import { useLoaderData } from 'react-router';
import RuningGroups from '../../Components/RuningGroups/RuningGroups';
import { AuthContext } from '../../AuthProvider/AuthContext';

const Home = () => {
    const allGroups = useLoaderData();
    const {theme} = use(AuthContext)
    // console.log("allGroups:", allGroups);
    return (
        <div>
            <Banner></Banner>
            <div className={`${theme ? "dark" : ""} dark:bg-zinc-500 px-5 md:px-16 py-10 space-y-7 bg-violet-100`}>
                {/* {
                    allGroups.map((groups, index)=><RuningGroups key={index} groups={groups}></RuningGroups>)
                } */}

                <RuningGroups allGroups={allGroups}></RuningGroups>
                
            </div>
            <Statics></Statics>
        </div>
    );
};

export default Home;