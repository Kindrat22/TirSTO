import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function TabsButton() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ maxWidth: { xs: 500, sm: 500 }}}>
            <Tabs
                selectionFollowsFocus
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons={false}
                aria-label="scrollable prevent tabs example"



            >
                <Tab href={'/'} style={{color:'white'}} label="Item One" />
                <Tab style={{color:'white'}} label="Item Two" />
                <Tab style={{color:'white'}} label="Item Three" />
                <Tab style={{color:'white'}} label="Item Four" />
            </Tabs>
        </Box>
    );
}
