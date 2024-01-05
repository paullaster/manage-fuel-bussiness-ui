
const CustomCardLabel = ({ label, icon }) => {


    const handleClick = (event) => {
        console.log(event.target.parentElement.getAttribute('data-id'));
    }

  return (
      <div className="add_item_placeholder" onClick={handleClick}>
          <span>
              {icon }
          </span>
          <span>
              {label}
          </span>
      </div>
  )
}

export default CustomCardLabel