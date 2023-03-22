import LogoNB from '..../Components/LogoNB'
import Logoutbtn from '../Icons/logoutbtn'
import Usename from './Username'

function Header () {
    return (
        <div>
            <LogoNB />
        <Usename />
        <Logoutbtn />
        </div>
    )
}

export default Header