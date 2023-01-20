import style from '../../styles/CreateProduct.module.css'
import ProductApi from '../../services/product.service'
import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../../context/auth.context';
import { Row } from 'react-bootstrap';

const CreateProduct = () => {
    const { user } = useContext(AuthContext);
    const navigate = useRouter();
    const [Product, setProduct] = useState({})

    const createNewProduct = (event) => {
        event.preventDefault()
        Product.sellerUser = user._id
        ProductApi.createProduct(Product).then(
            navigate.push('/menu')
        )
    }
    const handleFileUpload = (e) => {
        const uploadData = new FormData();
        uploadData.append("imageUrl", e.target.files[0]);
        ProductApi
            .uploadImage(uploadData)
            .then(response => {
                setProduct({ ...Product, imgUrl: response.fileUrl })
            })
            .catch(err => console.log("Error while uploading the file: ", err));
    };
    const updateNewProduct = (event) => {
        const { name, value } = event.target;
        setProduct({ ...Product, [name]: value });
    }

    return (
        <Row className='Newproduct-form-container'>
            <div id="Newproduct-form">
                <h1>New Product</h1>
                <form onSubmit={createNewProduct} >
                    <input className='NewproductInput'
                        onChange={updateNewProduct}
                        type='text'
                        name='name'
                        placeholder='name'>
                    </input>
                    <input className='NewproductInput' type="file" name='imgUrl' onChange={(e) => handleFileUpload(e)} />
                    <textarea className='NewproductInput'
                        onChange={updateNewProduct}
                        name='description'
                        rows="4"
                        cols="40"
                        placeholder='description'>
                    </textarea>
                    <input className='NewproductInput'
                        onChange={updateNewProduct}
                        type='text'
                        name='price'
                        placeholder='price'>
                    </input>
                    <label htmlFor="">Category</label>
                    <select className='NewproductInput' onChange={updateNewProduct} name="category" id="categorySelect">
                        <option value=""></option>
                        <option value="breakfast">breakfast</option>
                        <option value="cakes">cakes</option>
                        <option value="tapas">tapas</option>
                        <option value="flowers">flowers</option>
                        <option value="drinks">drinks</option>
                        <option value="objects">objects</option>
                    </select> <br />
                    <label htmlFor="">Chance</label>
                    <select className='NewproductInput' onChange={updateNewProduct} name="chance" id="categorySelect">
                        <option value=""></option>
                        <option value="birthday">birthday</option>
                        <option value="anniversary">anniversary</option>
                        <option value="Valentine">Valentine</option>
                        <option value="graduation">graduation</option>
                    </select>
                    <label htmlFor="">RangeAge</label>
                    <select className='NewproductInput' onChange={updateNewProduct} name="rangeAge" id="categorySelect">
                        <option value=""></option>
                        <option value="babyboomers">babyboomers</option>
                        <option value="generaciónX">generaciónX</option>
                        <option value="millennials">millennials</option>
                        <option value="generaciónZ">generaciónZ</option>
                        <option value="Alpha">Alpha</option>
                    </select>
                    <button type="submit" id="registerBoton">Create Product</button>
                </form>
            </div>
        </Row>
    );

}

export default CreateProduct;