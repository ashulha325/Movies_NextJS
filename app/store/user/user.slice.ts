import { createSlice } from '@reduxjs/toolkit'
import { IInitialState } from '@/store/user/user.interface'
import { getStoreLocalStorage } from '@/utils/local-storage'
import {
	registration,
	login,
	logout,
	checkAuth,
} from '@/store/user/user.actions'

const initialState: IInitialState = {
	isLoading: false,
	user: getStoreLocalStorage('user'),
}
export const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(registration.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(registration.fulfilled, (state, { payload }) => {
			payload
			state.isLoading = false
			state.user = payload.user
		})
		builder.addCase(registration.rejected, (state) => {
			state.isLoading = false
			state.user = null
		})

		builder.addCase(login.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(login.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.user = payload.user
		})
		builder.addCase(login.rejected, (state) => {
			state.isLoading = false
			state.user = null
		})

		builder.addCase(logout.fulfilled, (state, {}) => {
			state.isLoading = false
			state.user = null
		})

		builder.addCase(checkAuth.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.user = payload.user
		})
	},
})

export const { reducer } = userSlice
