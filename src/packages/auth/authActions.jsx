import { _request } from '@/services';
import constants from './constants';


export const login = async (payload) => {
    return await _request({
        url: constants.login,
        data: payload,
        method: 'POST'
    });
}