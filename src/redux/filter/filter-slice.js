import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "",

}
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { updateFilter } = filterSlice.actions;