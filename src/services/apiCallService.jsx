import { BASEAPIURL } from "../environments";

/**
 * 
 * @param {*} url 
 * @param {*} method 
 * @param {*} abort 
 * @param {*} body 
 * @param {*} headers 
 * @param {*} options 
 * @returns 
 */
export const request = async (url, method = 'GET', abort, body = {}, headers = {}, options = {}) => {
    try {
        /**
     * SET CUSTOM OPTIONS
     */
        Object.keys(options).includes('mode') ? options : options = { ...options, mode: "no-cors" };
        Object.keys(options).includes('cache') ? options : options = { ...options, cache: "no-cache" };
        Object.keys(options).includes('credentials') ? options : options = { ...options, credentials: "omit" };
        Object.keys(options).includes('referrerPolicy') ? options : options = { ...options, referrerPolicy: "no-referrer" };
        Object.keys(options).includes('redirect') ? options : options = { ...options, redirect: "follow" };

        /**
         * SET DEFAULT HEADERS
         */
        Object.keys(headers).includes('Content-Type') ? headers : headers = { ...headers, 'Content-Type': "application/json" };
        
        /**
         * @todo ADD AUTHORIZATION FOR PROTECTED REQUEST
         */

        let endpointUrl = `${BASEAPIURL}${url}`;

        if (method === 'GET' || method === 'HEAD') {
            const response = await fetch(endpointUrl, {
                method,
                ...options,
                signal: abort,
                headers,
            });
    
            const data = response.json();
    
            if (!data.ok) return "Network Error: ";
            return data;
        }

        const response = await fetch(endpointUrl, {
            method,
            ...options,
            body: JSON.stringify(body),
            signal: abort,
            headers,
        });

        const data = response.json();

        if (!data.ok) return "Network Error: ";
        return data;

    } catch (e) {
        console.log(e);
        return "Error: " + e.message
    }
}