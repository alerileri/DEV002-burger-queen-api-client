import SmallLogo from '../../LogoSmall';
import Username from './Username'


function Header() {
    return (
        <div className='header-div'>
            <div className='logo-header'><SmallLogo /></div>
            <div className='header-right'>
                <span className='username-header'><Username /></span>
            </div>
        </div>
    )
}

export default Header;