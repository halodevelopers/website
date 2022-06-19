import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// get user from local storage  
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    isAuthenticated: false,
    user: user ? user : null,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isAuthenticated = false;
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = '';
        },
        extraReducers: () => {}
    }
})

export const { reset } = authSlice.actions;
export default authSlice.reducer;