import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
            const loggedInEmail = localStorage.getItem('email')
            if (loggedInEmail) {
                state.isLoggedIn = true
            }
        },
        logout: (state) => {
            state.isLoggedIn = false;
            localStorage.removeItem('email')
        },
    }
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;