import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./slices/projectsSlice";
import userReducer from "./slices/userSlice";


export const store = configureStore({
    reducer: {
        projects: projectsReducer,
        user: userReducer,
    }
})
export default store;