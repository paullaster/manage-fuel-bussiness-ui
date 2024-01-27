import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Button } from '@/components';
import { v4 as uuidv4 } from 'uuid';

const MenuPopup = ({ action }) => {
    return (
        <PopupState variant="popover" popupId={uuidv4()}>
            {
                (popupState) => {
                    return (
                        <>
                            <Button {...bindTrigger(popupState)}>
                                {
                                    action.iconList.map((icl) => {
                                        return (
                                            <span key={icl.key}>
                                                {icl.icon}
                                            </span>
                                        )
                                    })
                                }
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={popupState.close}>Profile</MenuItem>
                                <MenuItem onClick={popupState.close}>My account</MenuItem>
                                <MenuItem onClick={popupState.close}>Logout</MenuItem>
                            </Menu>
                        </>
                    )
                }
            }
        </PopupState>
    )
}

export default MenuPopup