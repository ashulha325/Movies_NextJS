import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export const useAuth = () => {
	const [auth, setAuth] = useState<boolean>(false)

	const state = useSelector((state: any) => state.user)

	useEffect(() => {
		console.log(state.user)
		if (!state.user) {
			setAuth(false)
			return
		}
		setAuth(true)
	}, [state.user])
	return { auth, isLoading: state.isLoading }
}
