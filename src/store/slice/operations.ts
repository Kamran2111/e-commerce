import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Products } from "../../types/productsType";
axios.defaults.baseURL = "http://localhost:5000";

// export const fetchProducts = createAsyncThunk<Products[]>(
//   "products/fetchProducts",
//   async (_, thunkApi) => {
//     try {
//       const response = await axios.get("/products");
//       return response.data;
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         return thunkApi.rejectWithValue(error.message);
//       }
//       return thunkApi.rejectWithValue("An unknown error occurred");
//     }
//   }
// );
export const fetchProducts = createAsyncThunk<Products[]>(
  "products/fetchProducts",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("http://localhost:3002/products");
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkApi.rejectWithValue(error.message);
      }
      return thunkApi.rejectWithValue("An unknown error occurred");
    }
  }
);
export const fetchCollectionProducts = createAsyncThunk<Products[]>(
  "products/fetchProducts",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("http://localhost:3002");
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkApi.rejectWithValue(error.message);
      }
      return thunkApi.rejectWithValue("An unknown error occurred");
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        credentials
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Ошибка авторизации"
      );
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (
    userData: { email: string; password: string; name: string; avatar: string },
    thunkApi
  ) => {
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/users/",
        userData
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkApi.rejectWithValue(
          error.response?.data.message || error.message
        );
      }
      return thunkApi.rejectWithValue("An unknown error occurred");
    }
  }
);
