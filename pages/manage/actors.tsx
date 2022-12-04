import { NextPage } from 'next'
import { useAdminRoute } from '@/hooks/usePrivateRoute'
import Actors from '@/components/screens/admin/Actors/Actors'

const ActorsPage: NextPage = () => {
	useAdminRoute()
	return <Actors />
}
export default ActorsPage
