import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from '@/components/layout/Layout'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})
const MainProvider: FC<ProviderProps> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>{children}</Layout>
		</QueryClientProvider>
	)
}

interface ProviderProps {
	children: React.ReactNode
}

export default MainProvider
