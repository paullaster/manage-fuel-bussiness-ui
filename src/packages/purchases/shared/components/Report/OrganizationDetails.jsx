import WebStorage from "@/utils/WebStorage";
import { APPNAME } from "@/environments";

const orgData = WebStorage.GetFromWebStorage('session', `${APPNAME}_ORG_DATA`);
const OrganizationDetails = () => {
  return (
    <div>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
    </div>
  )
}

export default OrganizationDetails