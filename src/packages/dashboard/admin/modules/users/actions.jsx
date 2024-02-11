import { _request } from '@/services';
import constants from './constants';

export const createUser = async (payload) => {
    return await _request({
        url: constants.createUser,
        data: payload,
        method: 'POST'
    });
}