import React from 'react'
import { NextPage } from 'next'
import Meta from '@/utils/meta/Meta'
import UserEdit from '@/components/screens/admin/User/Edit/User-edit.'

const UserEditPage: NextPage = () => {
	return (
		<>
			<Meta title={'User Edit'} />
			<UserEdit />
		</>
	)
}

export default UserEditPage
