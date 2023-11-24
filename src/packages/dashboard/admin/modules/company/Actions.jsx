import { redirect } from "react-router-dom";
import { _request } from "../../../../../services";
import constants from "../../constants";
// import { ENCRYPTION_SECRET } from "../../../../../environments";

/**
 * 
 * @param {*} param0 
 * @returns 
 */
export const AddCompany = async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const response = await _request({ method: 'POST', url: constants.company, data: data, headers: { 'Content-Type': 'application/json' } });
    const pageResponse = btoa(JSON.stringify(response));
    // const hmac = new CryptoJS.HmacSHA256(ENCRYPTION_SECRET);
    const url = `/admin/:id/company/wizard/0?page_response=${pageResponse}`;
    return redirect(url);
};

export const TankAndPumpData = async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    let tank_data = [];
    for (let prop in data) {
        if (prop.includes("tank_capacity_for_tank")) {
            const tankNumber = prop.split("_").slice(-1)[0];
            tank_data = [...tank_data, { tank_number: parseInt(tankNumber), tank_capacity: parseInt(data[prop]) }];
        }
    }
    const payload = {
        station_name: data.station_name,
        station_management_type: data.station_management_type,
        brand_name: data.brand_name,
        company_name: data.company_name,
        number_of_tanks: parseInt(data.number_of_tanks),
        tank_data: tank_data
    };
    const response = await _request({
        method: 'PUT',
        url: constants.company,
        data: payload,
        params: { uuid: data.uuid },
        headers: { 'Content-Type': 'application/json' }
    });
    //TODO: MAKE THIS DUPLICATED CODE A REUSABLE FUNCTION
    const pageResponse = btoa(JSON.stringify(response));
    // const hmac = new CryptoJS.HmacSHA256(ENCRYPTION_SECRET);
    const url = `/admin/:id/company/wizard/1?page_response=${pageResponse}`;
    return redirect(url);
}