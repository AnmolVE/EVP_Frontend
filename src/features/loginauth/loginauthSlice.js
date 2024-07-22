import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("auth/login", async (userData) => {
  const response = await fetch("http://127.0.0.1:8000/api/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const loginResponse = await response.json();

  localStorage.setItem("accessToken", loginResponse.tokens.access);
  localStorage.setItem("UserEmail", loginResponse.email);

  return loginResponse;
});

const loginAuthSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    userEmail: null,
    isLoggedIn: false,
    loading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.accessToken = null;
      state.userEmail = null;
      state.isLoggedIn = false;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userEmail");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload.tokens.access;
        state.userEmail = action.payload.email;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = loginAuthSlice.actions;
export default loginAuthSlice.reducer;
