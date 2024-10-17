import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import {MainLayout} from "./layouts/Main";
import {AuthProvider} from "./services/AuthProvider";
import Login from "./pages/Login";
import ProtectedRoute from "./services/ProtectedRoute";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout/>}>
                        <Route path="dashboard" element={<ProtectedRoute/>}>
                            <Route index element={<Dashboard/>}/>
                        </Route>
                        <Route path="/auth/login" element={<Login/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
