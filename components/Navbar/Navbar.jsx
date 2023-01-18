import Image from 'next/image';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import homelogo from '../../public/assets/Boton1.png';
import lupa from '../../public/assets/lupa.png';
import profile from '../../public/assets/perfil.png';
import gift from '../../public/assets/regalos.png';
import Style from './Navbar.module.css';

function NavBar() {
    return (
        <>
            <Navbar id={Style.Navbar}
                fixed="bottom"
                className=" navbar d-flex justify-content-evenly">
                <Link href={'/'} id={Style.Link}>
                    <div id={Style.Navbardiv} className="d-flex flex-column align-items-center">
                        <Image src={homelogo} alt="" id={Style.Image} />
                        <span>Home</span>
                    </div>
                </Link>
                <Link href={'/'} id={Style.Link}>
                    <div className="d-flex flex-column align-items-center">
                        <Image src={lupa} alt="" id={Style.Image} />
                        <span>Search</span>
                    </div>
                </Link>
                <Link href={'/'} id={Style.Link}>
                    <div className="d-flex flex-column align-items-center">
                        <Image src={gift} alt="" id={Style.Image} />
                        <span>MyGiftys</span>
                    </div>
                </Link>
                <Link href={'/'} id={Style.Link}>
                    <div className="d-flex flex-column align-items-center">
                        <Image src={profile} alt="" id={Style.Image} />
                        <span>Profile</span>
                    </div>
                </Link>
            </ Navbar>
            <div className='margin-bottom-app'></div>
        </>

    )


}

export default NavBar;