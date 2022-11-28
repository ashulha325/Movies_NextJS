import { FC } from 'react'

import { SidebarWrapper } from '@/components/layout/Sidebar/styled'
import Search from '@/components/layout/Sidebar/Search/Search'
import MoviesContainer from '@/components/layout/Sidebar/MoviesContainer/MoviesContainer'

const Sidebar: FC = () => {
	return (
		<SidebarWrapper>
			<Search />
			<MoviesContainer />
		</SidebarWrapper>
	)
}

export default Sidebar
