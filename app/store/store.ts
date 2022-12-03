import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { reducers } from '@/store/rootReducer'
const customizedMiddleware = getDefaultMiddleware({
	serializableCheck: false,
})

export const store = configureStore({
	reducer: reducers,
	devTools: true,
	middleware: customizedMiddleware,
})

export type typeRootState = ReturnType<typeof store.getState>
