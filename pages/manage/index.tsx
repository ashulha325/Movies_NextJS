import { Admin } from '@/components/screens/admin/Home/Admin'
import { useAdminRoute } from '@/hooks/usePrivateRoute'
import { NextPage } from 'next'

const AdminPage: NextPage = () => {
	useAdminRoute()

	return <Admin />
}
export default AdminPage
