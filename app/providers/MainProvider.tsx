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
				<motion.div
					initial="initial"
					animate="animate"
					// this is a simple animation that fades in the page. You can do all kind of fancy stuff here
					variants={{
						initial: {
							opacity: 0,
						},
						animate: {
							opacity: 1,
						},
					}}
				>
					<Layout>{children}</Layout>
				</motion.div>
			</QueryClientProvider>
		</Provider>
	)
}

interface ProviderProps {
	children: React.ReactNode
}

export default MainProvider
