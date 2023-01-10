import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import homelogo from '../../assets/Boton1.png';
import lupa from '../../assets/lupa.png';
import profile from '../../assets/perfil.png';
import gift from '../../assets/regalos.png';
import './Navbar.css';

function NavBar() {
    const location = useLocation().pathname.toLowerCase();
    const paths = ["/login", "/registerlogin", "/register", "/sucesspayment/", "/cancelpayment/", "/postsucesspayment"];
    if (paths.some(path => location.includes(path))) {
        return null
    } else {
        return (
            <>
                <Navbar id="Navbar" fixed="bottom"
                    className="d-flex justify-content-evenly">
                    <div className="d-flex flex-column align-items-center">
                        <Link style={{ color: 'white', textDecoration: 'none', textAlign: 'center' }} className='link-navbar' to='/'>
                            <img src={homelogo} alt="" />
                            <span>Home</span>
                        </Link>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <Link style={{ color: 'white', textDecoration: 'none', textAlign: 'center' }} className='link-navbar' to='/search'>
                            <img src={lupa} alt="" />
                            <span>Search</span>
                        </Link>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <Link style={{ color: 'white', textDecoration: 'none', textAlign: 'center' }} className='link-navbar' to='/user/mygifts'>
                            <img src={gift} alt="" />
                            <span>MyGiftys</span>
                        </Link>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <Link style={{ color: 'white', textDecoration: 'none', textAlign: 'center' }} className='link-navbar' to='/menu'>
                            <img src={profile} alt="" />
                            <span>Profile</span>
                        </Link>
                    </div>
                </ Navbar>
                <div className='margin-bottom-app'></div>
            </>
        );
    }
}

export default NavBar;