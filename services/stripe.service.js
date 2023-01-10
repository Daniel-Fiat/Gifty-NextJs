import initAxios from "./InitAxios.service"

class StripeAPI extends initAxios {
    constructor() {
        super('stripe')
    }
    checkout(body) {
        return this.axios.post('/checkout', body)
            .then(response => response.data)
            .catch({ error: "error" });
    }
}
export default new StripeAPI(); 