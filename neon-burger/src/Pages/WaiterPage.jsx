import { useNavigate } from "react-router-dom";
import { removeUserSession } from "../Utils/Common";
import { useEffect } from "react";
import Header from "../Components/Reusable/Header/Header";
import Footer from "../Components/Reusable/Footer/Footer";

function WaiterPage() {
    const navigate = useNavigate();
    useEffect(() => {
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
            <Header classname='header-div' />
            <h1>Waiter page</h1>
            <nav>
                <ul>
                    <a href="#menu">Menu</a>
                    <a href="#newOrders">New Order</a>
                    <a href="#orders">Orders</a>
                </ul>
            </nav>
            
            <section id="menu">
                <h2>Menu</h2>
                <p>Para crear un enlace de navegación que permita desplazarse a una sección específica dentro de una página HTML sin usar rutas, puedes utilizar anclas (también conocidos como "hashes").

Para crear una ancla, debes agregar el atributo "id" a la etiqueta HTML de la sección a la que deseas enlazar. Por ejemplo, si deseas enlazar a una sección con el texto "Sección 1" dentro de una página, debes agregar el atributo "id" a la etiqueta correspondiente de la siguiente manera:</p></section>
            <section id="newOrder">
                <h2>New Order</h2></section>
            <section id="orders">
                <h2>Orders</h2>
            </section>
    

            <input
                type='button'
                value='Logout'
                onClick={handleLogout}
            />
            <section><Footer className='footer' /></section>
        </div>
    )
}


export default WaiterPage;