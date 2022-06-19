import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService'

// get user from local storage  
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    // isAuthenticated: false,
    user: user ? user : null,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ''
}

// register user
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error) {
        // const message = (error.response && error.response.data && error.response.data.message) ? error.response.data.message : 'Something went wrong'
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue({ isError: true, message })
    }
})


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            // state.isAuthenticated = false;
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = '';
        },
        extraReducers: (builder) => {
            builder
            .addCase(register.pending, (state, action) => {
                state.isLoading = true;

            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.message = 'Registration successful'
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload
                state.user = null;
            })
        }
    }
})

export const { reset } = authSlice.actions;
export default authSlice.reducer;