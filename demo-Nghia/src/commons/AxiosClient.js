
import axios from "axios";

const AxiosClient = axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    "Content-Type": "application/json; charset = utf-8",
  },
  paramsSerializer: params => params,
});

AxiosClient.interceptors.request.use(async (config) => {
  return config;
});

AxiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response;
  },
  (error) => {
    throw error;
  }
);

export default AxiosClient;
