import React, { FC } from 'react'
import { IAdminActions } from '@/components/ui/admin-table/admin-actions/admin-actions.interface'
import { useRouter } from 'next/router'
import MaterialIcon from '@/components/ui/MaterialIcon'

const AdminActions: FC<IAdminActions> = ({ editUrl, removeHandler }) => {
	const { push } = useRouter()
	return (
		<div>
			<button onClick={() => push(editUrl)}>
				<MaterialIcon name={'MdEdit'} />
			</button>
			<button onClick={removeHandler}>
				<MaterialIcon name={'MdClose'} />
			</button>
		</div>
	)
}

export default AdminActions
