import axios from "axios";
import { BASEAPIURL } from "../../environments";

export const instance = axios.create({
    baseURL: BASEAPIURL,
    timeout:10000,
});

export const protectedRequestInterceptor = (config) => {
 return config;
};

export const  errorInterceptor = (error) => {
    return Promise.reject(error);
};

instance.interceptors.request.use(protectedRequestInterceptor, errorInterceptor);


export const resolvedResponseInterceptor = (response) => {
    return Promise.resolve(response.data);
};

instance.interceptors.response.use(resolvedResponseInterceptor, errorInterceptor);