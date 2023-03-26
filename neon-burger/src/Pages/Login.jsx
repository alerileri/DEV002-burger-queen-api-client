//import React from "react";
import Logo from '../Components/LogoNB'
import LoginForm from '../Components/Reusable/LoginForm';
import './login.css'

function LoginPage () {
    return (
        <div className='login'>
        <Logo className='neon-logo'/>
        <LoginForm className='login-form' />
        </div>
    );
};

export default LoginPage
