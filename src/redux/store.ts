import { configureStore } from '@reduxjs/toolkit'
import { bankApi } from '@/services/bank'
import { cardApi } from '@/services/card'

export const store = configureStore({
  reducer: {
    [bankApi.reducerPath]: bankApi.reducer,
    [cardApi.reducerPath]: cardApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bankApi.middleware, cardApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;