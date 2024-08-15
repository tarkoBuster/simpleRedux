import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import userAuthSlice from "./userAuthSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: userAuthSlice.reducer,
    }
});
export default store;

