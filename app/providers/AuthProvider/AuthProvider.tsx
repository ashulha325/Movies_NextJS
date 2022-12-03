import { FC, useEffect } from 'react'
import { TypeComponentsAuthFileds } from '@/shared/types/auth.types'
import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

export const AuthProvider: FC<{ children: JSX.Element }> = ({ children }) => {
	const { auth } = useAuth()
	const { logout, checkAuth } = useActions()

	const { pathname } = useRouter()

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (accessToken) checkAuth()
	}, [])

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')

		if (!refreshToken && auth) {
			logout()
		}
	}, [pathname])
	return <>{children}</>
}
