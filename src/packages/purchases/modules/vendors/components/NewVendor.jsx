import { /*Button,*/ InputComponent, } from "@/components";
import { useRef, useState, useContext, forwardRef, useEffect, useCallback } from "react";
import shared from "../../../shared";
import { postAddress, postBillingInformation, postContactPerson, postVendor, postCurrency, fetchCurrencies } from "../../../actions";
import VendorBilling from "./VendorBilling";
import ContactPerson from "./ContactPerson";
import { v4 as uuidv4 } from 'uuid';
import Autocomplete from '@mui/material/Autocomplete';
import VendorInformation from "./VendorInformation";
import { useNavigate } from 'react-router-dom';
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Box from '@mui/material/Box';
import { LoadingContext } from '@/store';
import { toast } from 'react-toastify';
import DivisionTopBar from "../../../shared/components/DivisionTopBar";
import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { APPNAME } from "@/environments";
import WebStorage from "@/utils/WebStorage";
import { usePurchasesDispatcher, usePurchasesState } from "../../../Context";


const VendorCurrencyComponent = forwardRef((props, ref) => {
    const { getNewAddedCurrency, setCurrency, currency } = props;
    const { currencies: currenciesList } = usePurchasesState();

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


    const handleOpenCreateCurrencyDialog = () => {
        setCurrency({ currency_code: 'createCurrency', currency_name: 'Create New Currency' });
    }

    const handleAddedCurrency = () => {
        const newCurrency = getNewAddedCurrency();
        setCurrency(newCurrency);
    }

    return (
        <div className="currencyComponent">
            <DivisionTopBar
                sectionTitle={'Currency'}
            >
                <p>This will be your vendor's primary currency.</p>
            </DivisionTopBar>
            <Autocomplete
                value={currency}
                options={currenciesList}
                onChange={(event, value) => setCurrency(value)}
                id={'Select Currency'}
                isOptionEqualToValue={(option, value) => option.currency_code === value.currency_code}
                renderInput={(params) => <TextField {...params} label={'Select Currency'} />}
                getOptionLabel={(option) => option['currency_name'] ? option['currency_name'] : ''}
                renderOption={(props, option, { selected }) => (
                    <>
                        {option.currency_code === 'createCurrency' ? (
                            <Button variant="contained" onClick={handleOpenCreateCurrencyDialog}>
                                {option.currency_name}
                            </Button>
                        ) : (
                            <ListItem button selected={selected} key={option.currency_code}>
                                <ListItemText primary={option.currency_name} />
                            </ListItem>
                        )}
                    </>
                )}
            />
            <Dialog
                open={currency?.currency_code === 'createCurrency'}
                onClose={handleOpenCreateCurrencyDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullScreen={fullScreen}
            >
                <DialogTitle>New Currency</DialogTitle>
                <DialogContent>
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
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={() => setCurrency(currenciesList?.find(c => c?.currency_code === "KES"))}>close</Button>
                    <Button variant="contained" disableElevation onClick={handleAddedCurrency}>create</Button>
                </DialogActions>
            </Dialog>
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
    const [activeStep, setActiveStep] = useState(0);
    const { setLoader } = useContext(LoadingContext);
    const purchaseStateSetter = usePurchasesDispatcher();
    const purchaseState = usePurchasesState();
    const [currency, setCurrency] = useState(purchaseState?.currencies?.find(c => c.currency_code === "KES"));

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
            if (currency?.currency_id) {
                WebStorage.storeToWebDB('session', `${APPNAME}_VENDORDEPENDENCIES`, { currency: currency.currency_id });
                toast.success('Currency information saved successfully');
                handleNext();
            }
            let currencyObject = currency;
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
            const { label, value, ...payload } = currencyObject;
            setLoader({ message: "Saving currency informtion...", status: true });
            postCurrency(payload)
                .then((res) => {
                    WebStorage.storeToWebDB('session', `${APPNAME}_VENDORDEPENDENCIES`, { currency: res.currency_id });
                    setLoader({ message: "", status: false });
                    toast.success('Currency information saved successfully');
                    currencyObject = {};
                    handleNext();
                })
                .catch((error) => {
                    setLoader({ message: "", status: false });
                    currencyObject = {};
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
                const vndDeps = WebStorage.GetFromWebStorage('session', `${APPNAME}_VENDORDEPENDENCIES`);
                if (vndDeps) {
                    vndDeps.billing = [res.id];
                    WebStorage.storeToWebDB('session', `${APPNAME}_VENDORDEPENDENCIES`, vndDeps);
                }
                setLoader({ message: "", status: false });
                toast.success(`Billing information saved successfully`);
                handleNext();
            })
            .catch((error) => {
                setLoader({ message: "", status: false });
                toast.error(error.message);
            })

    }

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
                const vndDeps = WebStorage.GetFromWebStorage('session', `${APPNAME}_VENDORDEPENDENCIES`);
                if (vndDeps) {
                    vndDeps.addresses = [res.address_id];
                    WebStorage.storeToWebDB('session', `${APPNAME}_VENDORDEPENDENCIES`, vndDeps);
                }
                setLoader({ message: "", status: false });
                toast.success(`Successfully saved`);
                handleNext();
            })
            .catch((err) => {
                setLoader({ message: "", status: false });
                toast.error(err.message);
            });
    };

    const handleSubmitContactInfo = (payload) => {
        console.log(payload);
        const { id, isNew, ...data } = payload[0];
        const { isValid, field } = validateObject(data);
        if (isValid) {
            toast.error(`${field} is a required filed`);
            return;
        }
        postContactPerson(data)
            .then((res) => {
                const vndDeps = WebStorage.GetFromWebStorage('session', `${APPNAME}_VENDORDEPENDENCIES`);
                if (vndDeps) {
                    vndDeps.contacts = [res.contact_id];
                    WebStorage.storeToWebDB('session', `${APPNAME}_VENDORDEPENDENCIES`, vndDeps);
                }
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
        const vndDeps = WebStorage.GetFromWebStorage('session', `${APPNAME}_VENDORDEPENDENCIES`);
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
            ...vndDeps,
        };
        // VALIDATE VENDOR OBJECT
        const { isValid, field } = validateObject(vendorObject);
        if (isValid) {
            toast.error(`${field} is a required filed`);
            return;
        }
        // POST VENDOR
        setLoader({ message: "Creating vendor...", status: true });
        console.log("Log clean vendor data", vendorObject);
        postVendor(vendorObject)
            .then((res) => {
                WebStorage.RemoveFromStorage('session', `${APPNAME}_VENDORDEPENDENCIES`);
                setLoader({ message: "", status: false });
                toast.success("Vendor successfully created");
                purchaseState.onDialog ?
                    (purchaseStateSetter({ type: 'SET_ON_DIALOG_STATE', payload: false }), window.location.reload()) :
                    (purchaseStateSetter({ type: 'SET_ON_DIALOG_STATE', payload: false }), navigate(`/dashboard/purchases/vendor/vendors`));
            })
            .catch((error) => {
                setLoader({ message: "", status: false });
                toast.error(error.message);
            });
    }

    const getNewAddedCurrency = () => {
        return {
            currency_name: currencyNameRef.current.value,
            currency_code: currencyCodeRef.current.value,
            rate: currencyRateRef.current.value,
            symbol: currencySymbolref.current.value,
        };
    }

    const createVendorSteps = [
        {
            caption: 'Add primary currency',
            id: uuidv4(),
            Component: <VendorCurrencyComponent currency={currency} setCurrency={setCurrency} ref={currencyRefObject} getNewAddedCurrency={getNewAddedCurrency} />,
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
            Component: <ContactPerson handleSubmitContactInfo={handleSubmitContactInfo} />,
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
        fetchCurrencies()
            .then((res) => {
                purchaseStateSetter({ type: 'SET_CURRENCIES', payload: res.Currencies.results })
                setLoader({ message: "", status: false });
            })
            .catch((error) => {
                setLoader({ message: "", status: false });
                toast.error(error.message);
            });
        // setCurrency(purchaseState.currencies.find((c => c.currency_code === 'KESK')));
    }, []);

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
                                                variant="contained" disableElevation
                                                sx={{ mr: 2, mb: 2 }}
                                            >
                                                {index === createVendorSteps.length - 1 ? 'Finish' : 'Continue'}
                                            </Button>
                                            <Button
                                                disabled={index === 0}
                                                onClick={handleBack}
                                                variant="outlined"
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
    )
}

export default NewVendor