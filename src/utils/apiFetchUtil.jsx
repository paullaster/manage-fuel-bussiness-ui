import { _request } from '@/services';
import constants from '../packages/purchases/constants';

export const apiFetchUtil = async (options = [], type = '') => {
  console.log(options)
  let response = '';
  switch(type) {
    case 'fuel_type':
        response = await _request({
            method: 'GET',
            params: {
                fuel_type_id: options.values,
            },
            url: constants.fuelType,
        })
        console.log(response);
  }
};