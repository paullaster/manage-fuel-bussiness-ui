import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const DialogComponent = ({open, handleClose,  dialogTitle = '', dialogContentText = '', maxWidth= 'md', fullWidth = false, cancelLabel = 'Close', handleAction = () => {}, dialogActionButtonLabelType = 'submit', dialogActionButtonLabel = 'Save', PaperProps={}, children}) => {
  return (
    <Dialog
    open={open}
    onClose={handleClose}
    PaperProps={PaperProps}
    maxWidth={maxWidth}
    fullWidth = {fullWidth}
    >
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {dialogContentText}
        </DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{cancelLabel}</Button>
        <Button type={dialogActionButtonLabelType} onClick={handleAction}>{dialogActionButtonLabel}</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogComponent