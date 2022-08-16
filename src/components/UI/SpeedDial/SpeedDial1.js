import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ViberIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import "./styleSpeedDial.css"
import {Link} from "react-router-dom";



const actions = [
    { icon: <TelegramIcon />, name: 'Telegram',  },
    { icon: <WhatsAppIcon/>, name: 'WhatsApp' },
    { icon: <ViberIcon/>, name: 'Viber' },
    { icon: <EmailIcon/>, name: 'Email' },
];

export default function SpeedDialTool() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box >
            <Backdrop open={open} />
            <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                className={"SpeedDial"}
                sx={{ bottom: 35, right: 30 }}
                icon={<PhoneIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        tooltipOpen
                        onClick={handleClose}
                        href={action.link}
                    />

                ))}
            </SpeedDial>
        </Box>
    );
}
