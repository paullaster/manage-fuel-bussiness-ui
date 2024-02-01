import { _request } from '@/services';
import { method } from 'lodash';

export const deleteItem = async(url, params) => {
    return await _request({
        method: 'DELETE',
        url: url,
        params
    });
}