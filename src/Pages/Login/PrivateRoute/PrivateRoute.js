import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';
import { CircularProgress } from '@mui/material';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isloading } = useAuth();
    if(isloading){ return <CircularProgress /> }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    );
};

export default PrivateRoute;