import React from 'react';
import {Link, Navigate, Outlet} from 'react-router-dom';
import {useAuth} from "../services/AuthProvider";

export default function NotFound() {
    const {isLoggedIn} = useAuth();

    return (
        <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <div className="text-center p-5 bg-body-transparent rounded-3">
                <h1 className="pb-3">404 - Page Not Found</h1>
                <p className="h2 pb-3">Ooops! The page you are looking for does not exist.</p>
                <Link to={isLoggedIn ? "/dashboard" : "/auth/login"} className="btn btn-primary btn-lg">
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
}
