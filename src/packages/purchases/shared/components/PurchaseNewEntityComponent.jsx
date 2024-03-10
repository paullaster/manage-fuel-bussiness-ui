
import { DialogComponent } from "@/components";
import AddItemButton from "./AddItemButton";
import { useState } from "react";
import { usePurchasesDispatcher } from "../../Context";



const PurchaseNewEntityComponent = ({label, dialogTitle = '', maxWidth = '', children}) => {
  const [open, setOpen] = useState(false);
  const setOnDialog = usePurchasesDispatcher();


  const handleCloseDialog = () => {
    setOpen(false);
    setOnDialog({ type: 'SET_ON_DIALOG_STATE', payload: false });
  };

  const handleOpenDialog = () => {
    setOpen(true);
    setOnDialog({ type: 'SET_ON_DIALOG_STATE', payload: true });
  };

  return (
    <>
    <AddItemButton 
    btnCaption={`new ${label}`}
    methodHandler={handleOpenDialog} 
    />
    <DialogComponent
        open={open}
        handleClose={handleCloseDialog}
        dialogTitle={dialogTitle}
        maxWidth={'lg'}
        dialogActionButtonLabel={''}
    >
        {children}
    </DialogComponent>
    </>
  )
}

export default PurchaseNewEntityComponent