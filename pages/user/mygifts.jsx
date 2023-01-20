import style from '../../styles/myGiftsPage.module.css'
import { useState, useEffect, useContext } from 'react';
import OrderAPI from '../../services/order.service'
import { AuthContext } from '../../context/auth.context';
import CardMyGiftsList from '../../components/CardMyGiftsList/CardMyGiftsList';

const Mygifts = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        console.log(user)
        OrderAPI.getByClient(user._id).then(orders => {
            setOrders(orders)
        })
    }, [user])


    return (
        <>
            <h1 id={style.mygiftsTitle}>My giftys</h1>
            {
                orders.map(order => {
                    return (
                        <>
                            <CardMyGiftsList id="card" order={order}>
                            </CardMyGiftsList>
                        </>
                    )
                })
            }

        </>
    );

}

export default Mygifts;