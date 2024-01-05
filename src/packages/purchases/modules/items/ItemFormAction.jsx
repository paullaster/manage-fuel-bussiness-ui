import { _request } from "@/services";
import constants from "../../constants";
import { APPNAME } from "@/environments";

const saveNewPurchaseItem = async({request}) => {
    let data = Object.entries( await request.formData());
    data = {
        ...data,
        organization_id: getItemFromStorage(`${APPNAME}_user`).organization_id,
    }
    const response = await _request({ method: 'POST', url: constants.purchaseItem })

}