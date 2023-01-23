import Link from "next/link"
import { AuthContext } from '../../context/auth.context';
import { useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Image from "next/image";


import ReviewAPI from '../../services/review.service'
import ProductAPI from '../../services/product.service'
import UserApi from '../../services/user.service'

import wishTrue from '../../public/assets/Corazon-rojo.png';
import wishFalse from '../../public/assets/Corazon-Blanco.png';
import startRanting from '../../public/assets/StarRating.png';





const ProductDetail = () => {
    const [validateWishList, setValidateWishList] = useState()
    const [product, setProduct] = useState({})
    const [reviews, setReviews] = useState()
    const { user } = useContext(AuthContext)

    const router = useRouter()
    useEffect(() => {
        if (router.isReady) {
            ProductAPI.getOneProduct(router.query.id)
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
        }
    }, [router.isReady, router.query.id, user])

    useEffect(() => {
        if (router.isReady) {
            ReviewAPI.getByProduct(router.query.id).then(reviews => {
                setReviews(reviews)
            })
        }
    }, [router.isReady, router.query.id])

    const removeWishList = (event) => {
        event.preventDefault()
        if (user) {
            UserApi.removeWishList(user._id, router.query.id).then()
            const newvalidate = false
            setValidateWishList(newvalidate)
        }
    }

    const addWishList = (event) => {
        event.preventDefault()
        if (user) {
            UserApi.addWishList(user._id, router.query.id).then()
            const newvalidate = true
            setValidateWishList(newvalidate)
        }
    }

    return (
        <>
            {

                <div id="ProductCard">
                    <h1 id="titleCard">{product.name}</h1>
                    <figure id='figure-imgProduct'>
                        <Image
                            id="IMGproduct"
                            width={450}
                            height={500}
                            src={product.imgUrl}
                            alt="esto" />
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
                    <p id='DetailsProduct' >{product.description}</p>
                    <h1>                                        <Image
                        src={startRanting}
                        alt={wishTrue}
                        id="StartRating"
                        height={20}
                        width={17} />{product.rating}</h1>
                    <span id='PriceSpan'>{`${product.price} €`}</span>
                </div>

            }
            <div id='Gift-boton'>
                {
                    user ?
                        <Link href={`/gifty/${product._id}`}>
                            Regalar
                        </Link> :
                        <Link href={`/registerLogin`}>
                            Regalar
                        </Link>

                }
            </div>
            {reviews && <h5>reviews</h5>}
            {reviews?.map(review => {
                return (

                    <div key={review._id}>
                        <div class="card">
                            <div class="card-header">
                                {"⭐".repeat(review.rating)}
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{review.userId.email}</h5>
                                <p class="card-text">{review.comment}</p>
                                <small> {review.createdAt}</small>
                            </div>
                        </div>
                    </div>

                )
            })}


        </>
    );

}

export default ProductDetail;

