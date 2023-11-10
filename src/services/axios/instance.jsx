import axios from "axios";
import { BASEAPIURL } from "../../environments";

export const instance = axios.create({
    baseURL: BASEAPIURL,
    timeout:10000,
});

export const protectedRequestInterceptor = (config) => {
 return config;
};

instance.interceptors.request.use(protectedRequestInterceptor);


export const resolvedResponseInterceptor = (response) => {
    return Promise.resolve(response);
};
export const errorResponseInterceptor = (error) => {
    console.log(error);
    //TODO: Logout user when error response has status code 401
    return Promise.reject(error);
};

instance.interceptors.response.use(resolvedResponseInterceptor, errorResponseInterceptor);