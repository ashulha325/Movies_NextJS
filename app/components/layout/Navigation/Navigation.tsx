import { FC } from 'react'

import Logo from '@/components/layout/Navigation/Logo'
import MenuContainer from '@/components/layout/Navigation/MenuContainer/MenuContainer'
import { NavigationWrapper } from '@/components/layout/Navigation/styled'

const Navigation: FC = () => {
	return (
		<NavigationWrapper>
			<Logo />
			<MenuContainer />
		</NavigationWrapper>
	)
}

export default Navigation
