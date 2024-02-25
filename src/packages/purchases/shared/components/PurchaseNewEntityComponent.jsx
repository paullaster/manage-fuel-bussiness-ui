
import { DialogComponent } from "@/components";
import AddItemButton from "./AddItemButton";
import { useState } from "react";


const PurchaseNewEntityComponent = ({label, dialogTitle = '', maxWidth = '', children}) => {
  const [open, setOpen] = useState(false);


  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleOpenDialog = () => {
    setOpen(true);
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