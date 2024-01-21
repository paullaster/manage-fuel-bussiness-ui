import { Button, InputComponent, } from "@/components";
import { useRef, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Form } from "react-router-dom";
import cardImage from "@/assets/images/card_image.svg";
import shared from "../../../shared";
import { v4 as uuidv4 } from 'uuid';
import { postAddress } from "../../../actions";
import VendorBilling from "./VendorBilling";


const NewVendor = () => {

    const [upload, setUpload] = useState(null);
    const [contactPerson, setContactPerson] = useState([]);

    const addressRef = useRef(null);
    const cityRef = useRef(null);
    const zipCodeRef = useRef(null);
    const stateRef = useRef(null);
    const countryRef = useRef(null);
    const validRef = useRef(true);

    const paymentMethodRef = useRef(null);
    const phoneNumberRef = useRef(null);
    const tillNumberRef = useRef(null);
    const paybillNumberRef = useRef(null);
    const bankNameRef = useRef(null);
    const accountNumberRef = useRef(null);

    
    const handleUploadChange = (event) => {
        setUpload(URL.createObjectURL(event.target.files[0]));
    };

    const handleDeleteImage = (event) => {
        event.stopPropagation();
        event.preventDefault();
        setUpload(null);
    };

    const handleCreateNewVendorColumn = (event) => {
        event.stopPropagation();
        event.preventDefault();
        if (event.type === 'click') {
            const options = [
                { prop: 'name', type: 'text', placeholder: "name",},
                { prop: 'email', type: 'email', placeholder: "email", },
                { prop: 'phone', type: 'tel', placeholder: "phone", },
            ];
            setContactPerson(prev => [...prev, <shared.components.NewConstruct options={options} key={uuidv4()} />]);
        }
    };

    const SetPayload = (event) => {
        event.preventDefault();
        event.stopPropagation();

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

        console.log(addressObject);
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
                            />
                        </div>
                        <div className="new_vendors__left__dataentry__form_vendorinfo__others">
                            <div className="new_vendors__left__dataentry__form_vendorinfo__others_left">
                                <InputComponent
                                    type="email"
                                    prelabelText={"email"}
                                    name="vendor_email"
                                />
                                <InputComponent
                                    type="tel"
                                    prelabelText={"phone"}
                                    name="vendor_phone"
                                />
                                {/* <InputComponent
                                type="text"
                                prelabelText={"company name"}
                                name="company_name"
                            /> */}
                                <InputComponent
                                    type="url"
                                    prelabelText={"website"}
                                    name="website"
                                />
                                <InputComponent
                                    type="text"
                                    prelabelText={"reference"}
                                    name="vendor_reference"
                                />
                                <InputComponent
                                    type="text"
                                    prelabelText={"Tax number"}
                                    name="kra_pin"
                                />
                                <div className="new_vendors__left__dataentry__form_billinginfo_dataentry_section-two">
                                <label htmlFor="product_description">product description</label>
                                <textarea name="product_description" id="product_description" cols="30" rows="4" className="info_textarea"></textarea>
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
                        <VendorBilling/>
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
                            <div>
                                <div>Name</div>
                                <div>Email</div>
                                <div>Phone</div>
                            </div>
                            {
                                contactPerson.length > 0 && contactPerson.map(p => p)
                            }
                            <shared.components.AddItemButton methodHandler={handleCreateNewVendorColumn} btnCaption={"add contact person"} />
                        </div>
                    </div>
                    <Button type='button' className='btn-element' onClick={SetPayload}>Save</Button>
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