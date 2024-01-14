import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

const DialogComponent = ({dialogTitle = '', dialogContentText = '', children}) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }
  return (
    <Dialog
    open={open}
    onClose={handleClose}
    PaperProps={{}}

    >
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {dialogContentText}
        </DialogContentText>
        {children}
      </DialogContent>
      
    </Dialog>
  )
}

export default DialogComponent