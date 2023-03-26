import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserType = {
  notes: [];
  noteBooks: [];
  loading: true;
};

const initialState: any = {
  notes: [],
  loading: true,
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes: (state, action: any) => {
      state.notes = action.payload;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading, setNotes } = notesSlice.actions;
export default notesSlice.reducer;
