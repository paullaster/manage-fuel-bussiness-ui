import { _request } from '@/services';
import constants from './constants';
import WebStorage from '@/utils/WebStorage';
import { APPNAME } from '@/environments';


const { address, billing, contact, vendor, currency, purchaseItem } = constants;

export const postBillingInformation = async (payload) => {
    const data = {
        ...payload,
        organization_id: "1",
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
        organization_id: "1",
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
        organization_id: '1',
    }
    return await _request({
        method: 'POST',
        data: contactInfo,
        url: contact,
    });
}

export const postCurrency = (item) => {
    const data = {
        ...item,
        organization_id: '1',
    };
    _request({
        method: "POST",
        data: data,
        url: currency,
    })
        .then((res) => {
            console.log(res);
            idObject.currency_id = res?.currency_id;
            WebStorage.storeToWebDB('session', `${APPNAME}_VENDOR_DEPENDENCY_KEYS`, idObject);
        })
        .catch((error) => {
            console.log(error);
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
        organization_id: '1',
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
    return await _request({method: 'POST', url: purchaseItem, data: payload});
}


// FETCH VENDORS
export const fetchVendorsList = async(params = {}) => {
    return await _request({method: 'GET', params, url: vendor});
}