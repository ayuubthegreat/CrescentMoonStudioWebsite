import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import z from "zod"
import { APICall, BusinessLogSuccessCase, FailedCase, LoadingCase } from "../funcs/API_funcs"


export const businessLogSchema = z.object({
    title: z.string().min(5).max(100),
    content: z.string().min(20, "This content body is not interesting enough for a business log."),
    tags: z.array(z.string()),
    authors: z.array(z.string()),
})

export const initialState = {
    loading: false,
    error: null,
    logs: [],
}

export const AddBusinessLog = createAsyncThunk(
    'businessLogs/create',
    async (data, {rejectWithValue}) => {
        try {
            const response = await APICall({endpoint: "cmsSite/businessLogs", method: "POST", data: data});
        return response
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const UpdateBusinessLog = createAsyncThunk(
    'businessLogs/update',
    async(data, {rejectWithValue}) => {
        try {
            const response = await APICall({endpoint: "cmsSite/businessLogs/" + data.id, method: "PUT", data: data});
        return response
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
export const GetBusinessLogs = createAsyncThunk(
    'businessLogs/get',
    async(_, {rejectWithValue}) => {
        try {
            const response = await APICall({endpoint: "cmsSite/businessLogs", method: "GET"});
        return response
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
export const DeleteBusinessLogs = createAsyncThunk(
    'businessLogs/delete',
    async(id, {rejectWithValue}) => {
        try {
            const response = await APICall({endpoint: "cmsSite/businessLogs/" + id, method: "DELETE"});
        return response
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)




export const businessLogSlice = createSlice({
    name: "businessSlice",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(AddBusinessLog.pending, LoadingCase)
        .addCase(AddBusinessLog.fulfilled, BusinessLogSuccessCase)
        .addCase(AddBusinessLog.rejected, FailedCase)
        .addCase(UpdateBusinessLog.pending, LoadingCase)
        .addCase(UpdateBusinessLog.fulfilled, BusinessLogSuccessCase)
        .addCase(UpdateBusinessLog.rejected, FailedCase)
        .addCase(GetBusinessLogs.pending, LoadingCase)
        .addCase(GetBusinessLogs.fulfilled, BusinessLogSuccessCase)
        .addCase(GetBusinessLogs.rejected, FailedCase)
        .addCase(DeleteBusinessLogs.pending, LoadingCase)
        .addCase(DeleteBusinessLogs.fulfilled, BusinessLogSuccessCase)
        .addCase(DeleteBusinessLogs.rejected, FailedCase)
    }
})

export default businessLogSlice.reducer;