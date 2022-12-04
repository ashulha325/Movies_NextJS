import { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import { AdminBar } from '@/components/ui/admin-bar/AdminBar'

const Users: FC = () => {
	return (
		<>
			<Meta title={'Admin/users'} />
			<AdminBar />
		</>
	)
}

export default Users
