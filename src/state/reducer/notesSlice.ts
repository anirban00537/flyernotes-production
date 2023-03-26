import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  notes: [],
  labels: [],
  loading: true,
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes: (state, action: any) => {
      state.notes = action.payload;
    },
    setLabels: (state, action: any) => {
      state.labels = action.payload;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading, setNotes, setLabels } = notesSlice.actions;
export default notesSlice.reducer;
