import { _request } from '@/services';
import  { address } from './constants';



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