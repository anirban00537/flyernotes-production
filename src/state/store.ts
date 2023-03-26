import { configureStore } from "@reduxjs/toolkit";
import { notesSlice } from "@/state/reducer/notesSlice";
import { userSlice } from "@/state/reducer/userSlice";

export const store = configureStore({
  reducer: {
    notesSlice: notesSlice.reducer,
    userSlice: userSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
