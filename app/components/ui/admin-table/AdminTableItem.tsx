import React, { FC } from 'react'
import { IAdminTableItem } from '@/components/ui/admin-table/admin-table.interface'
import AdminActions from '@/components/ui/admin-table/admin-actions/AdminActions'

const AdminTableItem: FC<IAdminTableItem> = ({ tableItem, removeHandler }) => {
	return (
		<div>
			{tableItem.items.map((value) => {
				return <div key={value}>{value}</div>
			})}
			<AdminActions editUrl={tableItem.editUrl} removeHandler={removeHandler} />
		</div>
	)
}

export default AdminTableItem
