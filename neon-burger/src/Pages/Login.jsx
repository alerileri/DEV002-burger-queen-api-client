//import React from "react";
import LogoNB from '../Components/LogoNB'
import LoginForm from '../Components/Reusable/LoginForm';
import './login.css'

function LoginPage () {
    return (
        <div className='login'>
        <LogoNB className='logo-neon'/>
        <LoginForm className='login-form' />
        </div>
    );
};

export default LoginPage
