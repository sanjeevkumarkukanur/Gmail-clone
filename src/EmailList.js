import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import React from 'react'
import './EmailList.css'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { ChevronLeft, ChevronRight, KeyboardHide, Settings } from '@material-ui/icons'

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
                <div className="emailList__section">
                    
                </div>
            </div>
            
        </div>
    )
}

export default EmailList
