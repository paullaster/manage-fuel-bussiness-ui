import { InputComponent } from "@/components";

const NewItem = () => {
  return (
    <section className='purchaseItem'>
      <div className="transport">
        <InputComponent
          prelabelText="transport name"
          name="transport_name"
        />
        <InputComponent
          prelabelText="vehicle registration"
          name="vehicle_registration"
        />
        <InputComponent
          prelabelText="driver name"
          name="driver_name"
        />
      </div>
    </section>
  )
}

export default NewItem