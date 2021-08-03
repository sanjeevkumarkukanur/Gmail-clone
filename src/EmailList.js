import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import React, { useState, useEffect } from 'react'
import './EmailList.css'
import MoreVertIcon from '@material-ui/icons/MoreVert'
// import InboxIcon from '@material-ui/icons/Inbox'
import { ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, People, Settings } from '@material-ui/icons'
import Section from './Section'
import EmailRow from './EmailRow'
import { db } from './firebase'

function EmailList() {

    const [emails, setEmails] = useState([]);

    useEffect(() => {
        
        db.collection('emails')
        .orderBy('timestamp','desc')
        .onSnapshot(
            (snapshot) => setEmails(snapshot.docs.map((docs)=>({
            id: docs.id,
            data: docs.data(),
        })
        ))
        )

    }, [])

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
                <div className="emailList__list">

                    {emails.map(({id, data: {to, subject, message, timestamp}}) =>
                    (
                    <EmailRow 
                       id={id}
                       key={id}
                        title={to}
                        subject={subject}
                        discription={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                       /> 
                    ))}
                    <EmailRow 
                    title="Tweter"
                    subject="hey follow Streamer!!!"
                    discription="this is text"
                    time="10pm"
                    />
                    <EmailRow 
                    title="Tweter"
                    subject="hey follow Streamer!!!"
                    discription="this is text"
                    time="10pm"
                    />
                    <EmailRow 
                    title="Tweter"
                    subject="hey follow Streamer!!!"
                    discription="this is text"
                    time="10pm"
                    />
                    <EmailRow 
                    title="Tweter"
                    subject="hey follow Streamer!!!"
                    discription="this is text"
                    time="10pm"
                    />
                    <EmailRow 
                    title="Tweter"
                    subject="hey follow Streamer!!!"
                    discription="this is text"
                    time="10pm"
                    />
                    <EmailRow 
                    title="Tweter"
                    subject="hey follow Streamer!!!"
                    discription="this is text"
                    time="10pm"
                    />
                    <EmailRow 
                    title="Tweter"
                    subject="hey follow Streamer!!!"
                    discription="this is text"
                    time="10pm"
                    />
                    <EmailRow 
                    title="Tweter"
                    subject="hey follow Streamer!!!"
                    discription="this is text"
                    time="10pm"
                    />  
                </div>
        </div>
    )
}

export default EmailList
