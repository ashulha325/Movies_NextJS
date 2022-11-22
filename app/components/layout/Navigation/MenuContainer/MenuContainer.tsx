import { FC } from 'react'
import Menu from '@/components/layout/Navigation/MenuContainer/menu/Menu'
import {
	firstMenu,
	userMenu,
} from '@/components/layout/Navigation/MenuContainer/menu/menu.data'

const MenuContainer: FC = () => {
	return (
		<>
			<Menu menu={firstMenu} />
			<Menu menu={userMenu} />
		</>
	)
}

export default MenuContainer
