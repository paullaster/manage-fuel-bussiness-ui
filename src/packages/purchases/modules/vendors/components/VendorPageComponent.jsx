import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchVendorsList } from "../../../actions";
import SingleVendorPageActionsComponent from "./SingleVendorPageActionsComponent";
import BioAndBalancesComponent from "./BioAndBalancesComponent";
import VendorProfileComponent from './VendorProfileComponent';
import VendorTransactionsComponent from './VendorTransactionsComponent';

const VendorPageComponent = () => {
  const [vendor, setVendor] = useState();
  const { vendorId } = useParams();

  useEffect(() => {
    fetchVendorsList({vendor_id: vendorId})
    .then((res) => {
        setVendor(res);
    })
    .catch((error) => {
        console.log(error);
    })
  }, [vendorId]);

  return (
    <section className="vendorPage">
        <SingleVendorPageActionsComponent vendorName={vendor?.vendor_name}/>
        <BioAndBalancesComponent bio={vendor}/>
        <div>
            <VendorProfileComponent vendor={vendor}/>
            <VendorTransactionsComponent />
        </div>
    </section>
  )
}

export default VendorPageComponent