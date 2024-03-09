import PurcahsesItemsTopBar from './PurcahsesItemsTopBar';
import WebStorage from "@/utils/WebStorage";
import { APPNAME } from "@/environments";
import BalancesListComponent from './BalancesListComponent';
import PurchaseTransactionComponent from './PurchaseTransactionComponent';
import { useContext, useEffect } from 'react';
import { fetchFuelPurchases, fetchItemPurchases } from '../../actions';
import { usePurchasesDispatcher } from '../../Context';
import PurchasesActionsList from "./PurchasesActionList";
import { useGlobalDispatcher, useGlobalState, LoadingContext, AuthContext } from '@/store';
import { toast } from 'react-toastify';

const orgData = WebStorage.GetFromWebStorage('session', `${APPNAME}_ORG_DATA`);

const BillRecords = () => {

  const purchaseActions = usePurchasesDispatcher();
  const { setLoader } = useContext(LoadingContext);

  useEffect(() => {
    setLoader({message: '', status: true});
    fetchFuelPurchases({limit: 10})
    .then((res) => {
      purchaseActions({type: 'SET_BILLS', payload: {filter: true, bills: res.fuel_purchase.results}});
      setLoader({message: '', status: false});
    })
    .catch((error) => {
      setLoader({message: '', status: false});
      toast.error(error.message);
    });

    setLoader({message: '', status: true});
    fetchItemPurchases({limit: 10})
    .then((res) => {
      purchaseActions({type: 'SET_BILLS', payload: {filter: true, bills: res.Items.results}});
      setLoader({message: '', status: false});
    })
    .catch((error) => {
      setLoader({message: '', status: false});
      toast.error(error.message);
    });
    return () => {

    }
  },[]);

  return (
    <section>
    <PurcahsesItemsTopBar caption={'Bill'} listOfActions={PurchasesActionsList}/>
    <BalancesListComponent currency={orgData?.currency}/>
    <PurchaseTransactionComponent />
    </section>
  )
}

export default BillRecords