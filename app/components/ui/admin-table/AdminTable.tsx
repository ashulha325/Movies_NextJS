import React, { FC, useEffect } from 'react'
import AdminTableHeader from '@/components/ui/admin-table/AdminTableHeader'
import AdminTableItem from '@/components/ui/admin-table/AdminTableItem'
import { ITableItem } from '@/components/ui/admin-table/admin-table.interface'
import SkeletonLoader from '@/components/ui/skeleton/SkeletonLoader'
import { AdminTableWrapper } from '@/components/ui/admin-table/admin-table.styled'

interface IAdminTable {
	tableItems: ITableItem[]
	isLoading: boolean
	headerItems: string[]
	removeHandler: (_id: string) => void
}
const AdminTable: FC<IAdminTable> = ({
	tableItems,
	isLoading,
	headerItems,
	removeHandler,
}) => {
	return (
		<AdminTableWrapper>
			<AdminTableHeader headerItems={headerItems} />
			{isLoading ? (
				<SkeletonLoader height={20} width={100 + '%'} />
			) : tableItems.length ? (
				tableItems.map((tableItem) => {
					return (
						<AdminTableItem
							removeHandler={() => removeHandler(tableItem._id)}
							key={tableItem._id}
							tableItem={tableItem}
						/>
					)
				})
			) : (
				<div>Elements not Found</div>
			)}
		</AdminTableWrapper>
	)
}

export default AdminTable
