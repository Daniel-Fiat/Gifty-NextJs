import Image from "next/image";
import Link from "next/link";
import { Col } from "react-bootstrap";

//import './CardProductSearchList.css';

const CardProductSearchList = ({ product }) => {
    return (
        <Col className="card-search-product" xs="4" lg="4">
            <Link to={`/product/${product._id}`}>
                <div>
                    <Image src={product.imgUrl} alt="" />
                    <p className="title">{product.name.length > 22 ?
                        product.name.substring(0, 20) + "..." :
                        product.name}</p>
                    <p className="price">{product.price}€</p>
                    <p id="homeRating" className="rating">⭐{product.rating}.0</p>
                </div>
            </Link>
        </Col >
    )
}
export default CardProductSearchList;