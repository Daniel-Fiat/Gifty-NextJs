import style from '../../styles/RegisterLoginPage.module.css'
import elipseBlueUp from '../../public/assets/ElipseAzulArriba.png';
import elipsePinkUp from '../../public/assets/ElipseRosaArriba.png';
import elipseBlueDown from '../../public/assets/ElipseAzulAbajo.png';
import elipseYellowDown from '../../public/assets/ElipseAmarillaAbajo.png';

import { Row } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

const RegisterLogin = () => {
    return (
        <Row>
            <div className={style.registerFormContainer}>
                <Image
                    className={style.elipseBlueUp}
                    src={elipseBlueUp}
                    alt="" />
                <Image
                    className={style.elipsePinkUp}
                    src={elipsePinkUp}
                    alt="" />
                <div id={style.registerForm}>
                    <h1>Bienvenido</h1>
                    <p>Para poder hacer tu regalo necesitas estar registrado</p>
                    <Link href={'/login'}><button id={style.registerBoton}>Login</button></Link>
                    <Link href={'/register'}><button id={style.registerBoton}>Register</button></Link>
                </div>
                <Image
                    className={style.elipseBlueDown}
                    src={elipseBlueDown}
                    alt="" />
                <Image
                    className={style.elipseYellowDown}
                    src={elipseYellowDown}
                    alt="" />
            </div>
        </Row>
    );
}

export default RegisterLogin;