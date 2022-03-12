import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';
import { CircularProgress } from '@mui/material';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isloading } = useAuth();
    const location = useLocation();
    if(isloading){ 
        return <CircularProgress /> 
    }
    else if(user.email && admin){
        return children
    }
    else{
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};

export default AdminRoute;