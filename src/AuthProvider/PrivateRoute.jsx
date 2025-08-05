import React, { Children, use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../Pages/Spinner/Spinner';

const PrivateRoute = ({children}) => {

    const {users, loading} = use(AuthContext)
    const location  = useLocation()
    // console.log(location)

    if(loading){
        return <Spinner></Spinner>
    }
    if(users){
        return children
    }
    else{
       return <Navigate state={location.pathname} to='/login'></Navigate>
    }

};

export default PrivateRoute;