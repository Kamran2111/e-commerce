import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../../types/productsType";

export interface ICartState {
  totalPrice: number;
  products: Products[];
}

const loadCartFromLocalStorage = (): ICartState => {
  const cartItems = localStorage.getItem("cartItems");
  const totalPrice = localStorage.getItem("totalPrice");

  const products = cartItems
    ? JSON.parse(cartItems).map((item: any) => ({
        ...item,
        price: parseFloat(item.price),
        totalPrice: parseFloat(item.totalPrice),
      }))
    : [];

  return {
    products,
    totalPrice: totalPrice ? parseFloat(totalPrice) : 0,
  };
};

const initialState: ICartState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Products>) {
      const findProduct = state.products.find(
        (product) =>
          product.id === action.payload.id &&
          product.size === action.payload.size &&
          product.category === action.payload.category
      );

      if (findProduct) {
        findProduct.count++;
        findProduct.totalPrice = findProduct.price * findProduct.count;
      } else {
        state.products.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.products.reduce((sum, product) => {
        return sum + product.price * product.count;
      }, 0);

      localStorage.setItem("cartItems", JSON.stringify(state.products));
      localStorage.setItem("totalPrice", state.totalPrice.toString());
    },

    updateProductCount(
      state,
      action: PayloadAction<{
        id: number;
        size: string | undefined;
        count: number;
      }>
    ) {
      const findProduct = state.products.find(
        (product) =>
          product.id === action.payload.id &&
          product.size === action.payload.size
      );

      if (findProduct) {
        findProduct.count = Math.max(
          findProduct.count + action.payload.count,
          0
        );
        if (findProduct.count === 0) {
          state.products = state.products.filter(
            (product) => product !== findProduct
          );
        } else {
          findProduct.totalPrice = findProduct.price * findProduct.count;
        }
      }

      state.totalPrice = state.products.reduce((sum, product) => {
        return sum + product.price * product.count;
      }, 0);

      localStorage.setItem("cartItems", JSON.stringify(state.products));
      localStorage.setItem("totalPrice", state.totalPrice.toString());
    },

    removeItem(
      state,
      action: PayloadAction<{ id: number; size: string | undefined }>
    ) {
      state.products = state.products.filter(
        (product) =>
          !(
            product.id === action.payload.id &&
            product.size === action.payload.size
          )
      );
      state.totalPrice = state.products.reduce((sum, product) => {
        return sum + product.price * product.count;
      }, 0);
      localStorage.setItem("cartItems", JSON.stringify(state.products));
      localStorage.setItem("totalPrice", state.totalPrice.toString());
    },

    clearProducts(state) {
      state.products = [];
      state.totalPrice = 0;
      localStorage.removeItem("cartItems");
      localStorage.removeItem("totalPrice");
    },
  },
});

export const { addProduct, updateProductCount, removeItem, clearProducts } =
  cartSlice.actions;
export default cartSlice.reducer;
