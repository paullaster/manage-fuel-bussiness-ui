import { MdOutlineStarOutline, MdOutlineSearch, MdAdd, MdPersonAdd } from "react-icons/md";
import { Button, InputComponent } from "@/components";

const NewFuelPurchase = () => {
  return (
    <section className="new_fuel_purchase">
      <div className="new_fuel_purchase_introduction">
        <h2>New fuel Purchase</h2>
        <Button>
          <MdOutlineStarOutline size={20} />
        </Button>
      </div>
      <div className="new_fuel_purchase_bill_info">
        <div className="new_fuel_purchase_bill_info__billitem_1">
          <div className="new_fuel_purchase_bill_info__billitem_1_left">
            <label htmlFor="vendor" className ="label-required">Vendor</label>
            <div className="add_item_placeholder">
              <span>
                    <MdPersonAdd size={20}/>
              </span>
              <span>
                  Add a vendor
              </span>
            </div>
            <div className="add_new_item_card">
              <div className="add_new_item_card__search">
                <span><MdOutlineSearch size={20} /></span>
                <input type="search" name="vendor" id="vendor" />
              </div>
              <div>
              </div>
              <Button>
                <span><MdAdd size={20} /></span>
                <span>new vendor</span>
              </Button>
            </div>
          </div>
          <div className="new_fuel_purchase_bill_info__billdate_right">
            <div>
              <InputComponent
                prelabelText="Dip Quantity before offloading"
                name="dip_quantity_before_offloading"
              />
              <InputComponent
                prelabelText="sales quantity"
                name="sales_quantity_during_offloading"
              />
            </div>
            <div>
              <InputComponent
                prelabelText="expected quantity"
                name="expected_quantity"
              />
              <InputComponent
                prelabelText="actual dip quantity after offloading"
                name="actual_dip_quantity_after_offloading"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <InputComponent
              prelabelText="transport name"
              name="transport_name"
            />
            <InputComponent
              prelabelText="vehicle registration"
              name="vehicle_registration"
            />
          </div>
          <div>
            <InputComponent
              prelabelText="driver name"
              name="driver_name"
            />
            <InputComponent
              prelabelText="actual dip quantity after offloading"
              name="actual_dip_quantity_after_offloading"
            />
          </div>
        </div>
        <div>
          <label htmlFor="invoice">Invoice</label>
          <div>
            <span><MdOutlineSearch size={20} /></span>
            <input type="search" name="invoice" id="invoice" />
          </div>
          <div>
            <Button>
              <span><MdAdd size={20} /></span>
              <span>new invoice</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewFuelPurchase