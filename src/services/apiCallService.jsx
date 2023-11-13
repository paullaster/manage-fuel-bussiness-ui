import { axiosInstance } from "./axios";
/**
 * 
 * @param {*Object} options - object of options:
 * url -property is the only mandatory property of the option
 * GET - default method.
 * options object accepts any axios valid request configuration properties
 * @returns 
 */
export const _request = async (options) => {
    try {
        return axiosInstance.request(options);
    } catch (e) {
    console.log("Requested failed", e);
        return "Error: " + e
    } finally {
        // axiosInstance.defaults.timeout = 0;
        console.log("Request completed");
    }
}
