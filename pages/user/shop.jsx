
import OrderAPI from '../../services/order.service'
import { AuthContext } from '../../context/auth.context'
import { useContext, useEffect, useState } from 'react'
import CardMyShop from '../../components/CardMyShopList/CardMyShopList'
import { Row } from 'react-bootstrap'
const MyShop = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        OrderAPI.getBySeller(user._id).then(orders => {
            const data = orders.filter(order => order.State !== "pendingPayment")
            setOrders(data)
        })


    }, [user])

    return (
        <>
            <Row>
                <h1 id="myshop-title">My Shop</h1>
            </Row>
            {
                orders.map(order => <CardMyShop id="card" order={order} key={order._id}>
                </CardMyShop>
                )
            }
        </>

    )
}
export default MyShop