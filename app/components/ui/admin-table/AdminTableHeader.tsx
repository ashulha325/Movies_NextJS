import React, { FC } from 'react'
import {
	AdminTableHeaderItemWrapper,
	AdminTableHeaderWrapper,
} from '@/components/ui/admin-table/admin-table.styled'

const AdminTableHeader: FC<{ headerItems: string[] }> = ({ headerItems }) => {
	return (
		<AdminTableHeaderWrapper>
			{headerItems.map((value, idx) => {
				return (
					<AdminTableHeaderItemWrapper key={value}>
						{value}
					</AdminTableHeaderItemWrapper>
				)
			})}
		</AdminTableHeaderWrapper>
	)
}

export default AdminTableHeader
