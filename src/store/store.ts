import { phoneApi } from "./api/phoneApi"
import modalReducer from "./modalSlcie/modalSlice"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
	reducer: {
		[phoneApi.reducerPath]: phoneApi.reducer,
		modalReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(phoneApi.middleware),
	devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
