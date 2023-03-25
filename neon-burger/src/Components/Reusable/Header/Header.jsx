import Logo from '../../LogoNB'
import Logoutbtn from '../Icons/logoutbtn'
import Username from './Username'

function Header() {
    return (
        <div className='header-div'>
            <span className='logo-header'><Logo /></span>
            <span className='header-right'>
                <span className='username-header'><Username /></span>
                <span className='logout-header'><Logoutbtn /></span>
            </span>
        </div>
    )
}

export default Header;