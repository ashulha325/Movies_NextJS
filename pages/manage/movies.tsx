import { NextPage } from 'next'
import { useAdminRoute } from '@/hooks/usePrivateRoute'
import Movies from '@/components/screens/admin/Movies/Movies'

const MoviesPage: NextPage = () => {
	useAdminRoute()
	return <Movies />
}
export default MoviesPage
