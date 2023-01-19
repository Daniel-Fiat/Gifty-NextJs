import Image from "next/image";
import Link from "next/link";
import { Col } from "react-bootstrap";

import style from './CardCatalogList.module.css';

const CardCatalogList = ({ product }) => {
    return (
        <Col className={style.cardsearchproduct} xs="4" lg="4">
            <Link href={`/user/UpdateProduct/${product._id}`}>
                <div key={product._id}>
                    <Image
                        src={product.imgUrl}
                        className={style.cardsearchproductimg}
                        width={10}
                        height={10}
                        alt="" />
                    <p className={style.title}>{product.name}</p>
                    <p className={style.price}>{product.price}€</p>
                    <p className={style.rating}>{'⭐'.repeat(product.rating)}</p>
                </div>
            </Link>
        </Col >
    )
}
export default CardCatalogList;