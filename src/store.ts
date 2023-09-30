import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import userReducer from './features/userSlice'
import notificationReducer from './features/notificationSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        notification: notificationReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch