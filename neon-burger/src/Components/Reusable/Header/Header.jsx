import Logo from '../../LogoNB'
import Logoutbtn from '../Icons/logoutbtn'
import Username from './Username'

function Header () {
    return (
        <div>
            <Logo />
        <Username />
        <Logoutbtn />
        </div>
    )
}

export default Header;