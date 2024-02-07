import PurcahsesItemsTopBar from "./PurcahsesItemsTopBar";
import SingleBillActionsList from "./SingleBillActionsList";

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

