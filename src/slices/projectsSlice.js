import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { APICall, FailedCase, LoadingCase, ProjectsSuccessCase } from "../funcs/API_funcs"



export const projectSchema = {
    author: "",
    title: "",
    shortDesc: "",
    description: "",
    tags: "",
    release_date: Date.now(),
    percentage: 0,
}

export const defaultState = {
    projects: [],
    loading: false,
    error: null,
}

export const AddProject = createAsyncThunk(
    "cmsSite/projects/add",
    async(projData, {rejectWithValue}) => {
        try {
            const response = await APICall({endpoint: "cmsSite/projects", method: "POST", data: projData});
        return response
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const UpdateProject = createAsyncThunk(
    "cmsSite/projects/update",
    async(projData, {rejectWithValue}) => {
        try {
            const response = await APICall({endpoint: "cmsSite/projects", method: "PUT", data: projData});
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const DeleteProject = createAsyncThunk(
    "cmsSite/projects/update",
    async(projID, {rejectWithValue}) => {
        try {
            const response = await APICall({endpoint: "cmsSite/projects", method: "DELETE", data: projID});
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const GetAllProjects = createAsyncThunk(
    "cmsSite/projects/get",
    async(_, {rejectWithValue}) => {
        try {
            const response = await APICall({endpoint: "cmsSite/projects", method: "GET"});
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const ProjectsSlice = createSlice({
    name: "projects",
    initialState: defaultState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(AddProject.pending, LoadingCase),
        builder.addCase(AddProject.fulfilled, ProjectsSuccessCase),
        builder.addCase(AddProject.rejected, FailedCase)
        builder.addCase(UpdateProject.pending, LoadingCase),
        builder.addCase(UpdateProject.fulfilled, ProjectsSuccessCase),
        builder.addCase(UpdateProject.rejected, FailedCase)
         builder.addCase(DeleteProject.pending, LoadingCase),
        builder.addCase(DeleteProject.fulfilled, ProjectsSuccessCase),
        builder.addCase(DeleteProject.rejected, FailedCase)
        builder.addCase(GetAllProjects.pending, LoadingCase),
        builder.addCase(GetAllProjects.fulfilled, ProjectsSuccessCase),
        builder.addCase(GetAllProjects.rejected, FailedCase)
    }
})

export default ProjectsSlice.reducer;
