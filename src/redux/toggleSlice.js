import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: false,
  reducers: {
    toggleClicked: (state) => !state,
  },
});

export const { toggleClicked } = toggleSlice.actions;
export default toggleSlice.reducer;
