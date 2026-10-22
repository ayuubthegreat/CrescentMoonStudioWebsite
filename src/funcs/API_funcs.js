import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_DATA } from "BASE_DATA";
import { ClearSuccessMessage } from "./slices/usersSlice";


export const APICall = async ({endpoint, method = "GET", data = null}) => {
    try {
        const response = await axios({
            method,
            url: `${BASE_DATA.url}/${endpoint}`,
            data: data
        })
        return response.data
    } catch (error) {
        console.error("API call error:", error);
        throw error;
    }
}


export const LoadingCase = (state) => {
    state.loading = true
    state.error = null
}
export const ProjectsSuccessCase = (state, action) => {
    state.loading = false;
    state.projects = action.payload.data;
}
export const FailedCase = (state, action) => {
    state.loading = false
    state.error = action.payload
    console.error("Error:", action.payload)
}
