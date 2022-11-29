import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from '@/components/layout/Layout'
import { ReduxToast } from './ReduxToast'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { HeadProgressBar } from './HeadProgressbar'
import { motion } from 'framer-motion'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})
const MainProvider: FC<ProviderProps> = ({ children }) => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<HeadProgressBar />
				<ReduxToast />
				<Layout>{children}</Layout>
			</QueryClientProvider>
		</Provider>
	)
}

interface ProviderProps {
	children: React.ReactNode
}

export default MainProvider
