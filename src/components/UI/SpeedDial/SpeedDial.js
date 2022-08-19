import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ViberIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/MailOutline';
import "./styleSpeedDial.css"


const style = {
    margin: 0,
    right: 20,
    bottom: 20,
    position: 'fixed',
};

const actions = [
    { icon: <TelegramIcon style={{ fill: '#2CAAE0' } } />,
        name: 'Telegram', link: "https://t.me/rkindrat" },
    { icon: <WhatsAppIcon style={{ fill: '#5CF978' }} />,
        name: 'WhatsApp', link: "https://wa.me/+3809674496602" },
    { icon: <ViberIcon style={{ fill: '#793AAA' }} />,
        name: 'Viber', link: "viber://chat?number=+380979604721" },
    { icon: <EmailIcon style={{ fill: '#EE4536' }} />,
        name: 'Email', link: "mailto:nazarkindrat@gmail.com" },
];

export default function Socials() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Backdrop open={open} />
            <SpeedDial
                ariaLabel="SpeedDial openIcon example"
                style={style}
                hidden={false}
                icon={<PhoneIcon openIcon={<PhoneIcon/>} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}

            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={handleClose}
                        href={action.link}
                        target="_blank"
                    />
                ))}
            </SpeedDial>
        </div>
    );
}