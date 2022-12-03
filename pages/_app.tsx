import type { AppProps } from 'next/app'

import '@/assets/styles/globals.scss'
import MainProvider from '../app/providers/MainProvider'
import { TypeComponentsAuthFileds } from '@/shared/types/auth.types'

type TypeAppProps = AppProps & TypeComponentsAuthFileds
export default function App({ Component, pageProps }: TypeAppProps) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}
