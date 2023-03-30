import axios from 'axios';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUserSession } from '../Utils/Common.jsx';
import Logo from '../Components/LogoNB'
import './login.css'


const LoginPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const passwordInputRef = useRef(null);
    const navigate = useNavigate();


    console.log('Before login function');

    const login = async (email, password) => {
        console.log('Inside login function');
        console.log(email);
        console.log(localStorage.getItem('accessToken'));

        try {
            console.log('Justo después del try');

            const response = await axios.post('http://localhost:8080/login', {
                email: email,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setUserSession(response.data.accessToken, response.data.user);
            console.log(response.data.accessToken);
            console.log(localStorage.getItem('token'));
            navigate('/admin');


        } catch (error) {
            console.log('Justo después del catch', error);
            if (error.response && (error.response.status === 401 || error.response.status === 400)) {
                setError(error.response.data.message);
            } else {
                setError('Something went wrong. Please try again later.');
            }
        }
    }



    const handleLogin = async (e) => {
        console.log('Aquí handle login')
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            await login(email, password);
        } catch (error) {
            setLoading(false);
            console.log(error);
            console.log('Error caught in handleLogin:', error);
        }
    }


    const handleFocusPassword = () => {
        passwordInputRef.current.focus();
    };

    return (
        <div className='login'>
            <Logo className='neon-logo' />
            <form className='login-form'>
                <label className='label-form' htmlFor='email'>
                    Email
                </label>
                <input
                    type='email'
                    id='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='user@neonburger.com'>
                </input>
                <label className='label-form' htmlFor='password'>
                    Password
                </label>
                <input
                    type='password'
                    id='password'
                    placeholder='••••••••'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    ref={passwordInputRef}
                ></input>
                {error && <div className='error'>{error}</div>}
                <button className='login-btn'
                    type='submit'
                    disabled={loading}
                    onClick={handleLogin}
                >Login
                </button>

            </form>
        </div>
    );
};

export default LoginPage;
