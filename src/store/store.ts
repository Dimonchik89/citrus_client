import { configureStore } from "@reduxjs/toolkit";
import { phoneApi } from "./api/phoneApi";

const store = configureStore({
    reducer: {
        [phoneApi.reducerPath]: phoneApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(phoneApi.middleware),
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;