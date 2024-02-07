import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState, useMemo, useEffect } from 'react';
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid';
import { AutocompleteComponent, DataTable } from '@/components';

const TabItems = [
    {
        key: uuidv4(),
        filter: 'fuel',
    },
    {
        key: uuidv4(),
        filter: 'item',
    },
    {
        key: uuidv4(),
        filter: 'All item',
    },
    {
        key: uuidv4(),
        filter: 'Recurring',
    },

];

const PurchaseTransactionComponent = () => {
    
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        
        setValue(newValue);
    };
    
  return (
    <div className='vendorTransactions'>
    <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
            onChange={handleChange} 
            aria-label="vendor tabs"
            >
                <Tab label="Fuel" value='1' />
                <Tab label="Item" value='2' />
                <Tab label="All Bill" value='3' />
                <Tab label="Recurring Template" value='4' />
            </TabList>
        </Box>
        {
            TabItems.map((tab, i) => {
                return <TransactionTabContent value={`${i + 1}`} key={tab.key} tab={tab}/>
            })
        }
    </TabContext>
</div>
  )
}

export default PurchaseTransactionComponent


const TransactionTabContent = ({value, tab}) => {

    const Columns = useMemo(() => {
        return [
            {
                field: 'bill_date',
                headerName: 'Bill Date',
                type: 'string',
                width: 250,
                headerAlign: 'center',
                editable: true,
            },
            {
                field: 'status',
                headerName: 'Status',
                type: 'string',
                width: 250,
                headerAlign: 'center',
                editable: true,
            },
            {
                field: 'vendor_number',
                headerName: 'Vendor Number',
                type: 'string',
                width: 250,
                headerAlign: 'center',
                editable: true
            },
            {
                field: 'amount',
                headerName: 'Amount',
                type: 'string',
                width: 250,
                headerAlign: 'center',
                editable: true
            },
        ]
    }, []);
    
    useEffect(() => {
    
    }, [Columns]);

    return (
        <TabPanel value={value}>
            <div className='informationCard'>
                <AutocompleteComponent list={['']} label='Search or filter results...' />
                <DataTable rows={[{id: '1'}]} columns={Columns}/>
            </div>
        </TabPanel>
    )
}