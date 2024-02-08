import PurcahsesItemsTopBar from "./PurcahsesItemsTopBar";
import SingleBillActionsList from "./SingleBillActionsList";
import AcountingActions from "./AcountingActions";
import ReportComponent from "./Report/ReportComponent";
import { useEffect } from "react";
import { usePurchasesDispatcher } from "../../Context";
import { fetchFuelPurchases } from "../../actions";
import { useParams } from 'react-router-dom';

const BillRecordPageComponent = () => {

  const purchasesActions = usePurchasesDispatcher();
  const { uuid } = useParams();

  useEffect(() => {
    fetchFuelPurchases({ uuid: uuid })
      .then((res) => {
        purchasesActions({ type: 'SET_CURRENTSELECTED_BILL', payload: res });
      })
      .catch((error) => {
        console.log(error);
      });

  }, [uuid]);

  return (
    <section>
      <PurcahsesItemsTopBar caption={'Bill'} listOfActions={SingleBillActionsList} />
      <div>
        <AcountingActions />
        <ReportComponent />
      </div>
    </section>
  )
}

export default BillRecordPageComponent

