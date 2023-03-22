 import nbLogo from '../assets/img/nbLogo.png'
 import './LogoNB.css'

 const Logo = ({ neonLogo }) => {
     return (
        <div className={neonLogo}>
            <img src={nbLogo} className='imgNB' alt='Neon Burger' />
         </div>
     );
 }

 <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>

 export default Logo;