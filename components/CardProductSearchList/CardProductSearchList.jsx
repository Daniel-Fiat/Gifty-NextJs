import Image from "next/image";
import Link from "next/link";
import { Col } from "react-bootstrap";
import Style from '../../styles/CardProductSearchList.module.css'

//import './CardProductSearchList.css';

const CardProductSearchList = ({ product }) => {
    return (
        <Col className={Style.cardsearchproduct} xs="4" lg="4">
            <Link href={`/product/${product._id}`}>
                <div>
                    <Image
                        src={product.imgUrl}
                        height={100}
                        width={100}
                        alt={`img${product.name}`}
                    />
                    <p className="title">{product.name.length > 22 ?
                        product.name.substring(0, 20) + "..." :
                        product.name}</p>
                    <p className="price">{product.price}€</p>
                    <p id={Style.homeRating} className="rating">⭐{product.rating}.0</p>
                </div>
            </Link>
        </Col>
    )
}
export default CardProductSearchList;