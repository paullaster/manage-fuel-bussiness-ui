import { _request } from '@/services';

export const deleteItem = async(url, params) => {
    return await _request({
        method: 'DELETE',
        url: url,
        params
    });
}