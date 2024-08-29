import { createSlice } from "@reduxjs/toolkit";
import { login } from "./operations";
import { IError } from "../../types/infoAuthTypes";

export interface IAuthState {
  id: number | null;
  email: string | null;
  token: string | null;
  error: IError | null;
  isLoading: boolean;
}

export const initialState: IAuthState = {
  id: null,
  email: null,
  token: null,
  error: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.id = null;
      state.email = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.access_token;
        if (payload.user) {
          state.id = payload.user.id || null;
          state.email = payload.user.email || null;
        } else {
          state.id = null;
          state.email = null;
        }
        state.error = null;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload as IError;
      });
  },
});

export default userSlice.reducer;
