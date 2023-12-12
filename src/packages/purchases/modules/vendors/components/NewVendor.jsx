import { Button, InputComponent, } from "@/components";
import { useState } from "react";
import { MdOutlineStarOutline, MdAdd, MdDelete } from "react-icons/md";
import { Form } from "react-router-dom";


const NewVendor = () => {

    const [upload, uploadPreview] = useState(null);

    const handleUploadChange = (event) => {
        console.log(event.target.files);
        uploadPreview(URL.createObjectURL(event.target.files[0]));
    };

    const handleDeleteImage = (event) => {
        event.stopPropagation();
        event.preventDefault();
        console.log(event.type)
    };

    const handleOnMouseEnter = (event) => {
        event.type = "mouseenter" && upload ?
            (
                event.target.querySelector('span').className += " show"
            ) : "";
    };

    return (
        <section className="new_vendors">
            <div className="new_vendors__left">
                <div className="new_vendors__left__introduction">
                    <h2>New Vendor</h2>
                    <Button>
                        <MdOutlineStarOutline size={20} />
                    </Button>
                </div>
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
                                        type="url"
                                        prelabelText={"reference"}
                                        name="vendor_reference"
                                    />
                                </div>
                                <div className="new_vendors__left__dataentry__form_vendorinfo__others_right">
                                    <div className="file_upload_container" onMouseEnter={handleOnMouseEnter}>
                                        <label htmlFor="vendor_logo" className={upload ? '' : 'show'}>upload picture</label>
                                        <input type="file" id="vendor_logo" accept=".ico, .svg, .jpg, .jpeg, .png, .gif, .web" onChange={handleUploadChange} />
                                        <img src={upload} alt="image preview" className={upload ? 'show' : ''} />
                                        <span onClick={handleDeleteImage}> <MdDelete size={20} /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="new_vendors__left__dataentry__form_billinginfo">
                            <div className="new_vendors__left__dataentry__form_billinginfo_introduction form_section_introductions">
                                <h4>Billing</h4>
                                <p>The tax number appears in every bill issued to you. The selected currency becomes the default currency for this vendor.</p>
                            </div>
                            <div className="new_vendors__left__dataentry__form_billinginfo_dataentry">
                                <div className="new_vendors__left__dataentry__form_billinginfo_dataentry_section-one">
                                    <InputComponent
                                        type="text"
                                        prelabelText={"Tax number"}
                                        name="kra_pin"
                                    />
                                    <InputComponent
                                        type="text"
                                        prelabelText={"currency"}
                                        name="currency"
                                    />
                                </div>
                                <div className="new_vendors__left__dataentry__form_billinginfo_dataentry_section-two">
                                    <label htmlFor="product_description">product description</label>
                                    <textarea name="product_description" id="product_description" cols="30" rows="4" className="info_textarea"></textarea>
                                </div>
                            </div>
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
                                        <textarea name="address" id="address" cols="30" rows="4" className="info_textarea"></textarea>
                                    </div>
                                </div>
                                <div className="new_vendors__left__dataentry__form_addressinfo_datanetry__section-two">
                                    <InputComponent
                                        type="text"
                                        prelabelText={"town / city"}
                                        name="city"
                                    />
                                    <InputComponent
                                        type="text"
                                        prelabelText={"postal / zip code"}
                                        name="zip_code"
                                    />
                                    <InputComponent
                                        type="text"
                                        prelabelText={"province / state"}
                                        name="state"
                                    />
                                    <InputComponent
                                        type="text"
                                        prelabelText={"country"}
                                        name="country"
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
                                <div className="button_container">
                                    <Button>
                                        <span><MdAdd size={20} /></span>
                                        <span>add a contact person</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
            <div className="new_vendors__right"></div>
        </section>
    )
}

export default NewVendor