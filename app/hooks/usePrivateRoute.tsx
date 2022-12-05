import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/useAuth'
import { useEffect } from 'react'

export const useAdminRoute = () => {
	const router = useRouter()
	const { auth, isAdmin } = useAuth()

	useEffect(() => {
		if (!auth && !isAdmin) {
			router.push('/')
		}
	}, [auth])
}
