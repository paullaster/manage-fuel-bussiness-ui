import { ListBox, ListBoxItem, Popover } from "react-aria-components";
/**
 * @todo: add list state
 * @param {*} param0 
 * @returns 
 */

const CustomPopover = ({items}) => {
    console.log(items);
  return (
      <Popover>
        {
            items.length ? items.map((item) => {
                return <CustomList key={item.id} item={item} />
            }) : "No data"
        }
      </Popover>
  )
}

export default CustomPopover


export const CustomList = ({item}) => {
    return (
        <ListBox>
            <ListBoxItem>{item.name}</ListBoxItem>
        </ListBox>
    )
}