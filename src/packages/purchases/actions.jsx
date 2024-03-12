import { _request } from '@/services';
import constants from './constants';
import WebStorage from '@/utils/WebStorage';
import { APPNAME } from '@/environments';

const { address, billing, contact, vendor, currency, purchase_item, fuelPurchase, fuelType, purchaseItem, officer, companyTankData } = constants;

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
    const data = {
        ...item,
    }
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

// FETCH ITEMS
export const fetchItemsList = async(params = {}) => {
    return await _request({url: purchaseItem, method: 'GET', params, headers: {'Content-Type': 'application/json'}});
}


// FETCH OFFICERS
export const fetchOfficersList = async(params = {}) => {
    return await _request({url: officer, method: 'GET', params, headers: {'Content-Type': 'application/json'}});
}

// FETCH COMPANY TANK DATA
export const fetchCompanyTankData = async(params = {}) => {
    return await _request({url: companyTankData, method: 'GET', params, headers: {'Content-Type': 'application/json'}});
};

export const fetchCurrencies = async(params = {}) => {
    return await _request({url: currency, method: 'GET', params, headers: {'Content-Type': 'application/json'}});
};