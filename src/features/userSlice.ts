import {createSlice} from '@reduxjs/toolkit'
import {UserTypes} from "../enums/user-types";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        email: "",
        role: UserTypes.guest,
    },
    reducers: {
        login: (state, action) => {
            const email = action.payload.email;
            const userType = action.payload.role as UserTypes

            state.isLoggedIn = true;
            state.email = email;
            state.role = userType;

        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.email = null;
            state.role = UserTypes.guest;
        },
    }
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;