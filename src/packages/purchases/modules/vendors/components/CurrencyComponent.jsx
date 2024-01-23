import { DialogComponent, InputComponent } from '@/components';

const CurrencyComponent = () => {
    return (
        <DialogComponent
            open={open}
            handleClose={handleCloseDialog}
            dialogTitle={dialogTitle}
            maxWidth={maxWidth}
        >
            <InputComponent 
            
            />

        </DialogComponent>
    )
}

export default CurrencyComponent