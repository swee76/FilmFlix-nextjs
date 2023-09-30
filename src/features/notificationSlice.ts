import {createSlice} from '@reduxjs/toolkit'

export const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        message: '',
        isError: false,
        isOpen: false,
    },
    reducers: {
        setMessage: (state, action) => {
            state.message = action.payload.message;
            state.isError = action.payload.isError;
            state.isOpen = true;
        },
        clearMessage: (state) => {
            state.message = ''
            state.isError = false
            state.isOpen = false
        },
    },
});

export const {setMessage, clearMessage} = notificationSlice.actions;

export default notificationSlice.reducer;