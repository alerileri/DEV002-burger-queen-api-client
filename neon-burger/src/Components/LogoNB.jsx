 import nbLogo from '../assets/img/nbLogo.png'

 const Logo = ({ neonLogo }) => {
     return (
        <div className={neonLogo}>
            <img src={nbLogo} alt='Neon Burger' />
         </div>
     );
 }

 export default Logo;