import { Form } from "react-router-dom";
import ItemComponent from "./ItemComponent";
import FormButtonRow from "./FormButtonRow";
import shared from "../../../shared";
const NewItem = () => {
  return (
    <section className='purchaseItem'>
      <shared.components.SectionIntroduction text="New purcahse item" />
      <Form method="post">
        <ItemComponent />
        <FormButtonRow />
      </Form>
    </section>
  )
}

export default NewItem