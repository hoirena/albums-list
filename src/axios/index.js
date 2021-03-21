import axios from "axios";
import config from "../config";

const env = config[process.env.NODE_ENV];

const axiosInstance = axios.create({
    baseURL: env.baseURL,
});

export default axiosInstance;
