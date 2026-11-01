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

export const loginUser = createAsyncThunk(
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

export const registerUser = createAsyncThunk(
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



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('user');
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload.data;
                state.isAuthenticated = true;
                localStorage.setItem('user', action.payload.data.id);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.user = null;
                state.isAuthenticated = false;
                localStorage.removeItem('user');
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload.data;
                state.isAuthenticated = true;
                localStorage.setItem('user', action.payload.data.id);
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.user = null;
                state.isAuthenticated = false;
                localStorage.removeItem('user');
            });
    },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;