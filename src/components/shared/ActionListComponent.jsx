import Button from "./Button";
import MenuPopup from "./MenuPopup";

const ActionListComponent = ({list}) => {
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

export default ActionListComponent