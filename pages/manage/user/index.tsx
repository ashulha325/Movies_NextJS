import { NextPage } from 'next'
import { useAdminRoute } from '@/hooks/usePrivateRoute'
import Users from '@/components/screens/admin/User/Users'

const UsersPage: NextPage = () => {
	useAdminRoute()
	return <Users />
}
export default UsersPage
