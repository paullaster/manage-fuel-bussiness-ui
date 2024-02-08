import PurcahsesItemsTopBar from "./PurcahsesItemsTopBar";
import SingleBillActionsList from "./SingleBillActionsList";
import AcountingActions from "./AcountingActions";
import ReportComponent from "./ReportComponent";

const BillRecordPageComponent = () => {
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

