import { _request } from "@/services";
import constants from "../../constants";
import { APPNAME } from "@/environments";
import AuthUtils from "@/utils/AuthUtils";

const saveNewPurchaseItem = async({request}) => {
    let data = Object.entries( await request.formData());
    let sessionUser = AuthUtils.getItemFromStorage(`${APPNAME}_user`);
    let orgId = sessionUser ? sessionUser.organization_id : new Error("The is no exsting session user!");
    data = {
        ...data,
        organization_id: orgId,
    }
    const response = await _request({ method: 'POST', url: constants.purchaseItem, data: data, headers: { 'Content-Type': 'application/json' } })

}