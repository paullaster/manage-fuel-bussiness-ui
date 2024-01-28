import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import Box from '@mui/material/Box';

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
                        
                    </TabList>
                </Box>
            </TabContext>
        </div>
    )
}

export default VendorTransactionsComponent