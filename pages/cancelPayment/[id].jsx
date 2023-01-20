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
const CancelPayment = () => {
    const navigate = useRouter();
    const { id } = navigate.query;
    useEffect(() => {
        console.log(id)
        OrderApi.updateState(id, "pendingPayment")
        setTimeout(() => {
            navigate.push("/");
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
                <h1>¡Cancel Payment!</h1>
                <Image
                    className={style.elipseBlueDown}
                    src={elipseBlueDown}
                    alt="elipseBlueDown" />
                <Image
                    className={style.elipseYellowDown}
                    src={elipseYellowDown}
                    alt="elipseYellowDown" />
            </div>
        </Row>
    )
}
export default CancelPayment;