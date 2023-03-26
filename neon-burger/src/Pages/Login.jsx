//import React from "react";
import { useState } from 'react';
import Logo from '../Components/LogoNB'
import './login.css'

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        props.history.push('/admin');

    }
    return (
        <div className='login'>
            <Logo className='neon-logo' />
            <form className='login-form'>
                <label className='label-form'>Email</label>
                <input
                    type='text'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='user@neonburger.com'>
                </input>
                <label>Password</label>
                <input
                    type='password'
                    placeholder='••••••••'
                    id='password'
                    value={password}
                    onChange={e =>setPassword(e.target.value)}
                    >
                </input>
                {error && <div className='error'>{error}</div>}
                <button type='submit' value={loading ? 'Loading...' : 'Login'} disabled={loading} onclick={handleLogin}>Login</button>
            </form>
        </div>
    );
};

export default LoginPage
