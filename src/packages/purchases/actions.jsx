import { _request } from '@/services';
import constants from './constants';


const { address, billing, contact } = constants;
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
    console.log('start function')
    const contacts = rows.map((row) => {
        const { id, isNew, ...payloadFields } = row;
        return {
            ...payloadFields,
            organization_id: '1',
        }

    });
    console.log('contacts array ', contacts);
    const contactLen = contacts?.length;
    console.log(contactLen);
    contacts.forEeach(async (item, index) => {
        if (contactLen - 1 === index) {
            console.log('log item ', item)
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