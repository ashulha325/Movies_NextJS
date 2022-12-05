import axios from 'axios'
import { API_URL } from '@/config/api.config'
import Cookies from 'js-cookie'
import { errorCatch } from './api.helpers'
import { AuthService } from '@/services/auth/auth.service'
import { removeTokensStorage } from '@/services/auth/auth.helper'

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

export const instance = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

instance.interceptors.request.use((config) => {
	const accessToken = Cookies.get('accessToken')

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}
	return config
})

instance.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config
		if (
			error.statusCode === 401 ||
			error.statusCode === 401 ||
			(error.config && !error.config._isRetry)
		) {
			originalRequest._isRetry = true
			try {
				await AuthService.getNewTokens()
				return instance.request(originalRequest)
			} catch (err) {
				localStorage.removeItem('user')
				removeTokensStorage()
			}
		}
		throw error
	}
)

export default instance
