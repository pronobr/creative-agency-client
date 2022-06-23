import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import {useLocation, Navigate} from 'react-router-dom';
const PrivateAuth = ({children}) => {
    const [user] =useAuthState(auth)
    const location = useLocation()
    if(!user){
        return <Navigate to="/login" state ={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivateAuth;
