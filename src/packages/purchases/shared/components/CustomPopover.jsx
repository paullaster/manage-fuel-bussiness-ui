import { ListBox, ListBoxItem, Popover } from "react-aria-components";
/**
 * @todo: add list state
 * @param {*} param0 
 * @returns 
 */

const CustomPopover = ({items}) => {
  return (
      <Popover>
        {
            items.map((item) => {
                return <CustomList key={item.id} item={item} />
            })
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