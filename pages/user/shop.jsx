
import OrderAPI from '../../services/order.service'
import { AuthContext } from '../../context/auth.context'
import { useContext, useEffect, useState } from 'react'
import CardMyShop from '../../components/CardMyShopList/CardMyShopList'
import { Row } from 'react-bootstrap'
const MyShop = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        OrderAPI.getBySeller(user._id).then(orders => {
            const data = orders.filter(order => order.State !== "pendingPayment")
            setOrders(data)
        })
    }, [])
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