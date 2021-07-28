import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';

function Sidebar() {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large"/>}
             className="siderbar__compose">
                Compose
            </Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={56} />
            <SidebarOption Icon={StarIcon} title="Inbox" number={56} />
        </div>
    )
}

export default Sidebar
