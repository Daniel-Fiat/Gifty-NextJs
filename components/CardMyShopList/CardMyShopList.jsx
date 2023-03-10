import style from './CardMyShopList.module.css'
import { Button, Card, Col, Row } from 'react-bootstrap'
import OrderAPI from '../../services/order.service'

const CardMyShop = ({ order }) => {
    const acceptedOrder = () => {
        OrderAPI.updateState(order._id, "accepted")
    }
    const rejectOrder = () => {
        OrderAPI.updateState(order._id, "reject")
    }
    const deliberyOrder = () => {
        OrderAPI.updateState(order._id, "delivered")
    }
    return (
        <Row xs={1} md={2} className={style.cardmyshop} >
            <Col>
                <Card className={style.card} >
                    <Card.Img id={style.imgCardMyShop} variant="top" src={order.productID.imgUrl} />
                    <Card.Body className={style.cardBody}>
                        <Card.Title >{order.productID.name}</Card.Title>
                        <Card.Title>Price: {order.price}€</Card.Title>
                        <Card.Title>Buyer: {order.clientUser.email}</Card.Title>
                        <Card.Title>Delivery Date: {order.deliverDate}</Card.Title>
                        <Card.Title>State: {order.State}</Card.Title>
                        <Card.Text>Message: {order.dedication}</Card.Text>
                    </Card.Body>
                </Card>
                <div id={style.buttonsMyshop}>
                    {order.State === "pendingConfirmation" &&
                        <>
                            <form onSubmit={acceptedOrder}>
                                <Button type="submit">Confirmar Pedido</Button>
                            </form>
                            <form onSubmit={rejectOrder}>
                                <Button type="submit">Rechazar Pedido</Button>
                            </form>
                        </>
                    }
                    {order.State === "accepted" &&
                        <form onSubmit={deliberyOrder}>
                            <Button type="submit">Pedido Entregado</Button>
                        </form>
                    }
                </div>
            </Col>
        </Row>
    )
}
export default CardMyShop