import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const style = {
    color: "white",

};

export default function TabsButton() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (<Box sx={{maxWidth: {xs: 360, sm: 500}}}>
        <Tabs
            selectionFollowsFocus
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={true}
            aria-label="scrollable prevent tabs example"


        >
            <Tab href='#info' style={style} label="Головна"/>
            <Tab href='#contacts' style={style} label="Контакти"/>
            <Tab href='#services' style={style} label="Послуги"/>
            <Tab href='#maps' style={style} label="Карта"/>

        </Tabs>
    </Box>);
}
