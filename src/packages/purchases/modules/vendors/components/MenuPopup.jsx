import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Button } from '@/components';
import { v4 as uuidv4 } from 'uuid';

const MenuPopup = () => {
  return (
    <PopupState variant="popover" popupId={uuidv4()}>

    </PopupState>
  )
}

export default MenuPopup