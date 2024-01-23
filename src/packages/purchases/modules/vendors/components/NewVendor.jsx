import { Button, InputComponent, } from "@/components";
import { useRef, useState, useMemo, useEffect } from "react";
import { Form } from "react-router-dom";
import cardImage from "@/assets/images/card_image.svg";
import shared from "../../../shared";
import { postAddress, postBillingInformation, postContactPerson } from "../../../actions";
import VendorBilling from "./VendorBilling";
import ContactPerson from "./ContactPerson";
import { GridRowModes, GridActionsCellItem } from '@mui/x-data-grid';
import {MdOutlineSaveAlt, MdCancel, MdCreate, MdDelete } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import CurrencyComponent from "./CurrencyComponent";


const NewVendor = () => {

    const [upload, setUpload] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [rows, setRows] = useState([]);
    const [rowModesModel, setRowModesModel] = useState({});
    const [open, setOpen] = useState(false);

    const addressRef = useRef(null);
    const cityRef = useRef(null);
    const zipCodeRef = useRef(null);
    const stateRef = useRef(null);
    const countryRef = useRef(null);
    const validRef = useRef(true);

    const phoneNumberRef = useRef(null);
    const tillNumberRef = useRef(null);
    const paybillNumberRef = useRef(null);
    const bankNameRef = useRef(null);
    const accountNumberRef = useRef(null);

    // VENDOR
    const vendorNameRef = useRef(null);
    const vendorEmailRef = useRef(null);
    const vendorPhoneRef = useRef(null);
    const vendorNationalIDRef = useRef(null);
    const vendorCompanyNameRef = useRef(null);
    const vendorWebsiteRef = useRef(null);
    const vendorPinRef = useRef(null);
    const vendorReferenceRef = useRef(null);
    const vendorProdDescRef = useRef(null);

    // Currency
    const currencyNameRef = useRef(null);
    const currencyCodeRef = useRef(null);
    const currencyRateRef = useRef(null);
    const currencySymbolref = useRef(null);


    const currencyRefObject = {
        currencySymbolref,
        currencyRateRef,
        currencyCodeRef,
        currencyNameRef,
    };


    const billingInfo = {
        phoneNumberRef,
        tillNumberRef,
        paybillNumberRef,
        bankNameRef,
        accountNumberRef,
    };

    const handleAddCurrency = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setOpen(true);
    };

    const handleCloseDialog = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setOpen(false);
    }

    const handleSelectedPaymentMethod = (event, newValue) => {
        event.preventDefault();
        event.stopPropagation();
        setPaymentMethod(newValue);
    }

    const handleUploadChange = (event) => {
        setUpload(URL.createObjectURL(event.target.files[0]));
    };

    const handleDeleteImage = (event) => {
        event.stopPropagation();
        event.preventDefault();
        setUpload(null);
    };


    const deleteItem = (item) => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== item.id));
    };


    const handleEditClick = (item) => {
        console.log(item);
        setRowModesModel({ ...rowModesModel, [item.id]: { mode: GridRowModes.Edit } });
        console.log(rowModesModel);
    };

    const handleSaveClick = (item) => {
        setRowModesModel({ ...rowModesModel, [item.id]: { mode: GridRowModes.View } });
    };

    const handleCancelClick = (item) => {
        setRowModesModel({
            ...rowModesModel,
            [item.id]: { mode: GridRowModes.View, ignoreModifications: true }
        });

        const editedRow = rows.find((row) => row.id === item.id);
        if (editedRow.isNew) {
            setRows(rows.filter((row) => row.id !== item.id));
        }
    };

    const handleRowEditStop = (params, event) => {
        if (params.reason == GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };


    const processRowUpdate = (newRow) => {
        const updatedRow = { ...newRow, isNew: false };
        setRows(rows.map((row) => row.id === newRow.id ? updatedRow : row));
        return updatedRow;
    };



    const handleRowModesModelChange = (newRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    const contactColumns = useMemo(() => {
        return [
            {
                field: 'contact_name',
                headerName: 'Name',
                type: 'string',
                width: 250,
                headerAlign: 'center',
                editable: true,
            },
            {
                field: 'contact_email',
                headerName: 'Email',
                type: 'string',
                width: 250,
                headerAlign: 'center',
                editable: true,
            },
            {
                field: 'contact_phone_number',
                headerName: 'Phone',
                type: 'string',
                width: 250,
                headerAlign: 'center',
                editable: true
            },
            {
                field: 'actions',
                headerName: 'Action',
                type: 'actions',
                getActions: (params) => {
                    const isInEditMode = rowModesModel[params.id]?.mode === GridRowModes.Edit;
                    console.log(isInEditMode);
                    if (isInEditMode) {
                        return [
                            <GridActionsCellItem
                                key={uuidv4()}
                                icon={<MdOutlineSaveAlt />}
                                label="Save"
                                onClick={() => {
                                    handleSaveClick(params)
                                }}
                            />,
                            <GridActionsCellItem
                                key={uuidv4()}
                                icon={<MdCancel />}
                                label="Cancel"
                                className="textPrimary"
                                onClick={() => {
                                    handleCancelClick(params)
                                }}
                                color="inherit"
                            />,
                        ];
                    }
                    return [
                        <GridActionsCellItem
                            key={uuidv4()}
                            icon={<MdCreate />}
                            label="Edit"
                            onClick={() => {
                                handleEditClick(params)
                            }}
                        />,
                        <GridActionsCellItem
                            key={uuidv4()}
                            icon={<MdDelete />}
                            label="Delete"
                            onClick={() => {
                                deleteItem(params)
                            }}
                        />,
                    ]
                }
            }
        ]
    }, [handleEditClick, handleSaveClick]);

    useEffect(() =>{

    }, [contactColumns]);

    const SetPayload = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const billinObject = {
            payment_method: paymentMethod,
            mpesa_phone_number: phoneNumberRef.current.value,
            mpesa_till_number: tillNumberRef.current.value,
            mpesa_paybill_number: paybillNumberRef.current.value,
            bank_name: bankNameRef.current.value,
            bank_account_number: accountNumberRef.current.value,
        };

        console.log(billinObject);
        postBillingInformation(billinObject);
        
        const addressObject = {
            address: addressRef.current.value,
            city: cityRef.current.value,
            zip_code: zipCodeRef.current.value,
            state: stateRef.current.value,
            country: countryRef.current.value,
        };
        for (let prop in addressObject) {
            if (!addressObject[prop]) {
                validRef.current = false;
                return new Error(`${prop} is a required field`);
            }
        }
        
        if (!validRef.current) {
            return new Error("Invalid request");
        };
        
        postAddress(addressObject);

        if(!rows.length) {
            return;
        }
        postContactPerson(rows);

        const vendorObject = {
            vendor_reference: vendorReferenceRef.current.value,
            website: vendorWebsiteRef.current.value,
            kra_pin: vendorPinRef.current.value,
            product_description: vendorProdDescRef.current.value,
            company_name: vendorCompanyNameRef.current.value,
            vendor_phone: vendorPhoneRef.current.value,
            vendor_email: vendorEmailRef.current.vaalue,
            vendor_name: vendorNameRef.current.value,
            national_id: vendorNationalIDRef.current.value,
        };

        for (let prop in vendorObject) {
            if(
                !vendorObject[prop] &&
                (
                    prop !== 'website' ||
                    prop !== 'national_id '||
                    prop !== 'vendor_email' ||
                    prop !== 'vendor_phone' ||
                    prop !== 'vendor_reference'
                )
            ) {
                validRef.current = false;
                return new Error(`${prop} is a required field`);
            }
        }

        postVendor(vendorObject);
        console.log(addressObject);
        console.log(vendorObject);

}

return (
    <section className="new_vendors">
        <div className="new_vendors__left">
            <shared.components.SectionIntroduction text="New Vendor" />
            <div className="new_vendors__left__dataentry">
                <Form className="new_vendors__left__dataentry__form">
                    <div className="new_vendors__left__dataentry__form_vendorinfo">
                        <div className="new_vendors__left__dataentry__form_vendorinfo_introduction form_section_introductions">
                            <h4>General</h4>
                            <p>Your vendor's contact information will appear in bills and their profiles. You can add their contact information and their logo to be used in bills.</p>
                        </div>
                        {/* <InputComponent
                                type="text"
                                prelabelText={"national ID"}
                                name="organization_id"
                            /> */}
                        <div className="new_vendors__left__dataentry__form_vendorinfo__vendorname">
                            <InputComponent
                                type="text"
                                prelabelText={"name"}
                                name="vendor_name"
                                ref={vendorNameRef}
                            />
                        </div>
                        <div className="new_vendors__left__dataentry__form_vendorinfo__others">
                            <div className="new_vendors__left__dataentry__form_vendorinfo__others_left">
                                <InputComponent
                                    type="email"
                                    prelabelText={"email"}
                                    name="vendor_email"
                                    ref={vendorEmailRef}
                                />
                                <InputComponent
                                    type="tel"
                                    prelabelText={"phone"}
                                    name="vendor_phone"
                                    ref={vendorPhoneRef}
                                />
                                <InputComponent
                                type="text"
                                prelabelText={"Company name"}
                                name="national_id"
                                ref={vendorCompanyNameRef}
                            />
                                <InputComponent
                                type="text"
                                prelabelText={"National ID"}
                                name="national_id"
                                ref={vendorNationalIDRef}
                            />
                                <InputComponent
                                    type="url"
                                    prelabelText={"website"}
                                    name="website"
                                    ref={vendorWebsiteRef}
                                />
                                <InputComponent
                                    type="text"
                                    prelabelText={"reference"}
                                    name="vendor_reference"
                                    ref={vendorReferenceRef}
                                />
                                <InputComponent
                                    type="text"
                                    prelabelText={"Tax number"}
                                    name="kra_pin"
                                    ref={vendorPinRef}
                                />
                                <div className="new_vendors__left__dataentry__form_billinginfo_dataentry_section-two">
                                <label htmlFor="product_description">product description</label>
                                <textarea name="product_description" id="product_description" cols="30" rows="4" className="info_textarea" ref={vendorProdDescRef}></textarea>
                            </div>
                            </div>
                            <div className="new_vendors__left__dataentry__form_vendorinfo__others_right">
                                <div className="file_upload_container">
                                    <label htmlFor="vendor_logo" className={upload ? '' : 'show'}>upload picture</label>
                                    <input type="file" id="vendor_logo" accept=".ico, .svg, .jpg, .jpeg, .png, .gif, .webp" name="vendor_image" onChange={handleUploadChange} />
                                    <img src={upload} alt="preview" className={upload ? 'show' : ''} />
                                    <button onClick={handleDeleteImage} className={upload ? 'show' : ''} > <MdDelete size={25} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="new_vendors__left__dataentry__form_billinginfo">
                        <div className="new_vendors__left__dataentry__form_billinginfo_introduction form_section_introductions">
                            <h4>Billing</h4>
                            <p>The tax number appears in every bill issued to you. The selected currency becomes the default currency for this vendor.</p>
                        </div>
                        <VendorBilling ref={billingInfo} handleSelectedPaymentMethod={handleSelectedPaymentMethod} handleAddCurrency={handleAddCurrency}/>
                        <CurrencyComponent ref={currencyRefObject} open={open} handleCloseDialog={handleCloseDialog} dialogTitle="Add currency" />
                    </div>
                    <div className="new_vendors__left__dataentry__form_addressinfo">
                        <div className="new_vendors__left__dataentry__form_addressinfo_introduction form_section_introductions">
                            <h4>Address</h4>
                            <p>The address is required for the bills, so you need to add billing address details for your vendor.</p>
                        </div>
                        <div className="new_vendors__left__dataentry__form_addressinfo_datanetry">
                            <div className="new_vendors__left__dataentry__form_addressinfo_datanetry__section-one">
                                <InputComponent
                                    prelabelText={"address finder"}
                                />
                                <div className="textarea_container">
                                    <label htmlFor="address">address</label>
                                    <textarea name="address" id="address" cols="30" rows="4" className="info_textarea" ref={addressRef}></textarea>
                                </div>
                            </div>
                            <div className="new_vendors__left__dataentry__form_addressinfo_datanetry__section-two">
                                <InputComponent
                                    type="text"
                                    prelabelText={"town / city"}
                                    name="city"
                                    ref={cityRef}
                                />
                                <InputComponent
                                    type="text"
                                    prelabelText={"postal / zip code"}
                                    name="zip_code"
                                    ref={zipCodeRef}
                                />
                                <InputComponent
                                    type="text"
                                    prelabelText={"province / state"}
                                    name="state"
                                    ref={stateRef}
                                />
                                <InputComponent
                                    type="text"
                                    prelabelText={"country"}
                                    name="country"
                                    ref={countryRef}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="new_vendors__left__dataentry__form_contactperson">
                        <div className="new_vendors__left__dataentry__form_contactperson_introduction form_section_introductions">
                            <h4>Contact Person</h4>
                            <p>To include additional recipients in an email as CC, add them as contact persons.</p>
                        </div>
                        <div className="new_vendors__left__dataentry__form_contactperson_datacolumns">
                            <ContactPerson 
                            rows={rows}
                            columns={contactColumns}
                            setRows={setRows}
                            rowModesModel={rowModesModel}
                            setRowModesModel={setRowModesModel}
                            handleRowModesModelChange={handleRowModesModelChange}
                            processRowUpdate={processRowUpdate}
                            handleRowEditStop={handleRowEditStop}
                            />
                        </div>
                    </div>
                    <Button type='button' className='btn-element btn_primary' onClick={SetPayload}>Save</Button>
                </Form>
            </div>
        </div>
        <div className="new_vendors__right">
            <div className="new_vendors__right_container">
                <img src={cardImage} alt="card" />
            </div>
            <div className="new_vendors__right_text_div">
                <div className="customefields">
                    <Button>custom fields</Button>
                </div>
                <div className="payroll-hypertext">
                    <h3>Payroll</h3>
                    <p>Create multiple pay calendars, run payrolls, print payslips, add benefits and deductions, and make bulk payments.</p>
                    <Button>Learn more</Button>
                </div>
            </div>
        </div>
    </section>
)
}

export default NewVendor