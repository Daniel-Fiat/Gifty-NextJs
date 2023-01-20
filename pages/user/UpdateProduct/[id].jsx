import style from '../../../styles/EditProductPage.module.css'
import ProductApi from '../../../services/product.service'
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/auth.context';
import { Row } from 'react-bootstrap';

import { useRouter } from 'next/router'

const Register = () => {
    const navigate = useRouter();
    const [Product, setProduct] = useState({})
    const [UpdateProduct, setUpdateProduct] = useState(Product)
    const [chanceState, setChance] = useState(undefined)
    const [categoryState, setCategory] = useState(undefined)
    const { id } = useRouter().query
    const { user } = useContext(AuthContext);


    useEffect(() => {
        ProductApi.getOneProduct(id)
            .then(product => {
                setProduct(product)
                setCategory(product.category[0])
                setChance(product.chance[0])
            })


    }, [id])

    const updateNewProduct = (event) => {
        event.preventDefault()
        UpdateProduct.sellerUser = user._id
        ProductApi.updateProduct(UpdateProduct, Product._id)
            .then(navigate.push('/menu'))
    }

    const handleFileUpload = (e) => {
        const uploadData = new FormData();
        uploadData.append("imageUrl", e.target.files[0]);
        ProductApi
            .uploadImage(uploadData)
            .then(response => {
                console.log("response is:" + response.fileUrl)
                setUpdateProduct({ ...UpdateProduct, imgUrl: response.fileUrl })
            })
            .catch(err => console.log("Error while uploading the file: ", err));
    };

    const updateNewProductState = (event) => {
        const { name, value } = event.target
        setProduct({ ...Product, [name]: value });
        setUpdateProduct({ ...UpdateProduct, [name]: value });
    }

    const deleteProduct = (event) => {
        event.preventDefault()
        ProductApi.deleteOneProduct(Product._id)
            .then(navigate.push('/user/catalog'))
    }

    return (
        <Row className={style.updateproductformcontainer}>
            <div id={style.Updateproductformcontainer}>
                <h1>Update Product</h1>
                <form id={style.Updateproductform} onSubmit={updateNewProduct} >
                    <label htmlFor="">Name</label>
                    <input className={style.editproductInput}
                        onChange={updateNewProductState}
                        type='text'
                        name='name'
                        placeholder='name'
                        value={Product.name}>
                    </input>
                    <label htmlFor="">Image</label>
                    <input className={style.editproductInput} type="file" name='imgUrl' onChange={(e) => handleFileUpload(e)} />
                    <label htmlFor="">Description</label>
                    <input className={style.editproductInput}
                        onChange={updateNewProductState}
                        type='text'
                        name='description'
                        placeholder='description'
                        value={Product.description}>
                    </input>
                    <label htmlFor="">Price</label>
                    <input className={style.editproductInput}
                        onChange={updateNewProductState}
                        type='text'
                        name='price'
                        placeholder='price'
                        value={Product.price}>
                    </input>
                    {
                        Product &&
                        <>
                            <label htmlFor="">category</label>
                            <select onChange={updateNewProductState} name="category" className={style.editproductInput}>
                                <option value="breakfast" selected={categoryState === "breakfast"}>breakfast</option>
                                <option value="cakes" selected={categoryState === "cakes"}>cakes</option>
                                <option value="tapas" selected={categoryState === "tapas"}>tapas</option>
                                <option value="flowers" selected={categoryState === "flowers"}>flowers</option>
                                <option value="drinks" selected={categoryState === "drinks"}>drinks</option>
                                <option value="objects" selected={categoryState === "objects"}>objects</option>
                            </select>
                            <label htmlFor="">chance</label>
                            <select onChange={updateNewProductState} name="chance" className={style.editproductInput}>
                                <option value="birthday" selected={chanceState === "birthday"}>birthday</option>
                                <option value="anniversary" selected={chanceState === "anniversary"}>anniversary</option>
                                <option value="Valentine" selected={chanceState === "Valentine"}>Valentine</option>
                                <option value="graduation" selected={chanceState === "graduation"}>graduation</option>
                            </select>
                        </>
                    }
                    <button type="submit" id={style.registerBoton}>Update Product</button>
                </form>
                <form id={style.Updateproductform} onSubmit={deleteProduct}>
                    <button type="submit" id={style.registerBoton}>Delete Product</button>
                </form>
            </div>
        </Row>
    );

}

export default Register;