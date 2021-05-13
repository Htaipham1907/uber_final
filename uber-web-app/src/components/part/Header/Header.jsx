import logo from './../../../resource/images/logo.webp';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="myHeader">
            <Link to='/landingpage'>
                <img src={logo} id="img-logo"></img>
            </Link>
            <nav id="navbar" class="navigation" role="navigation">
                <input id="toggle1" type="checkbox" />
                <label class="hamburger1" for="toggle1">
                    <div class="top"></div>
                    <div class="meat"></div>
                    <div class="bottom"></div>
                </label>
                <nav class="menu1">
                    <a><Link to='/home'>Home</Link></a>
                    <a><Link to='/booking'>Booking</Link></a>
                    <><Link to='/contact'>Contact</Link></>
                    <a><Link to='/static'>About us</Link></a>
                </nav>
            </nav>
        </div >
    )
}

export default Header;
