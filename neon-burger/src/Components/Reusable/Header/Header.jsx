import Logo from '../../LogoNB'
import Logoutbtn from '../Icons/logoutbtn'
import Usename from './Username'

function Header () {
    return (
        <div>
            <Logo />
        <Usename />
        <Logoutbtn />
        </div>
    )
}

export default Header