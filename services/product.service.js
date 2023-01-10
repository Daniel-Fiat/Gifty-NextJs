import InitAxios from "./InitAxios.service";

class ProductAPI extends InitAxios {
    constructor() {
        super('products');
    }

    uploadImage = (file) => {
        return this.axios.post("/uploadImage", file)
            .then((response) => response.data)
            .catch({ error: "error" });
    }

    getAllproduct(find, limit, offset, sort) {
        return this.axios.post(`/`, { find, limit, offset, sort })
            .then((response) => response.data)
            .catch({ error: "error" });
    }

    getCatalog(id) {
        return this.axios.get(`/catalog/${id}`)
            .then(response => response.data)
            .catch({ error: "error" });
    }
    getWishList(id) {
        return this.axios.get(`/wishList/${id}`)
            .then(response => response.data)
            .catch({ error: "error" });
    }

    createProduct(body) {
        return this.axios.put('/new', body)
            .then(response => response.data)
            .catch({ error: "error" });
    }

    updateProduct(body, idProduct) {
        return this.axios.put(`/edit/${idProduct}`, body)
            .then(response => response.data)
            .catch({ error: "error" });
    }

    getOneProduct(productid) {
        return this.axios.get(`/${productid}`)
            .then(response => response.data)
            .catch({ error: "error" });
    }

    deleteOneProduct(productid) {
        return this.axios.delete(`/delete/${productid}`)
            .then(response => response.data)
            .catch({ error: "error" });
    }

    getProductsByCategory(category) {
        return this.axios.get(`/category/${category}`)
            .then(response => response.data)
            .catch({ error: "error" });
    }

    getProductsBychance(chance) {
        return this.axios.get(`/chance/${chance}`)
            .then(response => response.data)
            .catch({ error: "error" });
    }
    getTopSix() {
        return this.axios.get("/TopSix")
            .then(response => response.data)
            .catch({ error: "error" });
    }
}

export default new ProductAPI();