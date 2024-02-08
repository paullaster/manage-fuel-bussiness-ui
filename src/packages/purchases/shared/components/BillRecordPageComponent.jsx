import PurcahsesItemsTopBar from "./PurcahsesItemsTopBar";
import SingleBillActionsList from "./SingleBillActionsList";
import AcountingActions from "./AcountingActions";
import ReportComponent from "./Report/ReportComponent";
import { useEffect } from "react";
import { usePurchasesDispatcher } from "../../Context";

const BillRecordPageComponent = () => {

  const purchasesActions = usePurchasesDispatcher();

  useEffect(() => {
    fetchVendorsList({limit: 10})
    .then((res) => {
        const vendorsWithID = [];
        for (const vendor of generator(res.vendors.results)) {
            vendor.id = vendor.vendor_id;
            vendorsWithID.push(vendor);
        }
        const vendorsArray = Array.from(new Set(vendorsWithID));
        purchasesActions({type: 'SET_VENDORS', payload: vendorsArray});
    })
    .catch((error) => {
        console.log(error);
    });

  }, []);

  return (
    <section>
        <PurcahsesItemsTopBar caption={'Bill'} listOfActions={SingleBillActionsList}/>
        <div>
          <AcountingActions />
          <ReportComponent />
        </div>
    </section>
  )
}

export default BillRecordPageComponent

