import React from 'react'

const TableDataComponent = ({children, ...other}) => {
  return (
    <td {...other}>{children}</td>
  )
}

export default TableDataComponent