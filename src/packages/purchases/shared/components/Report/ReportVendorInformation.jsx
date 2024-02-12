import {useEffect} from 'react'
import { fetchVendorsList } from '../../../actions';
import { usePurchasesDispatcher, usePurchasesState } from '../../../Context';
import VendorDetails from './VendorDetails';

const ReportVendorInformation = () => {

    const purchasesActions = usePurchasesDispatcher();
    const { bill } = usePurchasesState();

    // const { uuid } = bill.vendor;
  
    useEffect(() => {
    fetchVendorsList({ /*uuid: uuid */ limit: 1})
          .then((res) => {
            purchasesActions({ type: 'SET_VENDOR', payload: res.vendors.results[0]});
          })
          .catch((error) => {
            console.log(error);
          });
    
      }, [/*uuid*/]);

  return (
    <div>
        <h3>Bill From</h3>
        <VendorDetails />
    </div>
  )
}

export default ReportVendorInformation