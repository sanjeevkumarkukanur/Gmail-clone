import { IconButton } from '@material-ui/core'
import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoveToInbox, Print, UnfoldMore, WatchLater } from '@material-ui/icons'
import MoreVert from '@material-ui/icons/MoreVert'
import React from 'react'
import { useHistory } from 'react-router-dom'
import "./Mail.css"

function Mail() {

    const history = useHistory();

    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={() => history.push("/")}>
                        <ArrowBack />
                    </IconButton>
                    <IconButton>
                        <MoveToInbox />
                    </IconButton>
                    <IconButton>
                        <Error />
                    </IconButton>
                    <IconButton>
                        <Delete/>
                    </IconButton>
                    <IconButton>
                        <Email />
                    </IconButton>
                    <IconButton>
                        <WatchLater />
                    </IconButton>
                    <IconButton>
                        <CheckCircle />
                    </IconButton>
                    <IconButton>
                        <LabelImportant />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="mail_toolsRight">
                    <IconButton>
                        <UnfoldMore />
                    </IconButton>
                    <IconButton>
                        <Print />
                    </IconButton>
                    <IconButton>
                        <ExitToApp />
                    </IconButton>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyheader">
                    <h2>Subject</h2>
                    <LabelImportant className='mail__importent' />
                    <p>title</p>
                    <p className="mail__time">10pm</p>
                </div>
                <div className="mail__message">
                    <p>this is message</p>
                </div>
            </div>
        </div>
    )
}

export default Mail
