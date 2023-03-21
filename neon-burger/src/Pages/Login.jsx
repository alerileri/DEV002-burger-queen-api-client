import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        <>
        <LogoNB />
        <nav style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to="/admin">Admin</Link>
          <Link to="/chef">Chef</Link>
        </nav>
      </>
    );
  };
    
export default LoginPage

