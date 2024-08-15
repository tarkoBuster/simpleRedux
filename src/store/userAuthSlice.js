import {createSlice} from "@reduxjs/toolkit";

const initialAuthState = {isUserLoggedIn: false}

const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState: initialAuthState,
    reducers: {
        logIn(state) {
            state.isUserLoggedIn = true;
        },
        sighOut(state) {
            state.isUserLoggedIn = false;
        }
    }
});
export const userAuthActions = userAuthSlice.actions;
export default userAuthSlice;