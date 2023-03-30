
import { useNavigate } from "react-router-dom";
import Header from "../Components/Reusable/Header/Header";
import Footer from "../Components/Reusable/Footer/Footer";
import { removeUserSession } from "../Utils/Common";
import './adminpage.css';
import { useEffect } from "react";
//import Logouticon from "../Components/Reusable/Icons/logouticon";

const AdminPage = () => {
const navigate = useNavigate();
useEffect (() => {
    const getToken = localStorage.getItem('token');
    console.log(getToken);

    if (!getToken) {
        navigate('/')
    }
})

//const logoutIcon = <Logouticon/>


const handleLogout = () => {
    removeUserSession();
    navigate('/');
}

    return (
       <div className="admin-container">
        <Header classname='header-div'/>
        <h1>Admin page</h1>
        <input 
        type='button' 
        value='Logout'
        onClick={handleLogout} 
        />
        <section><Footer className='footer' /></section>
        </div>
    )
}

export default AdminPage;

