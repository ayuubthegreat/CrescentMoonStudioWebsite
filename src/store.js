import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./slices/projectsSlice";
import userReducer from "./slices/userSlice";
import storeReducer from "./slices/storeSlice";


export const store = configureStore({
    reducer: {
        projects: projectsReducer,
        user: userReducer,
        store: storeReducer,
    }
})
export default store;