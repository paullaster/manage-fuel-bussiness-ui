import { _request } from '@/services';
import  constants from './constants';


const { address } = constants;
let address_id = '';

export const postAddress = (payload) => {
    const data = {
        ...payload,
        organization_id: "1",
    }
    _request({
        method: 'POST',
        data: data,
        url: address,
    })
    .then((res) => {
        console.log(res);
        return res?.address_id;
    })
    .catch((err) => {
        return new Error(err.message);
    });
}

export const 
