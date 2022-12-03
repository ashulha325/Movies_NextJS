import { FC, SyntheticEvent } from 'react'
import MaterialIcon from '@/components/ui/MaterialIcon'
import { MenuLi } from '@/components/layout/Navigation/MenuContainer/styled'
import { useActions } from '@/hooks/useActions'

const LogoutButton: FC = () => {
	const { logout } = useActions()

	const handleLogout = (e: SyntheticEvent<HTMLAnchorElement>) => {
		e.preventDefault()

		logout()
	}
	return (
		<MenuLi active={false}>
			<a href="#" onClick={handleLogout}>
				<MaterialIcon name={'MdLogout'} />
				<span>Logout</span>
			</a>
		</MenuLi>
	)
}

export default LogoutButton
