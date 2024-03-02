import { _request } from '@/services';
import constants from './constants';
import WebStorage from '@/utils/WebStorage';
import { APPNAME } from '@/environments';

const { address, billing, contact, vendor, currency, purchase_item, fuelPurchase, fuelType } = constants;

export const postBillingInformation = async (payload) => {
    const data = {
        ...payload,
    };
    return await _request({
        method: 'POST',
        data: data,
        url: billing,
    });
}

export const postAddress = async (payload) => {
    const data = {
        ...payload,
    };
    return await _request({
        method: 'POST',
        data: data,
        url: address,
    });
}

export const postContactPerson = async (data) => {
    const contactInfo = {
        ...data,
    }
    return await _request({
        method: 'POST',
        data: contactInfo,
        url: contact,
    });
}

export const postCurrency = async (item) => {
    return await _request({
        method: "POST",
        data: item,
        url: currency,
    });
}
export const postVendor = async (item) => {
    const objectKeys = WebStorage.GetFromWebStorage('session', `${APPNAME}_VENDOR_DEPENDENCY_KEYS`);
    if (Object.keys(objectKeys).length !== 4) {
        console.error("Missing dependency key, please check your data then send again");
        throw new Error("Missing dependency key, please check you data then send again");
    }
    const nullKey = Object.keys(objectKeys).filter((key) => {
        return !objectKeys[key];
    });

    if (nullKey.length) {
        console.error("Missing dependency key, please check your data then send again");
        throw new Error("Missing dependency key, please check you data then send again");
    }
    const data = {
        ...item,
        ...objectKeys
    }
    console.log("sendin data to vendor", data)
    return await _request({
        method: 'POST',
        data: data,
        url: vendor,
    });
};


export const postingPurchaseItem = async(payload) =>{
    return await _request({method: 'POST', url: purchase_item, data: payload});
}
// POSTING FUEL PURCHASE
export const postingFuelPurchase = async(payload) => {
    return await _request({method: 'POST', url: fuelPurchase, data: payload});
}


// FETCH VENDORS
export const fetchVendorsList = async(params = {}) => {
    return await _request({url: vendor, method: 'GET', params, headers: {'Content-Type': 'application/json'}});
}

export const fetchFuelPurchases = async(params = {}) => {
    return await _request({method: 'GET', params, url: fuelPurchase});
}
export const fetchItemPurchases = async(params = {}) => {
    return await _request({method: 'GET', params, url: purchase_item});
}

export const fetchfuelType = async(params = {}) => {
    return await _request({method: 'GET', params, url: fuelType})
}