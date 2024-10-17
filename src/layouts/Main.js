import React from 'react';
import './Main.css';
import {Outlet} from 'react-router-dom';


export function MainLayout() {
    return (
        <div className="main-layout">
            <main>
                <Outlet/>
            </main>
        </div>
    );
}