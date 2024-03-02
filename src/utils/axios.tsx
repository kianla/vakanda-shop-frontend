import axios from "axios";

const HOST_API = 'http://localhost:3000'

const axiosInstance = axios.create({
    baseURL: HOST_API,
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export default axiosInstance;