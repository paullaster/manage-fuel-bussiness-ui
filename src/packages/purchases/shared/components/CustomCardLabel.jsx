import { MdPersonAdd } from "react-icons/md";

const CustomCardLabel = ({label}) => {
  return (
      <div className="add_item_placeholder">
          <span>
              <MdPersonAdd size={20} />
          </span>
          <span>
              {label}
          </span>
      </div>
  )
}

export default CustomCardLabel