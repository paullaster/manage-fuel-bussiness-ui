import { useEffect } from "react";
import shared from "../../../shared";
import { useGlobalDispatcher, useGlobalState } from '@/store';
import { Form } from "react-router-dom";
import { composableAutofils, purchaseEntryColumns} from "../setups";
import TankEntries from "./TankEntries";
import TransportationAndOfficer from "./TransportationAndOfficer";
import FormButtonRow from "../../../shared/components/FormButtonRow";
import NewVendor from "../../vendors/components/NewVendor";




const NewFuelPurchase = () => {
  const [tableDataRows, setTableDataRows] = useState([]);
  const appStateDispatcher = useGlobalDispatcher();
  const { cardLabelView } = useGlobalState();


  const columns = useMemo(() => {
    return ArrayFunctions({
      arrKey: 'field',
      itemKey: 'field',
      item: { field: 'action' },
      propToUpdate: 'renderCell',
      op: 'equal',
      update: (params) => <shared.components.FormAction row={params.row} onDelete={handleDeletingLineItem} />,
      type: 'map',
    }, purchaseEntryColumns);

  }, []);

  const handleAddNewItem = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setTableDataRows((prev) => [...prev, { id: uuidv4(), ...tableRowInitialValues }]);
  };

  const handleDeletingLineItem = (event, item) => {
    console.log(item)
    event.stopPropagation();
    event.preventDefault();
    setTableDataRows((prev) => prev.filter((line) => line.id !== item.id));
  };
  
  useEffect(() => {
    appStateDispatcher({ type: "CREATECOMPOSABLEAUTOFILS", payload: composableAutofils });
  }, []);

  return (
    <section className="newfuelpurchase">
      <shared.components.SectionIntroduction text="New Fuel Purchase" />
      <Form>
        <shared.components.BillingComponent cardLabelView={cardLabelView} >
          <NewVendor />
        </shared.components.BillingComponent>
        <TransportationAndOfficer cardLabelView={cardLabelView} />
        <TankEntries />
        <FormButtonRow />
      </Form>
    </section>
  )
}

export default NewFuelPurchase;
