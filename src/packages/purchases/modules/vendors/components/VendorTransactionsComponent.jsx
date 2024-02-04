import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@/components';
import vendors_bill from '@/assets/images/vendors_bills.png';
import vendors_transactions from '@/assets/images/vendors_transactions.png';


const TabItems = [
    {
        key: uuidv4(),
        imageUrl: vendors_bill,
        btnCaption: 'New fuel purchase',
        additionalText: 'There is no fuel purchase for this vendor yet. Create a new one now.'
    },
    {
        key: uuidv4(),
        imageUrl: vendors_transactions,
        btnCaption: 'New item purchase',
        additionalText: 'There is no item purchase for this vendor yet. Create a new one now.'
    },

];


const VendorTransactionsComponent = () => {
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
                        <Tab label="Fuel purchase" value='1' />
                        <Tab label="Item purchase" value='2' />
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

export default VendorTransactionsComponent


const TransactionTabContent = ({value, tab}) => {
    return (
        <TabPanel value={value}>
            <div className='informationCard'>
                <div>
                    <img src={tab?.imageUrl} alt={`${tab?.btnCaption}`} srcSet="" />
                </div>
                <div className='informationCardText'>
                    <p>{tab?.additionalText}</p>
                    <Button className={'btn-element btn_primary'}>
                        {tab?.btnCaption}
                    </Button>
                </div>
            </div>
        </TabPanel>
    )
}