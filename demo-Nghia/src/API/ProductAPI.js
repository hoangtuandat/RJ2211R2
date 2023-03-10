import AxiosClient from "../commons/AxiosClient";

// call API
const url = "/product"
const productAPI = {
    getAll : () => {
        return AxiosClient.get(url);
    },
    getById : (id) => {
        return AxiosClient.get(`${url}/${id}`);
    },
    delete : (id) => {
        return AxiosClient.delete(`${url}/${id}`);
    },
    create: (params) => {
        return AxiosClient.post(url, params)
    },
    update: (params) => {
        return AxiosClient.put(url, params)
    },
}

export default productAPI;