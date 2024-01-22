import React, { useMemo, useState } from 'react';
import { DataTable } from '@/components'

const ContactPerson = () => {
  const [rows, setRows] = useState([]);
  const contactColumns = useMemo(() => {
    return [
        {
            field: 'name',
            headerName: 'Name',
            type: 'string',
            width: 150,
        },
        {
            field: 'email',
            headerName: 'Email',
            type: 'string',
            width: 150,
        },
        {
            field: 'phone',
            headerName: 'Phone',
            type: 'string',
            width: 150,
        }
    ]
  })  
  return (
    <DataTable 
     columns={contactColumns}
     rows={rows}
    />
  )
}

export default ContactPerson