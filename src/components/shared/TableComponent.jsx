
const TableComponent = ({children , ...other}) => {
  return (
    <table {...other}>
        {children}
    </table>
  )
}

export default TableComponent