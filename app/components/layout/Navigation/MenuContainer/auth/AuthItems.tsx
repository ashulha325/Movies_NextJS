import { FC } from 'react'
import { useAuth } from '@/hooks/useAuth'
import LogoutButton from '@/components/layout/Navigation/MenuContainer/auth/LogoutButton'
import MenuItem from '@/components/layout/Navigation/MenuContainer/menu/MenuItem'

const AuthItems: FC = () => {
	const { auth, isAdmin } = useAuth()

	return (
		<>
			{auth ? (
				<>
					<MenuItem
						item={{
							icon: 'MdAccountBox',
							title: 'My Account',
							link: '/account',
						}}
					/>
					{isAdmin && (
						<MenuItem
							item={{
								icon: 'MdAdminPanelSettings',
								title: 'Admin Panel',
								link: '/admin',
							}}
						/>
					)}
					<LogoutButton />
				</>
			) : (
				<>
					<MenuItem
						item={{
							icon: 'MdLogin',
							title: 'Login',
							link: '/login',
						}}
					/>
					<MenuItem
						item={{
							icon: 'MdLogin',
							title: 'Register',
							link: '/registration',
						}}
					/>
				</>
			)}
		</>
	)
}

export default AuthItems
