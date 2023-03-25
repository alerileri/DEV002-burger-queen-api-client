import Header from "../Components/Reusable/Header/Header";
import Footer from "../Components/Reusable/Footer/Footer";
import './adminpage.css';


function AdminPage() {
    return (
       <div className="admin-container">
        <Header classname='header-div'/>
        <h1>Admin page</h1>
        <section><Footer className='footer' /></section>
        </div>
    )
}

export default AdminPage;

