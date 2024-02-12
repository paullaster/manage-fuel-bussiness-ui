import WebStorage from "@/utils/WebStorage";
import { APPNAME } from "@/environments";

const orgData = WebStorage.GetFromWebStorage('session', `${APPNAME}_ORG_DATA`);
const OrganizationDetails = () => {
  return (
    <div>
        <p>{orgData.company_name}</p>
        <p>{orgData.location}</p>
        <p>Tax Number: {orgData.tax_number}</p>
        <p>{orgData.org_email}</p>
    </div>
  )
}

export default OrganizationDetails