import { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import { AdminBar } from '@/components/ui/admin-bar/AdminBar'

const Genres: FC = () => {
	return (
		<>
			<Meta title={'Admin/genres'} />
			<AdminBar />
		</>
	)
}

export default Genres
