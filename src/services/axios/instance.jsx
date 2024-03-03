import axios from "axios";
import { BASEAPIURL } from "../../environments";
import AuthService from "@/packages/auth/AuthService";

export const instance = axios.create({
    baseURL: BASEAPIURL,
    // timeout: 10000,
});

export const protectedRequestInterceptor = (config) => {
    if (AuthService.isLoggedIn()) {
        config.headers['Authorization'] = `Bearer ${AuthService.getAccessToken()}`;
    }
    // config.headers['Content-Type'] = "application/json";
    console.log("headers", config.headers);
    return config;
};

export const errorInterceptor = (error) => {
    const errorMessage = JSON.parse(error?.request?.responseText);
    if (Object.values(errorMessage)[0][0]){
        error.message = Object.values(errorMessage)[0][0]
    };
    console.log(error);
    return Promise.reject(error);
};

instance.interceptors.request.use(protectedRequestInterceptor, errorInterceptor);


export const resolvedResponseInterceptor = (response) => {
    return Promise.resolve(response.data);
};

instance.interceptors.response.use(resolvedResponseInterceptor, errorInterceptor);