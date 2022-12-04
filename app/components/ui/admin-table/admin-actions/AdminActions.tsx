import React, { FC } from 'react'
import { IAdminActions } from '@/components/ui/admin-table/admin-actions/admin-actions.interface'
import { useRouter } from 'next/router'
import MaterialIcon from '@/components/ui/MaterialIcon'
import { AdminActionsWrapper } from '@/components/ui/admin-table/admin-table.styled'

const AdminActions: FC<IAdminActions> = ({
	editUrl,
	removeHandler,
	isAdmin,
}) => {
	const { push } = useRouter()
	return (
		<AdminActionsWrapper>
			<button onClick={() => push(editUrl)}>
				<MaterialIcon name={'MdEdit'} />
			</button>
			{!isAdmin && (
				<button onClick={removeHandler}>
					<MaterialIcon name={'MdClose'} />
				</button>
			)}
		</AdminActionsWrapper>
	)
}

export default AdminActions
