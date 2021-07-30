import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import React from 'react'
import './EmailList.css'
import MoreVertIcon from '@material-ui/icons/MoreVert'
// import InboxIcon from '@material-ui/icons/Inbox'
import { ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, People, Settings } from '@material-ui/icons'
import Section from './Section'

function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList__Settings">
                <div className="emailList__SettingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>   
                </div>
                <div className="emailList__SettingsRight">
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <KeyboardHide />
                    </IconButton>
                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>
                
            </div>
            <div className="emailList__section">
                    <Section Icon={Inbox} title='Primary' color="red" selected />
                    <Section Icon={People} title='Social' color="#1A73E8"/>
                    <Section Icon={LocalOffer} title='Promotions' color="green" />
                </div>
        </div>
    )
}

export default EmailList
