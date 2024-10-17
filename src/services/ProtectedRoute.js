import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from './AuthProvider';

function ProtectedRoute() {
    const {isLoggedIn} = useAuth();
    return isLoggedIn ? <Outlet/> : <Navigate to="/auth/login"/>;
}

export default ProtectedRoute;
