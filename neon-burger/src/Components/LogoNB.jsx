 import nbLogo from '../assets/img/nbLogo.png'

 function Logo () {
     return (
        <div className='neon-logo'>
            <img src={nbLogo} className='neon-logo' alt='Neon Burger' />
         </div>
     );
 };

//  <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>

 export default Logo;