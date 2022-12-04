import React, { FC } from 'react'
import { IAdminTableItem } from '@/components/ui/admin-table/admin-table.interface'
import AdminActions from '@/components/ui/admin-table/admin-actions/AdminActions'
import {
	AdminTableHeaderItemColWrapper,
	AdminTableItemWrapper,
} from '@/components/ui/admin-table/admin-table.styled'

const AdminTableItem: FC<IAdminTableItem> = ({ tableItem, removeHandler }) => {
	return (
		<AdminTableItemWrapper>
			{tableItem.items.map((value) => {
				return (
					<AdminTableHeaderItemColWrapper key={value}>
						{value}
					</AdminTableHeaderItemColWrapper>
				)
			})}
			<AdminActions
				isAdmin={tableItem.isAdmin}
				editUrl={tableItem.editUrl}
				removeHandler={removeHandler}
			/>
		</AdminTableItemWrapper>
	)
}

export default AdminTableItem
