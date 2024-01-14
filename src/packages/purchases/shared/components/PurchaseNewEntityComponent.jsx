
import { DialogComponent } from "@/components";
import AddItemButton from "./AddItemButton";
import { useState } from "react";


const PurchaseNewEntityComponent = ({label}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <>
    <AddItemButton btnCaption={`new ${label}`} />
    <DialogComponent
        open={open}
        handleClose={handleClose}
        
    >

    </DialogComponent>
    </>
  )
}

export default PurchaseNewEntityComponent