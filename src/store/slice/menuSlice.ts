import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IMenuState {
  isActive: boolean;
}

const initialState: IMenuState = {
  isActive: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu(state) {
      state.isActive = !state.isActive;
    },
    setMenuActive(state, action: PayloadAction<boolean>) {
      state.isActive = action.payload;
    },
  },
});

export const { toggleMenu, setMenuActive } = menuSlice.actions;
export default menuSlice.reducer;
