import { Button, InputComponent, } from "@/components";
import { useRef, useState, useMemo, useEffect, useContext, forwardRef } from "react";
import { Form } from "react-router-dom";
import cardImage from "@/assets/images/card_image.svg";
import shared from "../../../shared";
import { postAddress, postBillingInformation, postContactPerson, postVendor, postCurrency } from "../../../actions";
import VendorBilling from "./VendorBilling";
import ContactPerson from "./ContactPerson";
import { GridRowModes, GridActionsCellItem, GridRowEditStopReasons, } from '@mui/x-data-grid';
import { MdOutlineSaveAlt, MdCancel, MdCreate, MdDelete } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import { ObjectValidator } from "@/utils";
import VendorInformation from "./VendorInformation";
import WebStorage from '@/utils/WebStorage';
import { APPNAME } from '@/environments';
import { useNavigate } from 'react-router-dom';
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Box from '@mui/material/Box';
import { LoadingContext } from '@/store';
import { toast } from 'react-toastify';
import DivisionTopBar from "../../../shared/components/DivisionTopBar";


const VendorCurrencyComponent = forwardRef((props, ref) => {

    return (
        <div  className="currencyComponent">
            <DivisionTopBar
                sectionTitle={'Currency'}
            >
                <p>This will be your vendor's primary currency.</p>
            </DivisionTopBar>
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
        </div>
    )
});


const VendorAddressDetails = forwardRef((props, ref) => {
    return (
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
                        <textarea name="address" id="address" cols="30" rows="4" className="info_textarea" ref={ref.addressRef}></textarea>
                    </div>
                </div>
                <div className="new_vendors__left__dataentry__form_addressinfo_datanetry__section-two">
                    <InputComponent
                        type="text"
                        prelabelText={"town / city"}
                        name="city"
                        ref={ref.cityRef}
                    />
                    <InputComponent
                        type="text"
                        prelabelText={"postal / zip code"}
                        name="zip_code"
                        ref={ref.zipCodeRef}
                    />
                    <InputComponent
                        type="text"
                        prelabelText={"province / state"}
                        name="state"
                        ref={ref.stateRef}
                    />
                    <InputComponent
                        type="text"
                        prelabelText={"country"}
                        name="country"
                        ref={ref.countryRef}
                    />
                </div>
            </div>
        </div>
    )
});


const NewVendor = () => {

    const [paymentMethod, setPaymentMethod] = useState([{ method: 'Mpesa' }, { method: 'Bank' }]);
    const [rows, setRows] = useState([]);
    const [rowModesModel, setRowModesModel] = useState({});
    const [activeStep, setActiveStep] = useState(0);
    const { setLoader } = useContext(LoadingContext);

    // CURRENCY
    const currencyNameRef = useRef(null);
    const currencyCodeRef = useRef(null);
    const currencyRateRef = useRef(null);
    const currencySymbolref = useRef(null);

    const addressRef = useRef(null);
    const cityRef = useRef(null);
    const zipCodeRef = useRef(null);
    const stateRef = useRef(null);
    const countryRef = useRef(null);

    // checks
    const validRef = useRef(true);
    const invalid = useRef(false);

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

    const navigate = useNavigate();



    const vendorInformationRefObject = {
        vendorNameRef,
        vendorEmailRef,
        vendorPhoneRef,
        vendorNationalIDRef,
        vendorCompanyNameRef,
        vendorWebsiteRef,
        vendorPinRef,
        vendorReferenceRef,
        vendorProdDescRef,
    };

    const currencyRefObject = {
        currencySymbolref,
        currencyRateRef,
        currencyCodeRef,
        currencyNameRef,
    };
    const addressObject = {
        addressRef,
        cityRef,
        zipCodeRef,
        stateRef,
        countryRef,
    };


    const billingInfo = {
        phoneNumberRef,
        tillNumberRef,
        paybillNumberRef,
        bankNameRef,
        accountNumberRef,
    };

    const validateObject = (obj, option = {}) => {
        invalid.current = false;
        let field = null;
        for (let prop in obj) {
            if (!obj[prop] && !option[prop]) {
                invalid.current = true;
                field = prop;
            }
        }
        return { isValid: invalid.current, field: field };
    };
    // SETTING STEPPER
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleSubmitCurrency = (event) => {
        invalid.current = false;
        if (event.type === 'click') {
            const currencyObject = {
                currency_name: currencyNameRef.current.value,
                currency_code: currencyCodeRef.current.value,
                rate: currencyRateRef.current.value,
                symbol: currencySymbolref.current.value,
            };
            for (let prop in currencyObject) {
                if (!currencyObject[prop] && prop !== 'symbol') {
                    invalid.current = true;
                    toast.error(`${prop} is a required filed`);
                    return;
                }
            }
            if (invalid.current) {
                toast.error("Invalid form");
                return;
            }
            setLoader({ message: "Saving currency informtion...", status: true });
            postCurrency(currencyObject)
                .then((res) => {
                    setLoader({ message: "", status: false });
                    toast.success('Currency information saved successfully');
                    handleNext();
                })
                .catch((error) => {
                    setLoader({ message: "", status: false });
                    toast.error(error.message);
                });
        }
    };

    const handleSelectedPaymentMethod = (event, newValue) => {
        event.preventDefault();
        event.stopPropagation();
        setPaymentMethod(newValue);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleSubmitBillingInformation = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const billinObject = {
            payment_method: paymentMethod?.method,
            mpesa_phone_number: phoneNumberRef.current.value,
            mpesa_till_number: tillNumberRef.current.value,
            mpesa_paybill_number: paybillNumberRef.current.value,
            bank_name: bankNameRef.current.value,
            bank_account_number: accountNumberRef.current.value,
        };
        const { isValid, field } = validateObject(billinObject);
        if (isValid) {
            toast.error(`${field} is a required filed`);
            return;
        }
        setLoader({ message: "Saving billing informtion...", status: true });
        postBillingInformation(billinObject)
            .then((res) => {
                const idObject = WebStorage.GetFromWebStorage('session', `${APPNAME}_VENDOR_DEPENDENCY_KEYS`);
                setLoader({ message: "", status: false });
                setLoader({ message: "", status: false });
                toast.success(`Billing information saved successfully`);
                handleNext();
            })
            .catch((error) => {
                setLoader({ message: "", status: false });
                toast.error(error.message);
            })

    }

    const deleteItem = (item) => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== item.id));
    };


    const handleEditClick = (item) => {
        console.log(item);
        setRowModesModel({ ...rowModesModel, [item.id]: { mode: GridRowModes.Edit } });
        console.log(rowModesModel);
    };

    const handleSaveClick = (item) => {
        console.log(item);
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

    const handleSubmitAddress = () => {
        const addressObject = {
            address: addressRef.current.value,
            city: cityRef.current.value,
            zip_code: zipCodeRef.current.value,
            state: stateRef.current.value,
            country: countryRef.current.value,
        };
        const { isValid, field } = validateObject(addressObject);
        if (isValid) {
            toast.error(`${field} is a required filed`);
            return;
        }
        setLoader({ message: "Saving address informtion...", status: true });
        postAddress(addressObject)
            .then((res) => {
                setLoader({ message: "", status: false });
                toast.success(`Successfully saved`);
                handleNext();
            })
            .catch((err) => {
                setLoader({ message: "", status: false });
                toast.error(err.message);
            });
    };

    const handleSubmitContactInfo = () => {
        const { id, isNew, ...data } = rows[0];
        const { isValid, field } = validateObject(data);
        if (isValid) {
            toast.error(`${field} is a required filed`);
            return;
        }
        postContactPerson(data)
            .then((res) => {
                setLoader({ message: "", status: false });
                toast.success(`Successfully saved`);
                handleNext();
            })
            .catch((error) => {
                setLoader({ message: "", status: false });
                toast.error(error.message);
            });
    };

    const handleSubmitVendorInformation = (event) => {
        event.preventDefault();
        const vendorObject = {
            vendor_reference: vendorReferenceRef.current.value,
            website: vendorWebsiteRef.current.value,
            kra_pin: vendorPinRef.current.value,
            product_description: vendorProdDescRef.current.value,
            company_name: vendorCompanyNameRef.current.value,
            vendor_phone: vendorPhoneRef.current.value,
            vendor_email: vendorEmailRef.current.value,
            vendor_name: vendorNameRef.current.value,
            national_id: vendorNationalIDRef.current.value,
        };
        // VALIDATE VENDOR OBJECT
        validRef.current = ObjectValidator(
            [
                "company_name",
                "product_description",
                "kra_pin",
                "vendor_name"
            ],
            vendorObject
        );
        if (!validRef.current) {
            toast.error("Invalid payload!");
            handleBack();
            return;
        }
        // POST VENDOR
        setLoader({ message: "Creating vendor...", status: true });
        postVendor(vendorObject)
            .then((res) => {
                // WebStorage.RemoveFromStorage('session', `${APPNAME}_VENDOR_DEPENDENCY_KEYS`);
                setLoader({ message: "", status: false });
                toast.success("Vendor successfully created");
                navigate(`/dashboard/purchases/vendor/vendors`);
            })
            .catch((error) => {
                setLoader({ message: "", status: false });
                toast.error(error.message);
            });
    }

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

    const createVendorSteps = [
        {
            caption: 'Add primary currency',
            id: uuidv4(),
            Component: <VendorCurrencyComponent ref={currencyRefObject} />,
            stepAction: handleSubmitCurrency
        },
        {
            caption: 'Add billing information',
            id: uuidv4(),
            Component: <VendorBilling ref={billingInfo} handleSelectedPaymentMethod={handleSelectedPaymentMethod} />,
            stepAction: handleSubmitBillingInformation
        },
        {
            caption: 'Add vendor address details',
            id: uuidv4(),
            Component: <VendorAddressDetails ref={addressObject} />,
            stepAction: handleSubmitAddress
        },
        {
            caption: 'Add contact person',
            id: uuidv4(),
            Component: <ContactPerson
                rows={rows}
                columns={contactColumns}
                setRows={setRows}
                rowModesModel={rowModesModel}
                setRowModesModel={setRowModesModel}
                handleRowModesModelChange={handleRowModesModelChange}
                processRowUpdate={processRowUpdate}
                handleRowEditStop={handleRowEditStop}
            />,
            stepAction: handleSubmitContactInfo
        },
        {
            caption: 'Add general vendor information',
            id: uuidv4(),
            Component: <VendorInformation ref={vendorInformationRefObject} />,
            stepAction: handleSubmitVendorInformation
        },
    ];

    useEffect(() => {

    }, [contactColumns, rows]);


    const handleReset = () => {
        setActiveStep(0);
    };

    useEffect(() => {

    }, [rows]);

    const SetPayload = (event) => {
        event.preventDefault();
        event.stopPropagation();
        postBillingInformation(billinObject)
            .then((res) => {

                const idObject = WebStorage.GetFromWebStorage('session', `${APPNAME}_VENDOR_DEPENDENCY_KEYS`);
                if (!idObject['currency']) {
                    console.error("Invalid payload, currency information did not insert correctly!");
                    throw new Error("Invalid payload, Currency information did no insert correctly!");
                }
                idObject.billing_id = res?.id
                WebStorage.storeToWebDB('session', `${APPNAME}_VENDOR_DEPENDENCY_KEYS`, idObject);

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
                const addresses = [];
                postAddress(addressObject)
                    .then((res) => {

                        if (!idObject['billing_id'] || !idObject['currency']) {
                            console.error("Invalid payload, Billing and currency  information did no insert correctly!");
                            throw new Error("Invalid payload, Billing and currency information did no insert correctly!");
                        }
                        addresses.push(res?.address_id);
                        idObject.addresses = addresses;
                        WebStorage.storeToWebDB('session', `${APPNAME}_VENDOR_DEPENDENCY_KEYS`, idObject);

                        // POSTING CONTACT PERSON
                        const { id, isNew, ...data } = rows[0];
                        const contacts = [];
                        postContactPerson(data)
                            .then((res) => {
                                contacts.push(res?.contact_id);
                                idObject.contacts = contacts;
                                WebStorage.storeToWebDB('session', `${APPNAME}_VENDOR_DEPENDENCY_KEYS`, idObject);

                                // COMPOSE VENDOR
                                const vendorObject = {
                                    vendor_reference: vendorReferenceRef.current.value,
                                    website: vendorWebsiteRef.current.value,
                                    kra_pin: vendorPinRef.current.value,
                                    product_description: vendorProdDescRef.current.value,
                                    company_name: vendorCompanyNameRef.current.value,
                                    vendor_phone: vendorPhoneRef.current.value,
                                    vendor_email: vendorEmailRef.current.value,
                                    vendor_name: vendorNameRef.current.value,
                                    national_id: vendorNationalIDRef.current.value,
                                };

                                if (!validRef.current) {
                                    throw new Error("Invalid payload!");
                                }
                                // POST VENDOR
                                postVendor(vendorObject)
                                    .then((res) => {
                                        console.log(res);
                                        WebStorage.RemoveFromStorage('session', `${APPNAME}_VENDOR_DEPENDENCY_KEYS`);
                                        navigate(`/dashboard/purchases/vendor/vendors`);
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            })
                    })
            });

    }

    return (
        <section className="new_vendors">
            <shared.components.SectionIntroduction text="New Vendor" />
            <Stepper activeStep={activeStep} orientation="vertical">
                {
                    createVendorSteps.map((step, index) => {
                        return (
                            <Step key={step.id}>
                                <StepLabel>{step.caption}</StepLabel>
                                <StepContent>
                                    <>{step.Component}</>
                                    <Box sx={{ mb: 2, mt: 4 }}>
                                        <div className="stepperButtons">
                                            <Button
                                                onClick={step.stepAction}
                                                className="btn-element btn_primary "
                                            >
                                                {index === createVendorSteps.length - 1 ? 'Finish' : 'Continue'}
                                            </Button>
                                            <Button
                                                disabled={index === 0}
                                                onClick={handleBack}
                                                className="btn-element btn_transparent "
                                            >
                                                Back
                                            </Button>
                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                        )
                    })
                }
            </Stepper>
        </section>

        // <section className="new_vendors">
        //     <div className="new_vendors__left">
        //         <shared.components.SectionIntroduction text="New Vendor" />
        //         <div className="new_vendors__left__dataentry">
        //             <Form className="new_vendors__left__dataentry__form">
        //                 <div className="new_vendors__left__dataentry__form_vendorinfo">
        //                     <VendorInformation
        //                         ref={vendorInformationRefObject}
        //                     />
        //                 </div>
        //                 <div className="new_vendors__left__dataentry__form_billinginfo">
        //                     <div className="new_vendors__left__dataentry__form_billinginfo_introduction form_section_introductions">
        //                         <h4>Billing</h4>
        //                         <p>The tax number appears in every bill issued to you. The selected currency becomes the default currency for this vendor.</p>
        //                     </div>
        //                     <VendorBilling ref={billingInfo} handleSelectedPaymentMethod={handleSelectedPaymentMethod} handleAddCurrency={handleAddCurrency} />
        //                     <CurrencyComponent ref={currencyRefObject} open={open} handleCloseDialog={handleCloseDialog} dialogTitle="Add currency" maxWidth='200' handleSubmitCurrency={handleSubmitCurrency} />
        //                 </div>
        //                 <div className="new_vendors__left__dataentry__form_addressinfo">
        //                     <div className="new_vendors__left__dataentry__form_addressinfo_introduction form_section_introductions">
        //                         <h4>Address</h4>
        //                         <p>The address is required for the bills, so you need to add billing address details for your vendor.</p>
        //                     </div>
        //                     <div className="new_vendors__left__dataentry__form_addressinfo_datanetry">
        //                         <div className="new_vendors__left__dataentry__form_addressinfo_datanetry__section-one">
        //                             <InputComponent
        //                                 prelabelText={"address finder"}
        //                             />
        //                             <div className="textarea_container">
        //                                 <label htmlFor="address">address</label>
        //                                 <textarea name="address" id="address" cols="30" rows="4" className="info_textarea" ref={addressRef}></textarea>
        //                             </div>
        //                         </div>
        //                         <div className="new_vendors__left__dataentry__form_addressinfo_datanetry__section-two">
        //                             <InputComponent
        //                                 type="text"
        //                                 prelabelText={"town / city"}
        //                                 name="city"
        //                                 ref={cityRef}
        //                             />
        //                             <InputComponent
        //                                 type="text"
        //                                 prelabelText={"postal / zip code"}
        //                                 name="zip_code"
        //                                 ref={zipCodeRef}
        //                             />
        //                             <InputComponent
        //                                 type="text"
        //                                 prelabelText={"province / state"}
        //                                 name="state"
        //                                 ref={stateRef}
        //                             />
        //                             <InputComponent
        //                                 type="text"
        //                                 prelabelText={"country"}
        //                                 name="country"
        //                                 ref={countryRef}
        //                             />
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="new_vendors__left__dataentry__form_contactperson">
        //                     <div className="new_vendors__left__dataentry__form_contactperson_introduction form_section_introductions">
        //                         <h4>Contact Person</h4>
        //                         <p>To include additional recipients in an email as CC, add them as contact persons.</p>
        //                     </div>
        //                     <div className="new_vendors__left__dataentry__form_contactperson_datacolumns">
        //                         <ContactPerson
        //                             rows={rows}
        //                             columns={contactColumns}
        //                             setRows={setRows}
        //                             rowModesModel={rowModesModel}
        //                             setRowModesModel={setRowModesModel}
        //                             handleRowModesModelChange={handleRowModesModelChange}
        //                             processRowUpdate={processRowUpdate}
        //                             handleRowEditStop={handleRowEditStop}
        //                         />
        //                     </div>
        //                 </div>
        //                 <FormButtonRow className={'form_actions_wide'} methodHandler={SetPayload} />
        //             </Form>
        //         </div>
        //     </div>
        //     <div className="new_vendors__right">
        //         <div className="new_vendors__right_container">
        //             <img src={cardImage} alt="card" />
        //         </div>
        //         <div className="new_vendors__right_text_div">
        //             <div className="customefields">
        //                 <Button>custom fields</Button>
        //             </div>
        //             <div className="payroll-hypertext">
        //                 <h3>Payroll</h3>
        //                 <p>Create multiple pay calendars, run payrolls, print payslips, add benefits and deductions, and make bulk payments.</p>
        //                 <Button>Learn more</Button>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}

export default NewVendor