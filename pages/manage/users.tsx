import { NextPage } from 'next'
import { useAdminRoute } from '@/hooks/usePrivateRoute'
import Users from '@/components/screens/admin/Users/Users'

const UsersPage: NextPage = () => {
	useAdminRoute()
	return <Users />
}
export default UsersPage
