import { Button } from "@/components";
const FormButtonRow = () => {
  return (
    <div className="itemformrowBtn">
          <Button type='submit' className={' btn-element'} >Cancel</Button>
          <Button type='submit' className={'btn-element btn_primary'} >Save</Button>
    </div>
  )
}

export default FormButtonRow