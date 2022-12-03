import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { allActions } from '@/store/rootActions'

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators<any, any>(allActions, dispatch)
}
