import { Outlet } from "react-router-dom";
import { PurchasesStateProvider, usePurchasesDispatcher } from "../Context";
import {useEffect} from 'react';
import { fetchVendorsList } from "../actions";


const Purchases = () => {

  const purchasesActions = usePurchasesDispatcher();

  useEffect(() => {
    fetchVendorsList({limit: 10})
        .then((res) => {
            console.log(res.vendors.results);
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

    return () => {

    }
}, []);

  return (
    <PurchasesStateProvider>
      <Outlet />
    </PurchasesStateProvider>
  )
}

export default Purchases