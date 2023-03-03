import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type UserType = {
  notes: [];
  noteBooks: [];
  loading: true;
};

const initialState: any = {
  notes: [],
  loading: true,
  notebooks: [],

};

export const notebooklice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setNotes: (state, action: any) => {
      state.notes = action.payload;
    },
    setNotebooks: (state, action: any) => {
      state.notebooks = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading, setNotes, setNotebooks } = notebooklice.actions;
export default notebooklice.reducer;
