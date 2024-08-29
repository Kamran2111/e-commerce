import { createSlice } from "@reduxjs/toolkit";
import { fetchCollectionProducts } from "./operations";
import { Products } from "../../types/productsType";

const productsCollectionSlice = createSlice({
  name: "products",
  initialState: {
    items: [] as Products[],
    isLoading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCollectionProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCollectionProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    });
    builder.addCase(fetchCollectionProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error?.message as string;
    });
  },
});

export const productsCollectionReducer = productsCollectionSlice.reducer;
