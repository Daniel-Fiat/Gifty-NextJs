import InitAxios from "./InitAxios.service";

class OrderAPI extends InitAxios {
    constructor() {
        super('orders');
    }
    getBySeller(id) {
        return this.axios.get(`/seller/${id}`)
            .then((response) => response.data)
            .catch({ error: "error" })
    }
    getByClient(id) {
        return this.axios.get(`/client/${id}`)
            .then((response) => response.data)
            .catch({ error: "error" })
    }
    newOrder(body) {
        return this.axios.post(`/new`, body)
            .then((response) => response.data)
            .catch({ error: "error" });
    }
    updateState(id, state) {
        return this.axios.put(`/update/${id}`, { state: state })
    }
}
export default new OrderAPI();