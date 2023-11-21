import { redirect } from "react-router-dom";
import { useAdminState, useAdminStateDispatch } from "../../store";
import { useEffect } from "react";
import { _request } from "../../../../../services";
import constants from "../../constants";

/**
 * 
 * @param {*} param0 
 * @returns 
 */
export const AddCompany = async({request}) => {
    const data = Object.fromEntries(await request.formData());
    await _request({method: 'POST', url: constants.company, data: data, headers: { 'Content-Type': 'application/json' }});
    return redirect('/admin/:id/company/wizard');
};

export const TankAndPumpData = async ({request}) => {
    // const state = useAdminState();
    console.log("Clicked");
    // console.log(state.tank_data);
    const data = Object.fromEntries(await request.formData());
    const tank_data = [

    ]
    console.log(data);
}