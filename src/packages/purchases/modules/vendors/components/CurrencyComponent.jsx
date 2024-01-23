import { DialogComponent, InputComponent } from '@/components';
import { forwardRef } from 'react';

const CurrencyComponent = forwardRef((props, ref) => {
    const { open,  handleCloseDialog, dialogTitle, maxWidth } = props;
    return (
        <DialogComponent
            open={open}
            handleClose={handleCloseDialog}
            dialogTitle={dialogTitle}
            maxWidth={maxWidth}
        >
            <div className="addCurrency">
            <InputComponent
                type="text"
                prelabelText={"Currency name"}
                name="currency_name"
                title="currency name"
                ref={ref.currencyNameRef}
            />
            <InputComponent
                type="text"
                prelabelText={"Currency code"}
                name="currency_code"
                ref={ref.currencyCodeRef}
            />
            <InputComponent
                type="text"
                prelabelText={"Rate"}
                name="rate"
                ref={ref.currencyRateRef}
            />
            <InputComponent
                type="text"
                prelabelText={"Symbol"}
                name="symbol"
                ref={ref.currencySymbolref}
            />

            </div>
        </DialogComponent>
    )
})

export default CurrencyComponent