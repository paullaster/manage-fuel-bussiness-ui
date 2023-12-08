import { MdChevronRight } from "react-icons/md";
import vendorsImage from "@/assets/images/vendors.svg";
import { NavLink } from "react-router-dom";

const Vendors = () => {
  return (
    <section className="vendor_index">
      <div className="vendor_index_actions">
        <div className="vendor_heading">
          <h2>Vendors</h2>
          <p>
            Vendors are required if you want to create bills. You can see the balance<br />you owe and filter reports by the vendor.
          </p>
        </div>
        <div className="vendor_action_link">
          <div>
            <NavLink to={'/dashboard/purchases/vendor/create'}>
              <span className="action_name_and_description">
                <span className="action_name new_vendor_glow"><span>new vendor</span><span></span></span>
                <span className="action_description">Enter the details and create your first vendor</span>
              </span>
              <span className="action_graphic"><MdChevronRight size={30} /></span>
            </NavLink>
          </div>
          <div>
            <NavLink>
              <span className="action_name_and_description">
                <span className="action_name">import vendor</span>
                <span className="action_description">Import your existing vendor with a single click</span>
              </span>
              <span className="action_graphic"><MdChevronRight size={30} /></span>
            </NavLink>
          </div>
          <div>   
            <NavLink>
              <span className="action_name_and_description">
                <span className="action_name">Payroll</span>
                <span className="action_description">Reduce time spent on employee payments, benefits, and deductions</span>
              </span>
              <span className="action_graphic"><MdChevronRight size={30} /></span>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="vendor_graphics">
        <img src={vendorsImage} alt="Vendors image" />
      </div>
    </section>
  )
}

export default Vendors