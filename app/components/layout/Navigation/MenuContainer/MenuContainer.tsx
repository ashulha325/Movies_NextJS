import { FC } from 'react'
import Menu from '@/components/layout/Navigation/MenuContainer/menu/Menu'
import {
	firstMenu,
	userMenu,
} from '@/components/layout/Navigation/MenuContainer/menu/menu.data'
import GenreMenu from '@/components/layout/Navigation/MenuContainer/genres/GenreMenu'

const MenuContainer: FC = () => {
	return (
		<>
			<Menu menu={firstMenu} />
			<GenreMenu />
			<Menu menu={userMenu} />
		</>
	)
}

export default MenuContainer
