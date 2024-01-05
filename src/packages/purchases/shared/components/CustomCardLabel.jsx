import { useGlobalDispatcher, } from '@/store';

const CustomCardLabel = ({ label, icon }) => {
    const setAction = useGlobalDispatcher();
    const handleClick = (event) => {
        setAction({ type: 'SETCARDLABELVIEW', payload: event.target.parentElement.getAttribute('data-id') });
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