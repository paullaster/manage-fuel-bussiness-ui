import { _request } from '@/services';
import constants from './constants';


const { address, billing, contact, vendor } = constants;
const idObject = {};

export const postBillingInformation = (payload) => {
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
            idObject.billing_id = res?.billing_id
        })
        .catch((err) => {
            return new Error(err.message);
        })
}
export const postAddress = (payload) => {
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
            console.log(res);
            idObject.address_id = res?.address_id;
        })
        .catch((err) => {
            return new Error(err.message);
        });
}

export const postContactPerson = (rows) => {
    const contacts = rows.map((row) => {
        const { id, isNew, ...payloadFields } = row;
        return {
            ...payloadFields,
            organization_id: '1',
        }

    });
    const contactLen = contacts?.length;
    contacts.forEach(async (item, index) => {
        if (contactLen - 1 === index) {
            _request({
                method: 'POST',
                data: item,
                url: contact,
            })
                .then((res) => {
                    console.log(res);
                    idObject.contact_id = res?.contact_id;
                })
                .catch((err) => {
                    return new Error(err.message);
                });
        }

        await _request({
            method: 'POST',
            data: item,
            url: contact,
        });
    })
}
console.log(idObject);

export const postVendor = (item) => {
    const data = {
        ...item,
        organization_id: '1',
        ...idObject
    }
    _request({
        method: 'POST',
        data: data,
        url: vendor,
    })
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
    })
}