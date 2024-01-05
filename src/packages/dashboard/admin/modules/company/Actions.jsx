import { redirect } from "react-router-dom";
import { _request } from "@/services";
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
    const url = `/dashboard/admin/:id/company/wizard/0?page_response=${pageResponse}`;
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
    dataType(data, payload);
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
            url = `/dashboard/admin/:id/company/list`;
            break;
        case 'tank_data':
            url = `/dashboard/admin/:id/company/wizard/1?page_response=${pageResponse}`;
            break;
        default: url = `/*`;
    }
    return redirect(url);
}

const dataType = (data, payload) => {
    console.log(data.type);
    switch(data.type) {
        
        case 'tank_data"':
            let tank_data = [];
            for (let prop in data) {
                passedTankData(prop, data, tank_data);
            }
            return payload = {
                ...payload,
                number_of_tanks: parseInt(data.number_of_tanks),
                tank_data: tank_data
            };
        case 'pump_data':
                let pumps = [];
                let number_of_valves = 0;
                for (let prop in data) {
                    passedPumpData(pumps, number_of_valves, prop, data);  
                }
                pumps.length && number_of_valves
                    ? payload = {
                        ...payload,
                        number_of_pumps: data.number_of_pumps,
                        number_of_valves,
                        pumps,
                    } : (new Error('Invalid data!, Please add valves data properly!'), redirect(window.location));
            return payload;

        default: new Error('unknown data type,  '+ data.type)
            };
}

/**
 * 
 * @param {*} item 
 * @param {*} object 
 * @param {*} dataList 
 * @returns 
 */
const passedTankData = (item, object, dataList) => {
    if (item.includes("tank_capacity_for_tank")) {
        const tankNumber = item.split("_").slice(-1)[0];
        console.log(dataList);
        return dataList = [...dataList, { tank_number: parseInt(tankNumber), tank_capacity: parseInt(object[prop]) }];
    }
}

/**
 * 
 * @param {*} pump 
 * @param {*} valve 
 * @param {*} item 
 * @param {*} obj 
 */
const passedPumpData = (pumps, valve, item, obj) => {
    if (item.includes('valve_')) {
        let propArray = item.split('_');
        let pump_number = parseInt(propArray.slice(-1));

        let valvesArray = [];
        if (!pumps.length && !valvesArray.length) {
            console.log(obj[item]);
            return pushToArray(obj[item], valve, valvesArray, pump_number, pumps);

        } else {
            const itemExist = pumps && pumps.findIndex((item) => {
                return item.pump_number === pump_number;
            });
            if (itemExist >= 0) {
                return pumps[itemExist].valves ? pushToArray(data[prop], valve, valvesArray, pump_number, pumps, pumps[itemExist]) : '';
            } else {
                return pushToArray(obj[item], valve, valvesArray, pump_number, pumps);
            }
        }
    }
    return (valve, pumps);
}

const pushToArray = (propValue, valve, valvesArray, pump_number, pumps, pumpObject = {}) => {

    propValue !== ''
        ? !Object.keys(pumpObject).length 
            ? (valve++, valvesArray = [...valvesArray, { fuel_type: propValue }], modifyingObject(pumpObject, valvesArray, pump_number))
        :
            (valve++, pumpObject.valves = [...pumpObject.valves, { fuel_type: propValue }]) :
        '';
    Object.keys(pumpObject).length ? pumps = [...pumps, pumpObject] : '';

    return (valve, pumps);
}

const modifyingObject = (object, valvesArray, pumpNumber) => {

    valvesArray.length ? object = {
        pumpNumber,
        valves: valvesArray
    } : '';
    return object;
}