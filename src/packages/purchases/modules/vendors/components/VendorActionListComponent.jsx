import VendorActionList from "./VendorActionList";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
// import Button from '@mui/material/Button';
import { Button } from '@/components';

const VendorActionListComponent = () => {
  return (
    <div>
        {
            VendorActionList.map((action) => {
                action.hasList ? 
                action.map((list) => {

                })
            })
        }
    </div>
  )
}

export default VendorActionListComponent