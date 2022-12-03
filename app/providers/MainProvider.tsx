import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from '@/components/layout/Layout'
import { ReduxToast } from './ReduxToast'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { HeadProgressBar } from './HeadProgressbar'
import { AuthProvider } from './AuthProvider/AuthProvider'
import { TypeComponentsAuthFileds } from '@/shared/types/auth.types'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})
const MainProvider: FC<TypeComponentsAuthFileds> = ({
	children,
	Component,
}) => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<HeadProgressBar />
				<ReduxToast />
				<AuthProvider Component={Component}>
					<Layout>{children}</Layout>
				</AuthProvider>
			</QueryClientProvider>
		</Provider>
	)
}

interface ProviderProps {
	children: React.ReactNode
}

export default MainProvider
