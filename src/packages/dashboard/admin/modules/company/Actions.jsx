import { redirect } from "react-router-dom";
import { _request } from "../../../../../services";
import constants from "../../constants";

/**
 * 
 * @param {*} param0 
 * @returns 
 */
export const AddCompany = async({request}) => {
    const data = Object.fromEntries(await request.formData());
    const response = await _request({method: 'POST', url: constants.company, data: data, headers: { 'Content-Type': 'application/json' }});

    return redirect('/admin/:id/company/wizard/0');
};

export const TankAndPumpData = async ({request}) => {

    console.log("Clicked");
    const data = Object.fromEntries(await request.formData());
    const tank_data = [

    ]
    console.log(data);
    // window.history.replaceState(null, "", "/admin/:id/company/wizard/1");
    return redirect('/admin/:id/company/wizard/1');
}