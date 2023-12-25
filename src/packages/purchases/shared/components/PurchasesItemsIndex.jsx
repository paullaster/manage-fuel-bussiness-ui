import { MdChevronRight } from "react-icons/md";
import vendorsImage from "@/assets/images/vendors.svg";
import { NavLink } from "react-router-dom";

const PurchasesItemsIndex = (
    {
        particular = "particular",
        intro = "intro text",
        actionInformation = [
            { caption: "action name 1", link: 'somewhere', description: "action description text 1", },
            { caption: "action name 2", link: 'somewhere', description: "action description text 2" },
            { caption: "action name 3", link: 'somewhere', description: "action description text 3" }
        ],
        componentImage = vendorsImage,
    }
) => {
    return (
        <section className="purchase_items_index">
            <div className="purchase_items_index_actions">
                <div className="purchase_items_heading">
                    <h2>{particular}</h2>
                    <p>
                        {intro}
                    </p>
                </div>
                <div className="purchase_items_action_link">

                    {
                        actionInformation.map((action, index) => {
                            return (
                                <div key={action.caption}>
                                    <NavLink to={action.link} >
                                        <span className="action_name_and_description">
                                            <span className="action_name new_purchase_items_glow"><span>{action.caption}</span><span></span>
                                            </span>
                                            <span className="action_description">{action.description}</span>
                                        </span>
                                        <span className="action_graphic"><MdChevronRight size={30} /></span>
                                    </NavLink>
                                </div>
                            )
                        })
                    }

                    {/* <div>
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
                    </div> */}
                </div>
            </div>
            <div className="purchase_items_graphics">
                <img src={componentImage} alt="Component image" />
            </div>
        </section>
    )
}

export default PurchasesItemsIndex