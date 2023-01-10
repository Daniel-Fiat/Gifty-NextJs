import InitAxios from './InitAxios.service';

class ReviewAPI extends InitAxios {
    constructor() {
        super('review');
    }
    newReview(body) {
        return this.axios.post(`/new`, body)
            .then((response) => response.data)
            .catch({ error: "error" });
    }
    getByProduct(idProduct) {
        return this.axios.get(`/review/${idProduct}`)
            .then((response) => response.data)
            .catch({ error: "error" });
    }

}
export default new ReviewAPI();