import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useAuthRedirect = () => {
	const { auth } = useAuth()

	const { query, push } = useRouter()

	const redirect = '/'

	useEffect(() => {
		if (auth) push(redirect)
	}, [auth, redirect, push])
}
