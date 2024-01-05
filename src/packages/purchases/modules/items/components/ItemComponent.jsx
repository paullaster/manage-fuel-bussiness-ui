import { InputComponent } from "@/components";
const ItemComponent = () => {
    return (
        <div className="itemComponent">
            <InputComponent
                prelabelText="Item name"
                name="item_name"
            />
            <fieldset className="input-group customfielset">
                <legend>Description</legend>
                <textarea name="description" id="description" cols="30" rows="5"></textarea>
            </fieldset>
            <InputComponent
                prelabelText="Buying price"
                name="buying_price"
            />
            <InputComponent
                prelabelText="Selling price"
                name="selling_price"
            />
        </div>
    )
}

export default ItemComponent