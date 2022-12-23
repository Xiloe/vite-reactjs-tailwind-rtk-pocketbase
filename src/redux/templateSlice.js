import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  template: null,
};

export const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    setTemplate: (state, payload) => {
      state.state = payload;
    },
  },
});

export const { setTemplate } = templateSlice.actions;
export default templateSlice.reducer;
