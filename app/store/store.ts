import { configureStore } from '@reduxjs/toolkit'
import { reducers } from '@/store/rootReducer'

export const store = configureStore({
	reducer: reducers,
	devTools: true,
})

export type typeRootState = ReturnType<typeof store.getState>
