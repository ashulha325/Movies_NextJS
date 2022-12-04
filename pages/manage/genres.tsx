import { NextPage } from 'next'
import { useAdminRoute } from '@/hooks/usePrivateRoute'
import Genres from '@/components/screens/admin/Genres/Genres'

const GenresPage: NextPage = () => {
	useAdminRoute()
	return <Genres />
}
export default GenresPage
