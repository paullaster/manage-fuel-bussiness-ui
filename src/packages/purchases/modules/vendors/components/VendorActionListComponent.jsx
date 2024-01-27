import VendorActionList from "./VendorActionList";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
// import Button from '@mui/material/Button';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const VendorActionListComponent = () => {
  return (
    <div>
        {
            VendorActionList.map((action) => {
                action.hasList ? 
                action.map((list) => {
                    return (

                    )
                })
            })
        }
    </div>
  )
}

export default VendorActionListComponent