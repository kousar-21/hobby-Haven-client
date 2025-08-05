import React from 'react';
import Navbar from '../Components/Navber/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Spinner from '../Pages/Spinner/Spinner';

const Root = () => {

    const navigation = useNavigation();
    // console.log(navigation)



    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='bg-violet-100'>
                {navigation.state === 'loading' ? <Spinner></Spinner> : <Outlet></Outlet> }
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;