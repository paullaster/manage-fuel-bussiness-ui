import { MdChevronRight } from "react-icons/md";
import vendorsImage from "@/assets/images/vendors.svg";
import { NavLink } from "react-router-dom";
import { usePurchasesDispatcher } from "../../Context";
import {useEffect, useContext} from 'react';
import { fetchVendorsList } from "../../actions";
import { generator } from '@/utils/';
import { LoadingContext } from '@/store';
import { toast } from 'react-toastify';

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


  const purchasesActions = usePurchasesDispatcher();
  const { setLoader } = useContext(LoadingContext);


  useEffect(() => {
    setLoader({ message: '', status: true });
    fetchVendorsList({limit: 10})
        .then((res) => {
            const vendorsWithID = [];
            for (const vendor of generator(res.vendors.results)) {
                vendor.id = vendor.vendor_id;
                vendorsWithID.push(vendor);
            }
            const vendorsArray = Array.from(new Set(vendorsWithID));
            purchasesActions({type: 'SET_VENDORS', payload: vendorsArray});
            setLoader({ message: '', status: false });
        })
        .catch((error) => {
            setLoader({ message: '', status: false });
            toast.error(error.message);
        });
    
        

    return () => {

    }
}, []);


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
                        actionInformation.map((action) => {
                            return (
                                <div key={action.caption}>
                                    <NavLink to={action.link} >
                                        <span className="action_name_and_description">
                                            <span className="action_name new_purchase_items_glow"><span className="sudoglow"></span><span className="spanCaption">{action.caption}</span>
                                            </span>
                                            <span className="action_description">{action.description}</span>
                                        </span>
                                        <span className="action_graphic"><MdChevronRight size={30} /></span>
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="purchase_items_graphics">
                <img src={componentImage} alt="Component" />
            </div>
        </section>
    )
}

export default PurchasesItemsIndex