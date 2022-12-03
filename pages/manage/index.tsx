import { NextPageAuth } from '@/shared/types/auth.types'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/useAuth'
import Meta from '@/utils/meta/Meta'

const AdminPage: NextPageAuth = () => {
	const router = useRouter()
	const { auth, isAdmin } = useAuth()

	useEffect(() => {
		if (!auth && !isAdmin) {
			router.push('/')
		}
	}, [auth])

	return (
		<>
			<Meta title={'Admin'} />
		</>
	)
}
export default AdminPage
