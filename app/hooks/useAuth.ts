import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export const useAuth = () => {
	const [auth, setAuth] = useState<boolean>(false)

	const state = useSelector((state: any) => state.user)

	useEffect(() => {
		if (!state.user) {
			setAuth(false)
			return
		}
		setAuth(true)
	}, [state.user])

	return { auth, isAdmin: state?.user?.isAdmin, isLoading: state.isLoading }
}
