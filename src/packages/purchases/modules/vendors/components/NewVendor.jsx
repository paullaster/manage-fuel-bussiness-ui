import { Button, InputComponent, } from "@/components";
import { MdOutlineStarOutline, MdAdd } from "react-icons/md";
import { Form } from "react-router-dom";


const NewVendor = () => {
    return (
        <section>
            <div>
                <div className="new_vendor_introduction">
                    <h2>New Vendor</h2>
                    <Button>
                        <MdOutlineStarOutline size={35} />
                    </Button>
                </div>
                <div className="new_vendor_form">
                    <Form>
                        <div>
                            <InputComponent
                                type="text"
                                prelabelText={"national ID"}
                                name="organization_id"
                            />
                            <InputComponent
                                type="text"
                                prelabelText={"vendor name"}
                                name="vendor_name"
                            />
                            <InputComponent
                                type="email"
                                prelabelText={"vendor email"}
                                name="vendor_email"
                            />
                            <InputComponent
                                type="tel"
                                prelabelText={"vendor phone"}
                                name="vendor_phone"
                            />
                            <InputComponent
                                type="text"
                                prelabelText={"company name"}
                                name="company_name"
                            />
                            <InputComponent
                                type="url"
                                prelabelText={"website"}
                                name="website"
                            />
                            <InputComponent
                                type="url"
                                prelabelText={"vendor reference"}
                                name="vendor_reference"
                            />
                        </div>
                        <div>
                            <label htmlFor="product_description">product description</label>
                            <textarea name="product_description" id="product_description" cols="30" rows="10"></textarea>
                        </div>
                        <InputComponent
                            type="text"
                            prelabelText={"kra pin"}
                            name="kra_pin"
                        />
                        <div>
                            <div>
                                Address
                            </div>
                            <div>
                                <div>
                                    <InputComponent
                                        prelabelText={"address_finder"}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="address">address</label>
                                    <textarea name="address" id="address" cols="30" rows="10"></textarea>
                                </div>
                                <div>
                                    <div>
                                        <InputComponent
                                            type="text"
                                            prelabelText={"town / city"}
                                            name="city"
                                        />
                                    </div>
                                    <div>
                                        <InputComponent
                                            type="text"
                                            prelabelText={"postal / zip code"}
                                            name="zip_code"
                                        />
                                    </div>
                                    <div>
                                        <InputComponent
                                            type="text"
                                            prelabelText={"province / state"}
                                            name="state"
                                        />
                                    </div>
                                    <div>
                                        <InputComponent
                                            type="text"
                                            prelabelText={"country"}
                                            name="country"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>Contact Person</h3>
                                <p>To include additional recipients in an email as CC, add them as contact persons</p>
                            </div>
                            <div>
                                <div>Name</div>
                                <div>Email</div>
                                <div>Phone</div>
                            </div>
                            <div>
                                <Button>
                                    <span><MdAdd size={35} /></span>
                                    <span>add a contact person</span>
                                </Button>
                            </div>
                        </div>
                        <InputComponent
                            type="url"
                            prelabelText={"vendor reference"}
                            name="contact_name"
                        />
                    </Form>
                </div>
            </div>
            <div></div>
        </section>
    )
}

export default NewVendor