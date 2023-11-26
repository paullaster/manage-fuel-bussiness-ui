import { redirect } from "react-router-dom";
import { _request } from "../../../../../services";
import constants from "../../constants";
import { generator } from "@/packages/utils";
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
    let payload = {
        station_name: data.station_name,
        station_management_type: data.station_management_type,
        brand_name: data.brand_name,
        company_name: data.company_name,
    };

    if (data.type === "tank_data") {
        let tank_data = [];
        for (let prop in data) {
            if (prop.includes("tank_capacity_for_tank")) {
                const tankNumber = prop.split("_").slice(-1)[0];
                tank_data = [...tank_data, { tank_number: parseInt(tankNumber), tank_capacity: parseInt(data[prop]) }];
            }
        }
        payload = {
            ...payload,
            number_of_tanks: parseInt(data.number_of_tanks),
            tank_data: tank_data
        }
    }

    if (data.type === "pump_data") {
        let pumps = [];
        let number_of_valves = 0;
        console.log(data);
        for (let prop in data) {
            if (prop.includes('valve_')) {
                let propArray = prop.split('_');
                let pump_number = parseInt(propArray.slice(-1));

                let valvesArray = [];
                let pumpObject = {};
                if (!pumps.length && !valvesArray.length) {
                    data[prop] !== ''
                    ? ( number_of_valves++, valvesArray = [...valvesArray, { fuel_type: data[prop] }] ) 
                    : 
                    '';

                    valvesArray.length ? pumpObject = {
                        pump_number,
                        valves: valvesArray
                    } : '';

                    Object.keys(pumpObject).length ? pumps = [...pumps, pumpObject] : '';

                } else {
                    for (let item of pumps) {
                        if (item.pump_number === pump_number) {
                            data[prop] !== '' && item.valves 
                            ? ( number_of_valves++, item.valves = [...item.valves, { fuel_type: data[prop] }] ) 
                            : '';
                        } else {

                            data[prop] !== '' 
                            ? ( number_of_valves++, valvesArray = [...valvesArray, { fuel_type: data[prop] }]) 
                            : '';
                            valvesArray.length ? pumpObject = {
                                pump_number,
                                valves: valvesArray
                            } : '';
                            Object.keys(pumpObject).length ? pumps = [...pumps, pumpObject] : '';
                        }
                    }
                }
                pumps.length && number_of_valves ? payload = {
                    ...payload,
                    number_of_pumps: data.number_of_pumps,
                    number_of_valves,
                    pumps,
                } :
                    new Error('Invalid data!, Please add valves data properly!')
                redirect(window.location);
            }
        }
    }
    const response = await _request({
        method: 'PUT',
        url: constants.company,
        data: payload,
        params: { uuid: data.uuid },
        headers: { 'Content-Type': 'application/json' }
    });
    //TODO: MAKE THIS DUPLICATED CODE A REUSABLE FUNCTION
    //TODO: HANDLE API CALLS ON ERROR
    // if(response) {
    //     console.log(response);
    //     return;
    // }
    const pageResponse = btoa(JSON.stringify(response));
    // const hmac = new CryptoJS.HmacSHA256(ENCRYPTION_SECRET);

    //TODO: add dynamic admin ID
    let url = '';
    switch (data.type) {
        case 'pump_data':
            url = `/admin/:id/company/list`;
            break;
        case 'tank_data':
            url = `/admin/:id/company/wizard/1?page_response=${pageResponse}`;
            break;
        default: url = `/*`;
    }
    return redirect(url);
}
