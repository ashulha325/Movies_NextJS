import { FC } from 'react'

import { SidebarWrapper } from '@/components/layout/Sidebar/styled'
import Search from '@/components/layout/Sidebar/Search/Search'

const Sidebar: FC = () => {
	return (
		<SidebarWrapper>
			<Search />
		</SidebarWrapper>
	)
}

export default Sidebar
