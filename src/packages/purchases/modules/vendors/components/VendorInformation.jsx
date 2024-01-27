import { forwardRef } from 'react';
import { InputComponent } from '@/components';
import DivisionTopBar from '../../../shared/components/DivisionTopBar';

const VendorInformation = forwardRef((ref) => {
    return (
        <div className='vendorInfo'>
            <DivisionTopBar
                sectionTitle={'General'}
            >
                <p>Your vendor's contact information will appear in bills and their profiles. You can add their contact information and their logo to be used in bills.</p>
            </DivisionTopBar>
            <InputComponent
                type="text"
                prelabelText={"name"}
                name="vendor_name"
                ref={ref.vendorNameRef}
            />
            <InputComponent
                type="email"
                prelabelText={"email"}
                name="vendor_email"
                ref={ref.vendorEmailRef}
            />
            <InputComponent
                type="tel"
                prelabelText={"phone"}
                name="vendor_phone"
                ref={ref.vendorPhoneRef}
            />
            <InputComponent
                type="text"
                prelabelText={"Company name"}
                name="national_id"
                ref={ref.vendorCompanyNameRef}
            />
            <InputComponent
                type="text"
                prelabelText={"National ID"}
                name="national_id"
                ref={ref.vendorNationalIDRef}
            />
            <InputComponent
                type="url"
                prelabelText={"website"}
                name="website"
                ref={ref.vendorWebsiteRef}
            />
            <InputComponent
                type="text"
                prelabelText={"reference"}
                name="vendor_reference"
                ref={ref.vendorReferenceRef}
            />
            <InputComponent
                type="text"
                prelabelText={"Tax number"}
                name="kra_pin"
                ref={ref.vendorPinRef}
            />
            <div className='input-group'>
                <label htmlFor="product_description">product description</label>
                <textarea name="product_description" id="product_description" cols="30" rows="4" className="info_textarea" ref={ref.vendorProdDescRef}></textarea>
            </div>
        </div>
    )
})

export default VendorInformation