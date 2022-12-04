import { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import { AdminBar } from '@/components/ui/admin-bar/AdminBar'
import Heading from '@/components/ui/heading/Heading'
import AdminHeader from '@/components/ui/admin-table/admin-header/AdminHeader'
import { useUsers } from '@/components/screens/admin/Users/useUsers'
import AdminTable from '@/components/ui/admin-table/AdminTable'

const Users: FC = () => {
	const { handleSearch, isLoading, data, deleteAsync, searchTerm } = useUsers()

	return (
		<>
			<Meta title={'Admin/users'} />
			<AdminBar />
			<Heading title={'Users'} />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Email, Data Register, Actions']}
				tableItems={data || []}
			/>
		</>
	)
}

export default Users
