import './CardMyGiftsList.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ReviewAPI from '../../services/review.service'
import OrderAPI from '../../services/order.service'
import { Accordion, Button } from 'react-bootstrap';
import { useState } from 'react';

const CardCatalogList = ({ order }) => {
    const [review, setReview] = useState({})
    const updateReview = (event) => {
        const { name, value } = event.target
        setReview({ ...review, [name]: value })
    }
    const createReview = (event) => {

        review.userId = order.clientUser._id
        review.product_id = order.productID._id
        ReviewAPI.newReview(review)
        OrderAPI.updateState(order._id, "review").then(

        )
    }

    return (
        <Row className="g-4">
            <Col xs={12} md={12}>
                <Card id="card-mygift">
                    <Card.Img id="img-card-mygift" variant="top" src={order.productID.imgUrl} />
                    <Card.Body>
                        <Card.Title>{order.productID.name}</Card.Title>
                        <Card.Title>Delivery Date: {order.deliverDate}</Card.Title>
                        <Card.Title>State: {order.State}</Card.Title>
                    </Card.Body>
                </Card>

                {order.State === "delivered" &&
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className='title-review-accordion'>Review</Accordion.Header>
                            <Accordion.Body>
                                <form onSubmit={createReview}>
                                    <select onChange={updateReview} name="rating" id="rating" >
                                        <option value={1}>⭐</option>
                                        <option value={2}>⭐⭐</option>
                                        <option value={3}>⭐⭐⭐</option>
                                        <option value={4}>⭐⭐⭐⭐</option>
                                        <option value={5}>⭐⭐⭐⭐⭐</option>
                                    </select>
                                    <textarea id="textareaComent" onChange={updateReview} name="comment" cols="30" rows="3"></textarea>
                                    <Button type="submit">Review</Button>
                                </form>
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                }
            </Col>
        </Row >
    )
}
export default CardCatalogList;