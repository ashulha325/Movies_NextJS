import React, { FC } from 'react'
import { IMenu } from '@/components/layout/Navigation/MenuContainer/menu/menu.interface'
import {
	MenuHeading,
	MenuLi,
	MenuList,
	MenuWrapper,
} from '@/components/layout/Navigation/MenuContainer/styled'
import MenuItem from '@/components/layout/Navigation/MenuContainer/menu/MenuItem'
import AuthItems from '@/components/layout/Navigation/MenuContainer/auth/AuthItems'

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<MenuWrapper>
			<MenuHeading>{title}</MenuHeading>
			<MenuList>
				{items?.map((item) => {
					return <MenuItem item={item} key={item.link} />
				})}
				{title === 'General' && <AuthItems />}
			</MenuList>
		</MenuWrapper>
	)
}

export default Menu
