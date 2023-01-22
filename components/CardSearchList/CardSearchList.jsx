import Image from "next/image";
import Link from "next/link";
import { Col } from "react-bootstrap";
import style from './CardSearchList.module.css';

const CardSearchList = ({ _id, img, title, path }) => {
    return (
        <Col className={style.cardSearch} xs="4" lg="4">
            <Link href={path}>
                <div key={_id}>
                    <figure>
                        <Image
                            width={100}
                            height={96}
                            src={img} alt="" />
                        <figcaption>{title}</figcaption>
                    </figure>
                </div>
            </Link>
        </Col>
    )
}
export default CardSearchList;
