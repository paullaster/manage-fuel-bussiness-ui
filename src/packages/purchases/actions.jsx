import { _request } from '@/services';
import constants from './constants';
import WebStorage from '@/utils/WebStorage';
import { APPNAME } from '@/environments';


const { address, billing, contact, vendor, currency, purchaseItem } = constants;
let idObject = {};

export const postBillingInformation = async (payload) => {
    const data = {
        ...payload,
        organization_id: "1",
    };
    _request({
        method: 'POST',
        data: data,
        url: billing,
    })
        .then((res) => {
            console.log(res);
            idObject = WebStorage.GetFromWebStorage('session', `${APPNAME}_VENDOR_DEPENDENCY_KEYS`);
            if (!idObject['currency_id']) {
                console.error("Invalid payload, currency information did not insert correctly!");
                throw new Error("Invalid payload, Currency information did no insert correctly!");
            }
            idObject.billing_id = res?.id
            WebStorage.storeToWebDB('session', `${APPNAME}_VENDOR_DEPENDENCY_KEYS`, idObject);
            return res;
        })
        .catch((err) => {
            return new Error(err.message);
        })
}

const addresses = [];
export const postAddress = async (payload) => {
    const data = {
        ...payload,
        organization_id: "1",
    };
    _request({
        method: 'POST',
        data: data,
        url: address,
    })
        .then((res) => {
            idObject = WebStorage.GetFromWebStorage('session', `${APPNAME}_VENDOR_DEPENDENCY_KEYS`);
            console.log(idObject);
            if (!idObject['billing_id'] || !idObject['currency_id']) {
                console.error("Invalid payload, Billing and currency  information did no insert correctly!");
                throw new Error("Invalid payload, Billing and currency information did no insert correctly!");
            }
            addresses.push(res?.address_id);
            idObject.addresses = addresses;
            WebStorage.storeToWebDB('session', `${APPNAME}_VENDOR_DEPENDENCY_KEYS`, idObject);
            return res;
        })
        .catch((err) => {
            return new Error(err.message);
        });
}
const contacts = [];
export const postContactPerson = async (data) => {
    const contactInfo = {
        ...data,
        organization_id: '1',
    }
    _request({
        method: 'POST',
        data: contactInfo,
        url: contact,
    })
        .then((res) => {
            idObject = WebStorage.GetFromWebStorage('session', `${APPNAME}_VENDOR_DEPENDENCY_KEYS`);
            idObject = Array.isArray(idObject) ? {} : idObject;
            console.log(idObject);
            contacts.push(res?.contact_id);
            idObject.contacts = contacts;
            console.log(idObject);
            WebStorage.storeToWebDB('session', `${APPNAME}_VENDOR_DEPENDENCY_KEYS`, idObject);
            return res;
        })
        .catch((err) => {
            return new Error(err.message);
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
    _request({
        method: 'POST',
        data: data,
        url: vendor,
    })
        .then((res) => {
            console.log(res);
            return res;
        })
        .catch((error) => {
            console.log(error);
        });
};


export const postingPurchaseItem = async(payload) =>{
    return await _request({method: 'POST', url: purchaseItem, data: payload});
}


// FETCH VENDORS
export const fetchVendorsList = async() => {
    return await _request({method: 'GET', params: {/*organization_id: '1',*/ limit: 10}, url: vendor});
}