import { Form } from "react-router-dom";
import FormButtonRow from "./FormButtonRow";
import shared from "../../../shared";
const NewItem = () => {
  return (
    <section className='purchaseItem'>
      <shared.components.SectionIntroduction text="New purchase item" />
      <Form method="post">
        
        <FormButtonRow />
      </Form>
    </section>
  )
}

export default NewItem