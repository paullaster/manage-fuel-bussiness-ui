import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Button } from '@/components';

const MenuPopup = () => {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">

    </PopupState>
  )
}

export default MenuPopup