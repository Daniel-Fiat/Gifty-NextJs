import style from '../../styles/CatalogPage.module.css'
import { useState, useEffect, useContext } from 'react';
import ProductAPI from '../../services/product.service'
import { Row } from "react-bootstrap";
import { AuthContext } from '../../context/auth.context';
import CardCatalogList from '../../components/CardCatalogList/CardCatalogList';
import Link from 'next/link';

const Search = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([])

    useEffect(() => {
        if (user) {
            ProductAPI.getCatalog(user._id).then(products => {
                setProducts(products)
            })

        }
    }, [])

    return (
        <div >
            <Row id={style.buttonContainer}>
                <Link id={style.newProductButton} href={'/user/CreateProduct'}>New Product</Link>
            </Row>
            <Row>
                {
                    products.map(product => {
                        return (

                            <CardCatalogList key={product._id} id="card" product={product}></CardCatalogList>
                        )
                    })
                }
            </Row>
        </div >
    );

}

export default Search;