import { useRef, useEffect } from "react";
import CustomCardLabel from "./CustomCardLabel";
import { AutocompleteComponent } from '@/components'
import AddItemButton from "./AddItemButton";
import { useGlobalDispatcher } from '@/store';
import PurchaseNewEntityComponent from "./PurchaseNewEntityComponent";

const list = [
    {
        id: 1,
        name: "vendor 1"
    },
    {
        id: 2,
        name: "vendor 2"
    }
];


const AddItem = ({ label, cardLabelIcon, cardView, addItemView, id, keyField, children }) => {
    const setAction = useGlobalDispatcher();

    const handleOutsideClick = () => {
        setAction({ type: 'SETCARDLABELVIEW', payload: '' });
    };

    const itemRef = useRef(null);

    useEffect( () => {
        const handleClickOutsideAddItemCard = (event) => {
            event.stopPropagation();
            event.preventDefault();
            if (itemRef.current && !itemRef.current.contains(event.target)) {
                handleOutsideClick();
            }
        }
        document.addEventListener('clcik', handleClickOutsideAddItemCard);


        return () => {
            document.removeEventListener('click', handleClickOutsideAddItemCard);
        }
    }, []);


    return (
        <div className="addItem" data-id={id} ref={ itemRef }>
            <label htmlFor={label} className="label-required">{label}</label>
            {
                cardView ? <CustomCardLabel label={`add ${label}`} icon={cardLabelIcon} /> : ''
            }
             {
                addItemView ? 
                <div>
                    <AutocompleteComponent list={list} keyField={keyField} />
                    <PurchaseNewEntityComponent
                    label={label}
                    >
                        {children}
                    </PurchaseNewEntityComponent>
                </div>
                : ''
             }
        </div>
    )
}

export default AddItem