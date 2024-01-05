import { useRef, useEffect } from "react";
import CustomCardLabel from "./CustomCardLabel";
import Autocomplete from "./Autocomplete";
import AddItemButton from "./AddItemButton";
import { useGlobalDispatcher } from '@/store';

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


const AddItem = ({ label, cardLabelIcon, cardView, addItemView, id }) => {
    const setAction = useGlobalDispatcher();

    const handleOutsideClick = () => {
        setAction({ type: 'SETCARDLABELVIEW', payload: '' });
    };

    const itemRef = useRef(null);

    useEffect( () => {
        const handleClickOutsideAddItemCard = (event) => {
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
                    <Autocomplete list={list} />
                    <AddItemButton btnCaption={`new ${label}`} />
                </div>
                : ''
             }
        </div>
    )
}

export default AddItem