import { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import { AdminBar } from '@/components/ui/admin-bar/AdminBar'

const Movies: FC = () => {
	return (
		<>
			<Meta title={'Admin/movies'} />
			<AdminBar />
		</>
	)
}

export default Movies
