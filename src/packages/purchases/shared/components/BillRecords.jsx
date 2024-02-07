import PurcahsesItemsTopBar from './PurcahsesItemsTopBar';
import WebStorage from "@/utils/WebStorage";
import { APPNAME } from "@/environments";
import BalancesListComponent from './BalancesListComponent';
import PurchaseTransactionComponent from './PurchaseTransactionComponent';
import { useEffect } from 'react';
import { fetchFuelPurchases } from '../../actions';
import { usePurchasesDispatcher, usePurchasesState, usePurchasesState } from '../../Context';

const orgData = WebStorage.GetFromWebStorage('session', `${APPNAME}_ORG_DATA`);

const BillRecords = () => {

  const purchaseActions = usePurchasesDispatcher();
  const usePurchasesState = usePurchasesState();

  useEffect(() => {
    fetchFuelPurchases({limit: 10})
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
    return () => {

    }
  })

  return (
    <div>
    <PurcahsesItemsTopBar caption={'Bill'}/>
    <BalancesListComponent currency={orgData?.currency}/>
    <PurchaseTransactionComponent />
    </div>
  )
}

export default BillRecords