import PurcahsesItemsTopBar from './PurcahsesItemsTopBar';
import WebStorage from "@/utils/WebStorage";
import { APPNAME } from "@/environments";
import BalancesListComponent from './BalancesListComponent';
import PurchaseTransactionComponent from './PurchaseTransactionComponent';
import { useEffect } from 'react';
import { fetchFuelPurchases } from '../../actions';
import { usePurchasesDispatcher } from '../../Context';

const orgData = WebStorage.GetFromWebStorage('session', `${APPNAME}_ORG_DATA`);

const BillRecords = () => {

  const purchaseActions = usePurchasesDispatcher();

  useEffect(() => {
    fetchFuelPurchases({limit: 10})
    .then((res) => {
      purchaseActions({type: 'SET_BILLS', payload: {filter: true, bills: res.fuel_purchase.results}})
    })
    .catch((error) => {
      console.log(error);
    });
    return () => {

    }
  },[]);

  return (
    <div>
    <PurcahsesItemsTopBar caption={'Bill'}/>
    <BalancesListComponent currency={orgData?.currency}/>
    <PurchaseTransactionComponent />
    </div>
  )
}

export default BillRecords