import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        email: null,
    },
    reducers: {
        login: (state, action) => {
            const email = action.payload;

            state.isLoggedIn = true;
            state.email = email;

        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.email = null;
        },
    }
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;