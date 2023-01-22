import style from '../../styles/myGiftsPage.module.css'
import { useState, useEffect, useContext } from 'react';
import OrderAPI from '../../services/order.service'
import { AuthContext } from '../../context/auth.context';
import CardMyGiftsList from '../../components/CardMyGiftsList/CardMyGiftsList';

const Mygifts = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        if (user) {
            OrderAPI.getByClient(user._id).then(orders => {
                setOrders(orders)
            })
        }
    }, [user])


    return (
        <>
            <h1 id={style.mygiftsTitle}>My giftys</h1>
            {orders.length ?
                orders.map(order => {
                    return (
                        <>
                            <CardMyGiftsList id="card" order={order}>
                            </CardMyGiftsList>
                        </>
                    )
                })
                :
                <h1>Todavia no regalaste nada</h1> // completar con un boton que lleve a busqueda o algo. y una imagen gifty? 
            }

        </>
    );

}

export default Mygifts;