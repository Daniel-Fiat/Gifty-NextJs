import style from '../../styles/PostSucessPayment.module.css';
import { Row } from 'react-bootstrap';


import Gift from '../../public/assets/gift.png';
import elipseBlueUp from '../../public/assets/ElipseAzulArriba.png';
import elipsePinkUp from '../../public/assets/ElipseRosaArriba.png';
import elipseBlueDown from '../../public/assets/ElipseAzulAbajo.png';
import elipseYellowDown from '../../public/assets/ElipseAmarillaAbajo.png';
import Link from 'next/link';
import Image from 'next/image';

const PostSucessPayment = () => {
    return (
        <Row>
            <div id={style.postSucessContainer}>
                <Image
                    className={style.elipseBlueUp}
                    src={elipseBlueUp}
                    alt="elipseBlueUp" />
                <Image
                    className={style.elipsePinkUp}
                    src={elipsePinkUp}
                    alt="elipsePinkUp" />
                <Image
                    id={style.imgGift}
                    src={Gift}
                    alt="Gift.png" />
                <h1 id={style.postSucessTitle}>Listo,<br />¡Ya tenés tu regalo!</h1>
                <h3 id={style.postSucessSubtitle}>¿Que hacemos ahora?</h3>
                <Link href={"/"} id={style.postSucessButtonHome}>Ir a inicio</Link>
                <Link href={"/user/mygifts"} id={style.postSucessButtonGifts}>Ir a mis regalos</Link>
                <Image
                    className={style.elipseBlueDown}
                    src={elipseBlueDown}
                    alt="elipseBlueDown" />
                <Image
                    className={style.elipseYellowDown}
                    src={elipseYellowDown}
                    alt="elipseYellowDown" />
            </div>
        </Row >
    );
}
export default PostSucessPayment;