import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Button } from '@/components';
import { v4 as uuidv4 } from 'uuid';

const MenuPopup = ({ action }) => {
    return (
        <PopupState variant="popover" popupId='buttons-venor-popup' key={uuidv4()}>
            {
                (popupState) => {
                    return (
                        <>
                            <Button {...bindTrigger(popupState)}>
                                <span>{action.caption}</span>
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
                            <Menu {...bindMenu(popupState)} key={uuidv4()}>
                                {
                                    action.list.map((l) => {
                                        return (

                                            <MenuItem onClick={() => {l.action(popupState)}} key={l.key}>{l.cap}</MenuItem>
                                        )
                                    })
                                }
                            </Menu>
                        </>
                    )
                }
            }
        </PopupState>
    )
}

export default MenuPopup