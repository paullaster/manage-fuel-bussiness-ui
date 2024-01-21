import { _request } from '@/services';
import  constants from './constants';


const { address } = constants;

export const postAddress = (payload) => {
    _request({
        method: 'POST',
        data: payload,
        url: address,
    })
    .then((res) => {
        console.log(res);
    })
}