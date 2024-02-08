import {useEffect} from 'react'
import { fetchVendorsList } from '../../../actions';
import { usePurchasesDispatcher } from '../../../Context';

const ReportVendorInformation = () => {

    const purchasesActions = usePurchasesDispatcher
  
    useEffect(() => {
        fetchVendorsList({ uuid: uuid })
          .then((res) => {
            purchasesActions({ type: 'SET_BILL_VENDOR', payload: res });
          })
          .catch((error) => {
            console.log(error);
          });
    
      }, [uuid]);

  return (
    <div>

    </div>
  )
}

export default ReportVendorInformation