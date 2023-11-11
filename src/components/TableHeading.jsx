
const TableHeading = ({children, ...other}) => {
  return (
    <th {...other}>{children}</th>
  )
}

export default TableHeading