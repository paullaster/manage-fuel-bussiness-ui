import VendorActionList from "./VendorActionList";
import MenuPopup from "../../../../../components/shared/MenuPopup";
import { Button } from '@/components';

const VendorActionListComponent = () => {
  return (
    <div className="actions">
        {
            VendorActionList.map((action) => {
                return action.hasList ? <MenuPopup action={action} key={action.key}/> : <Button key={action.key}>{action.caption}</Button>
            })
        }
    </div>
  )
}

export default VendorActionListComponent