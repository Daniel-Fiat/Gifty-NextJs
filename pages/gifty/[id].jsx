import style from '../../styles/giftyProductPage.module.css'
import { AuthContext } from '../../context/auth.context';
import { useContext, useEffect, useState } from "react";
import ProductAPI from '../../services/product.service'
import UserApi from '../../services/user.service'
import OrderApi from '../../services/order.service'
import StripeAPI from '../../services/stripe.service'
import wishTrue from '../../public/assets/Corazon-rojo.png';
import wishFalse from '../../public/assets/Corazon-Blanco.png';
import { useRouter } from 'next/router';
import { Accordion } from 'react-bootstrap';
import Image from 'next/image';


const GiftyProduct = () => {
    const [validateWishList, setValidateWishList] = useState()
    const [product, setProduct] = useState({})
    const [order, setOrder] = useState({})
    const [adress, setAdress] = useState({})
    const { user } = useContext(AuthContext)
    const { id } = useRouter().query
    const ORIGIN = 'https://gifty-seven.vercel.app/'

    useEffect(() => {
        ProductAPI.getOneProduct(id)
            .then(productRes => {
                return productRes
            })
            .then((productRes) => {
                setProduct(productRes)
                if (user) {
                    UserApi.getOne(user._id).then(userApi => {
                        const newvalidate = userApi.wishList.includes(productRes._id)
                        setValidateWishList(newvalidate)
                    })
                }
            })
    }, [validateWishList, user, id])

    const updateOrder = (event) => {
        const { name, value } = event.target
        setOrder({ ...order, [name]: value })

    }

    const updateAdress = (event) => {
        const { name, value } = event.target
        setAdress({ ...adress, [name]: value })

    }

    const removeWishList = (event) => {
        event.preventDefault()
        UserApi.removeWishList(user._id, id).then()
        const newvalidate = false
        setValidateWishList(newvalidate)
    }

    const addWishList = (event) => {
        event.preventDefault()
        UserApi.addWishList(user._id, id).then()
        const newvalidate = true
        setValidateWishList(newvalidate)
    }

    const CreateOrder = (event) => {
        event.preventDefault()

        const body = {
            "price": product.price,
            "sellerUser": product.sellerUser._id,
            "clientUser": user._id,
            "productID": product._id,
            "dedication": order.dedication,
            "deliverDate": `${order.date}`,
            "State": "pendingPayment",
            "deliveryAddress": adress,
        }
        OrderApi.newOrder(body).then(res => {

            const checkout = {
                "line_items": [
                    {
                        "price_data": {
                            "currency": "usd",
                            "product_data": {
                                "name": product.name
                            },
                            "unit_amount": product.price * 100
                        },
                        "quantity": 1
                    }],
                "mode": "payment",
                "success_url": `${ORIGIN}sucessPayment/${res._id}`,
                "cancel_url": `${ORIGIN}cancelPayment/${res._id}`

            }
            StripeAPI.checkout(checkout).then(res => window.location.href = res.url)
        })

    }

    return (
        <div id="ProductCard">
            <div>
                <h1 id="titleCard">Your Gift</h1>
                <figure id='figure-imgProduct'>
                    <img id="IMGproduct" src={product.imgUrl} alt="esto" />
                    <figcaption>
                        {validateWishList ?
                            (<form onSubmit={removeWishList}>
                                <button type="submit">
                                    <Image
                                        src={wishTrue}
                                        alt={wishTrue}
                                        height={30}
                                        width={100} />
                                </button>
                            </form>)
                            :
                            (<form onSubmit={addWishList}>
                                <button type="submit">
                                    <Image
                                        src={wishFalse}
                                        alt={wishFalse}
                                        height={30}
                                        width={100} />
                                </button>
                            </form>)

                        }
                    </figcaption>
                </figure>
                <p id='DetailsProduct' >{product.name}</p>
                <span id='PriceSpan'>{`${product.price} €`}</span>
            </div>
            <form id="formRegalo" onSubmit={CreateOrder}>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Escribe tu dedicatoria</Accordion.Header>
                        <Accordion.Body>
                            <textarea
                                id={style.TextareaDedicat}
                                name="dedication"
                                rows="4"
                                cols="40"
                                onChange={updateOrder}
                            ></textarea>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Fecha y Hora</Accordion.Header>
                        <Accordion.Body>
                            <input id={style.dateInput} onChange={updateOrder} type="datetime-local" name="date" />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Direccion</Accordion.Header>
                        <Accordion.Body>
                            <label className='col-6' >Calle</label>
                            <input id={style.FormInput} className='col-6' onChange={updateAdress} type="text" name="street" />
                            <label className='col-6' >Numero</label>
                            <input id={style.FormInput} className='col-6' onChange={updateAdress} type="text" name="number" />
                            <label className='col-6'>Piso</label>
                            <input id={style.FormInput} className='col-6' onChange={updateAdress} type="text" name="floor" />
                            <label className='col-6'>Puerta</label>
                            <input id={style.FormInput} className='col-6' onChange={updateAdress} type="text" name="door" />
                            <label className='col-6'>Ciudad</label>
                            <input id={style.FormInput} className='col-6' onChange={updateAdress} type="text" name="city" />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <div id={style.UpdateproductForm} >
                    <button type="submit" id={style.createOrderBoton}>Create Order</button>
                </div>
            </form>
        </div>
    );


}

export default GiftyProduct;