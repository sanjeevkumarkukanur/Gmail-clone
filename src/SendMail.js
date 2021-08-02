import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import './SendMail.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase';


function SendMail() {
    
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (formData) => {
        console.log(formData);
        db.collection('emails').add(
            {
                to: formData.to,
                subject: formData.subject,
                message: formData.message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }
        );
        dispatch(closeSendMessage());
    }

    const dispatch = useDispatch();
    
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <Close onClick={()=> dispatch(closeSendMessage())} className="sendMail__close" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input 
                name="to" 
                placeholder='To' 
                type="email" 
                {...register('to',{required: true })} 
                />
                {errors?.to && <p className='sendMail__error'>To is quired</p>}
                <input 
                name='subject' 
                placeholder="Subject" 
                type="text"
                {...register('subject',{required: true })} />
                {errors?.subject && <p className='sendMail__error'>subject is quired</p>}
                <input 
                name='message' 
                placeholder='message...' 
                type="text" 
                className='sendMail__message' 
                {...register('message',{required: true })} />
                {errors?.message && <p className='sendMail__error'>message is quired</p>}


                <div className="sendMail__options">
                    <Button className='sendMail__send'
                    variant='contained'
                    color='primary'
                    type='submit'>Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
