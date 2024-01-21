import { _request } from '@/services';
import  constants from './constants';


const { address, billing } = constants;
const idObject = {};

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
