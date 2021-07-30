import { Button, IconButton } from '@material-ui/core';
import NearMeIcon from '@material-ui/icons/NearMe';
import LabelImportantIcon from '@material-ui/icons//LabelImportant';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';

function Sidebar() {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large"/>}
             className="sidebar__compose">
                Compose
            </Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={56} 
            selected={true}/>
            <SidebarOption Icon={StarIcon} title="Starred" number={56} />
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={56} />
            <SidebarOption Icon={LabelImportantIcon} title="Importaion" number={56} />
            <SidebarOption Icon={NearMeIcon} title="Sent" number={56} />
            <SidebarOption Icon={NoteIcon} title="Drafts" number={56} />
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={56} />
            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar