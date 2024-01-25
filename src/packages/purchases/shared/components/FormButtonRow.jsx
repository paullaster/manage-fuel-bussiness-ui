import { Button } from "@/components";
import { MdOutlineSimCardDownload, MdClear } from "react-icons/md";
const FormButtonRow = ({methodHandler = () => {}, className = ''}) => {
  return (
    <div className={className} >
      <Button type="button" className={'btn-element'}><span><MdClear size={20} /> </span> <span>cancel</span></Button>
      <Button type="submit" className={'btn-element btn_primary'} onClick={methodHandler}> <span><MdOutlineSimCardDownload size={20} /></span> <span>save</span></Button>
    </div>
  )
}

export default FormButtonRow