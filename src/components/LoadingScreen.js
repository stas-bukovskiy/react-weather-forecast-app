import React from 'react';
import './LoadingScreen.css';

export default function LoadingScreen() {
    return (
        <div className="loading-screen">
            <div className="spinner-border text-white" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}
