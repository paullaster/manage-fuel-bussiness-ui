import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState, useMemo, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid';
import { AutocompleteComponent, DataTable } from '@/components';
import { useGridApiRef } from '@mui/x-data-grid';
import { usePurchasesState } from '../../Context';
import WebStorage from "@/utils/WebStorage";
import { APPNAME } from "@/environments";

const orgData = WebStorage.GetFromWebStorage('session', `${APPNAME}_ORG_DATA`);

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
    
    const apiRef = useGridApiRef();
    const { bills } = usePurchasesState();

    const Columns = useMemo(() => {
        return [
            {
                field: 'purchase_date',
                headerName: 'Bill Date',
                type: 'string',
                width: 250,
                headerAlign: 'center',
                align: 'center',
                editable: false,
            },
            {
                field: 'status',
                headerName: 'Status',
                type: 'string',
                width: 250,
                headerAlign: 'center',
                align: 'center',
                editable: false,
                valueGetter: () => 'Paid'
            },
            {
                field: 'vendor_name',
                headerName: 'Vendor Name',
                type: 'string',
                width: 250,
                headerAlign: 'center',
                align: 'center',
                editable: false,
                valueGetter: (params) => params.row.vendor.vendor_name
            },
            {
                field: 'gross_amount',
                headerName: 'Amount',
                type: 'string',
                width: 250,
                headerAlign: 'center',
                align: 'center',
                editable: false,
                valueGetter: (params) => `${orgData?.currency || 'KES'} ${params.row.gross_amount}`
            },
        ]
    }, []);

    const handleGridRowClick = useCallback((params) => {
        
    },[]);
    
    useEffect(() => {
    
    }, [Columns]);
    useEffect(() => {
    
    }, [apiRef]);

    return (
        <TabPanel value={value}>
            <div className='informationCard'>
                <AutocompleteComponent list={['']} label='Search or filter results...' />
                <DataTable 
                rows={bills} 
                columns={Columns} 
                pageSizeOptions = {[10, 25, 50, 75, 100]}
                initialState = {{ pagination: { paginationModel: { page: 10, pageSize: 10 } }} }
                apiRef={apiRef}
                />
            </div>
        </TabPanel>
    )
}