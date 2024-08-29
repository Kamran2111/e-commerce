import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type Product = {
  id: number;
  name: string;
  image: string;
  title: string;
};
export interface IFavoritesState {
  favorite: number[];
}

const initialState: IFavoritesState = loadFromLocalStorage() || {
  favorite: [],
};

function saveToLocalStorage(state: IFavoritesState) {
  try {
    const serializedState = JSON.stringify(state.favorite);
    localStorage.setItem("favorites", serializedState);
  } catch (e) {
    console.warn("Could not save state", e);
  }
}

function loadFromLocalStorage(): IFavoritesState | undefined {
  try {
    const serializedState = localStorage.getItem("favorites");
    if (serializedState === null) return undefined;
    return { favorite: JSON.parse(serializedState) };
  } catch (e) {
    console.warn("Could not load state", e);
    return undefined;
  }
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      if (state.favorite.includes(productId)) {
        state.favorite = state.favorite.filter((id) => id !== productId);
      } else {
        state.favorite.push(productId);
      }
      saveToLocalStorage(state);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
