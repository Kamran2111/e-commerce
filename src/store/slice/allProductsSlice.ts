import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "./operations";

// Определите интерфейс для продукта
export interface Product {
  id: number;
  name: string;
  title: string;
  price: number;
  image: string;
  imageTwo?: string;
  count: number;
  totalPrice: number;
  size: string;
  category: string;
}

export interface ProductsState {
  items: Product[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  isLoading: false,
  error: null,
};

const allProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      }
    );
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || null;
    });
  },
});

export const productsReducer = allProductsSlice.reducer;
