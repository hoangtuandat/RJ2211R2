import axiosClient from "../commons/AxiosClient";
const loginAPI = {
    logIn : (params) => {
        return axiosClient.post("/auth",params);
    },
}
export default loginAPI;