import { FC } from 'react'
import { adminNavItems } from '@/components/ui/admin-bar/adminBar.data'
import { AdminBarItem } from '@/components/ui/admin-bar/AdminBarItem'
import {
	AdminBarWrapper,
	AdminBarWrapperList,
} from '@/components/ui/admin-bar/styled.adminBar'

export const AdminBar: FC<{}> = (props) => {
	return (
		<AdminBarWrapper>
			<AdminBarWrapperList>
				{adminNavItems.map((item, idx) => {
					return <AdminBarItem key={idx} item={item} />
				})}
			</AdminBarWrapperList>
		</AdminBarWrapper>
	)
}
