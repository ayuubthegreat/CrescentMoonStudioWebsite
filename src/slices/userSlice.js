import { createSlice } from '@reduxjs/toolkit';
import {APICall} from '../funcs/API_funcs';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { z } from 'zod';

export const userRegisterSchema = z.object({
    username: z.string().min(3).max(20),
    email: z.email(),
    password: z.string().min(6).max(20),
});
export const userLoginSchema = z.object({
    email: z.email(),
    password: z.string().min(6).max(20),
});
export const initialState = {
    user: null,
    isAuthenticated: false,
};

export const LoginUser = createAsyncThunk(
    'user/login',
    async(creds, { rejectWithValue }) => {
        try {
            const response = await APICall({endpoint: 'auth/login', method: "POST", data: creds});
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const RegisterUser = createAsyncThunk(
    'user/register',
    async(creds, { rejectWithValue }) => {
        try {
            const response = await APICall({endpoint: 'auth/register', method: "POST", data: creds});
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const GetUserByID = createAsyncThunk(
    'user/getByID',
    async(_, { rejectWithValue }) => {
        try {
            const id = localStorage.getItem('c-account-user');
            const response = await APICall({endpoint: `auth/user/${id}`, method: "GET"});
            console.log(response);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('c-account-user');
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginUser.pending, (state) => {
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(LoginUser.fulfilled, (state, action) => {
                state.user = action.payload.data;
                state.isAuthenticated = true;
                localStorage.setItem('c-account-user', action.payload.data.id);
            })
            .addCase(LoginUser.rejected, (state, action) => {
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(RegisterUser.pending, (state) => {
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(RegisterUser.fulfilled, (state, action) => {
                state.user = action.payload.data;
                state.isAuthenticated = true;
                localStorage.setItem('c-account-user', action.payload.data.id);
            })
            .addCase(RegisterUser.rejected, (state, action) => {
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(GetUserByID.pending, (state) => {
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(GetUserByID.fulfilled, (state, action) => {
                state.user = action.payload.data;
                state.isAuthenticated = true;
                localStorage.setItem('c-account-user', action.payload.data.id);
            })
            .addCase(GetUserByID.rejected, (state, action) => {
                state.user = null;
                state.isAuthenticated = false;
            });
    },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;