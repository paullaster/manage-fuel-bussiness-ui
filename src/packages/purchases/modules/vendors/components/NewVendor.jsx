import { Button, InputComponent,  } from "@/components";
import { MdOutlineStarOutline } from "react-icons/md";
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
                        <label htmlFor="organization_id">Organization</label>
                        <select name="organization_id" id="organization_id">

                        </select>
                    </div>
                    <InputComponent 
                    type="text"
                    prelabelText = {"national ID"}
                    name="organization_id"
                    />
                </Form>
            </div>
        </div>
        <div></div>
    </section>
  )
}

export default NewVendor