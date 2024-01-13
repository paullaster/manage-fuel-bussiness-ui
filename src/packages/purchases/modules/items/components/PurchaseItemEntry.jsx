import AddItemButton from "../../../shared/components/AddItemButton"
import DivisionTopBar from "../../../shared/components/DivisionTopBar"
import ItemData from "./ItemData"

const PurchaseItemEntry = ({rows, handleAddNewItem}) => {
  return (
        <div className="tankEntries">
            <DivisionTopBar sectionTitle="Purcahse item details">
                <AddItemButton btnCaption="Add item" methodHandler={handleAddNewItem}/>
            </DivisionTopBar>
            <div>
                <ItemData rows ={rows}/>
            </div>
        </div>
    )
}

export default PurchaseItemEntry