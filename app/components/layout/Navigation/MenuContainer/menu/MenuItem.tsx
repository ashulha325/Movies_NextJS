import { FC } from 'react'
import { IMenuItem } from '@/components/layout/Navigation/MenuContainer/menu/menu.interface'
import { useRouter } from 'next/router'
import { MenuLi } from '@/components/layout/Navigation/MenuContainer/styled'
import Link from 'next/link'
import MaterialIcon from '@/components/ui/MaterialIcon'

const MenuItem: FC<{ item: IMenuItem }> = ({ item: { link, title, icon } }) => {
	const { asPath } = useRouter()
	return (
		<MenuLi active={asPath === link}>
			<Link href={link}>
				<MaterialIcon name={icon} />
				<span>{title}</span>
			</Link>
		</MenuLi>
	)
}

export default MenuItem
