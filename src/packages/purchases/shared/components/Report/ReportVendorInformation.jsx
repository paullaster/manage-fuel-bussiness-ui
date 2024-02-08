import {useEffect} from 'react'
import { fetchVendorsList } from '../../../actions';
import { usePurchasesDispatcher, usePurchasesState } from '../../../Context';

const ReportVendorInformation = () => {

    const purchasesActions = usePurchasesDispatcher();
    const { bill } = usePurchasesState();

    const { uuid } = bill.vendor;
  
    useEffect(() => {
        fetchVendorsList({ uuid: uuid })
          .then((res) => {
            purchasesActions({ type: 'SET_VENDOR', payload: res });
          })
          .catch((error) => {
            console.log(error);
          });
    
      }, [uuid]);

  return (
    <div>
        <h3>Bill From</h3>
        <VendorDetails />
    </div>
  )
}

export default ReportVendorInformation