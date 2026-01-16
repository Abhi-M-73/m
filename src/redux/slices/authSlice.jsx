import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    role: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.role = null;
            state.isAuthenticated = false;
        },
    },
});

export const { setUser, setToken, setRole, logout } = authSlice.actions;
export default authSlice.reducer;
