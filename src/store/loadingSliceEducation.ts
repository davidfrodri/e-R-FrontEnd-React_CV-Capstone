import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoadingEducation: false,
};

const isLoadingEducation = createSlice({
  name: 'loadingEducation',
  initialState,
  reducers: {
    setLoadingEducation: (state) => {
      state.isLoadingEducation = true;
    },
    clearLoadingEducation: (state) => {
      state.isLoadingEducation = false;
    },
  },
});

export const { setLoadingEducation, clearLoadingEducation } = isLoadingEducation.actions;
export default isLoadingEducation.reducer;