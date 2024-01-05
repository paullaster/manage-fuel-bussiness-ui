import { Form } from "react-router-dom";
import ItemComponent from "./ItemComponent";
import FormButtonRow from "./FormButtonRow";
const NewItem = () => {
  return (
    <section className='purchaseItem'>
      
      <Form>
        <ItemComponent />
        <FormButtonRow />
      </Form>
    </section>
  )
}

export default NewItem