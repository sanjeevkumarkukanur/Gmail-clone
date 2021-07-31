import { createSlice } from '@reduxjs/toolkit'; 

export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    sendMessageIsOpen: false,
  },
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  }
});
  

export const { openSendMessage, sendMessageIsOpen } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
