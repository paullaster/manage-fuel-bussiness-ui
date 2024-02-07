import MenuPopup from "./MenuPopup";
import { Button } from '@/components';

const PurchasesActionListComponent = ({list}) => {
  return (
    <div className="actions">
        {
            list.map((action) => {
                return action.hasList ? <MenuPopup action={action} key={action.key}/> : <Button key={action.key}>{action.caption}</Button>
            })
        }
    </div>
  )
}

export default PurchasesActionListComponent