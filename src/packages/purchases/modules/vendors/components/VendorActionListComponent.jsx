import VendorActionList from "./VendorActionList";
import MenuPopup from "./MenuPopup";

const VendorActionListComponent = () => {
  return (
    <div>
        {
            VendorActionList.map((action) => {
                return action.hasList ? <MenuPopup action={action}/> : ''
            })
        }
    </div>
  )
}

export default VendorActionListComponent