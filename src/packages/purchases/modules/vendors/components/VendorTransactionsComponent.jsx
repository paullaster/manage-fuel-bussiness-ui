import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid';


const TabItems = [
    {
        key: uuidv4(),
        imageUrl: 'http://dummy.image.com',
        btnCaption: 'New fuel purchase',
        additionalText: 'There is no fuel purchase for this vendor yet. Create a new one now.'
    },
    {
        key: uuidv4(),
        imageUrl: 'http://dummy.image.com',
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
        <div>
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
                        return (
                            <TransactionTabContent value={`${i + 1}`} key={tab.key} tab={tab}/>
                        )
                    })
                }
            </TabContext>
        </div>
    )
}

export default VendorTransactionsComponent


const TransactionTabContent = ({value}) => {
    return (
        <TabPanel value={value}>
            <div>
                <div>
                    image
                </div>
                <div>
                    text
                </div>
            </div>
        </TabPanel>
    )
}