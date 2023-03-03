import { configureStore } from '@reduxjs/toolkit';
import { notebooklice } from '@/state/reducer/notebookSlice';
export const store = configureStore({
  reducer: {
    notebooklice: notebooklice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
