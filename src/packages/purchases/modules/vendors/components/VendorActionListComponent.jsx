import VendorActionList from "./VendorActionList";
import MenuPopup from "./MenuPopup";
import { Button } from '@/components';

const VendorActionListComponent = () => {
  return (
    <div>
        {
            VendorActionList.map((action) => {
                return action.hasList ? <MenuPopup action={action}/> : <Button></Button>
            })
        }
    </div>
  )
}

export default VendorActionListComponent