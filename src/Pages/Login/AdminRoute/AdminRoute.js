import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';
import { CircularProgress } from '@mui/material';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isloading } = useAuth();
    if(isloading){ return <CircularProgress /> }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    );
};

export default AdminRoute;