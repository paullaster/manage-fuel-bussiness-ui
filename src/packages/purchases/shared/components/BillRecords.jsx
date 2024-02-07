import PurcahsesItemsTopBar from './PurcahsesItemsTopBar';
import WebStorage from "@/utils/WebStorage";
import { APPNAME } from "@/environments";
import BalancesListComponent from './BalancesListComponent';
import PurchaseTransactionComponent from './PurchaseTransactionComponent';

const orgData = WebStorage.GetFromWebStorage('session', `${APPNAME}_ORG_DATA`);

const BillRecords = () => {


  return (
    <div>
    <PurcahsesItemsTopBar caption={'Bill'}/>
    <BalancesListComponent currency={orgData?.currency}/>
    <PurchaseTransactionComponent />
    </div>
  )
}

export default BillRecords