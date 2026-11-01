import { createSlice } from '@reduxjs/toolkit';
import {APICall} from '../funcs/API_funcs';

export const initialState = {
    user: null,
    isAuthenticated: false,
};

export const loginUser = createAsyncThunk(
    'user/login',
    async(creds, { rejectWithValue }) => {
        try {
            const response = await APICall('auth/login', "POST", { data: creds });
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)



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
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;