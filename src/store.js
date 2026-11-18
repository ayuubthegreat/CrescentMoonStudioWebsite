import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./slices/projectsSlice";
import userReducer from "./slices/userSlice";
import storeReducer from "./slices/storeSlice";
import businessLogsReducer from "./slices/businessLogSlice";


export const store = configureStore({
    reducer: {
        projects: projectsReducer,
        user: userReducer,
        store: storeReducer,
        logs: businessLogsReducer,
    }
})
export default store;