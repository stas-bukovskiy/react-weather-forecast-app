import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Auth.css';
import {useAuth} from '../services/AuthProvider';

function Login() {
    const [username, setUsername] = useState('nark5');
    const [password, setPassword] = useState('nark5');
    const [error, setError] = useState('');
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const usernameRegex = /^[a-zA-Z]+[0-9]+$/;

        if (username !== password) {
            setError('Username or password is incorrect.');
        } else if (!usernameRegex.test(username)) {
            setError('Username not found in our system.');
        } else {
            setError('');
            login();
            navigate('/dashboard');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="p-5 rounded-3 shadow" style={{background: "rgba(255,255,255,0.71)", width: '500px'}}>
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                        />
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
