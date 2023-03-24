import Logo from '../../LogoNB'
import Logoutbtn from '../Icons/logoutbtn'
import Username from './Username'

function Header () {
    return (
        <div>
            <Logo width='80px' height='auto'/>
        <Username />
        <Logoutbtn />
        </div>
    )
}

export default Header;