import checkGreen from '../../public/assets/check-green.gif';
import elipseBlueUp from '../../public/assets/ElipseAzulArriba.png';
import elipsePinkUp from '../../public/assets/ElipseRosaArriba.png';
import elipseBlueDown from '../../public/assets/ElipseAzulAbajo.png';
import elipseYellowDown from '../../public/assets/ElipseAmarillaAbajo.png';
import OrderApi from '../../services/order.service'
import style from '../../styles/SucessPaymentPage.module.css';
import { Row } from 'react-bootstrap';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const SucessPayment = () => {
    const navigate = useRouter();
    const { id } = navigate.query;
    console.log(id)
    useEffect(() => {

        OrderApi.updateState(id, "pendingConfirmation").then();
        setTimeout(() => {
            navigate.push("/postSucessPayment");
        }, 3000);
    }, [id, navigate])
    return (
        <Row>
            <div className={style.sucessPaymentContainer}>
                <Image
                    className={style.elipseBlueUp}
                    src={elipseBlueUp}
                    alt="elipseBlueUp" />
                <Image
                    className={style.elipsePinkUp}
                    src={elipsePinkUp}
                    alt="elipsePinkUp" />
                <h1>¡Sucess Payment!</h1>
                <Image
                    id={style.checkGreen}
                    src={checkGreen}
                    alt="Check Green"
                    loop="1" />
                <Image
                    className={style.elipseBlueDown}
                    src={elipseBlueDown}
                    alt="elipseBlueDown" />
                <Image
                    className={style.elipseYellowDown}
                    src={elipseYellowDown}
                    alt="elipseYellowDown" /></div>
        </Row>
    )
}
export default SucessPayment;