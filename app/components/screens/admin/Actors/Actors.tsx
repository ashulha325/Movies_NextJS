import { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import { AdminBar } from '@/components/ui/admin-bar/AdminBar'

const Actors: FC = () => {
	return (
		<>
			<Meta title={'Admin/actors'} />
			<AdminBar />
		</>
	)
}

export default Actors
