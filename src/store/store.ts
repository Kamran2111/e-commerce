import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slice/menuSlice";
import cartReducer from "./slice/cartSlice";
import { productsReducer } from "./slice/allProductsSlice";
import { productsCollectionReducer } from "./slice/productsCollectionSlice";
import userSlice from "./slice/userSlice";
import favoritesSlice from "./slice/favoritesSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    menu: menuReducer,
    cart: cartReducer,
    favorites: favoritesSlice,
    products: productsReducer,
    productsCollection: productsCollectionReducer,
  },
});
export type RootStat = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
