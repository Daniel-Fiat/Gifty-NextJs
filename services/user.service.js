import InitAxios from './InitAxios.service';

class UserAPI extends InitAxios {
    constructor() {
        super('user');
    }
    me(token) {
        return this.axios.get('/me', {
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then((response) => response.data);
    }
    createUser(body) {
        return this.axios.post(`/new`, body)
            .then((response) => response.data)
            .catch({ error: "error" });
    }
    login(body) {
        return this.axios.post('/login', body)
            .then((response) => response.data)
            .catch((response) => response.data);
    }
    addWishList(userId, idProduct) {
        return this.axios.put(`/wishList/add/${userId}`, { idProduct })
            .then((response) => response.data)
            .catch({ error: "error" });
    }
    removeWishList(userId, idProduct) {
        return this.axios.put(`/wishList/remove/${userId}`, { idProduct })
            .then((response) => response.data)
            .catch({ error: "error" });
    }
    getOne(userId) {
        return this.axios.get(`/${userId}`)
            .then((response) => response.data)
            .catch({ error: "error" });
    }

}
export default new UserAPI();