import { FC, ReactNode, useEffect, useState } from 'react'

import Navigation from '@/components/layout/Navigation/Navigation'
import Sidebar from '@/components/layout/Sidebar/Sidebar'
import { Content, LayoutWrapper, MainWrapper } from '@/components/layout/styled'

const Layout: FC<ILayout> = ({ children }) => {
	const [loaded, setLoaded] = useState<boolean>(false)
	useEffect(() => {
		setTimeout(() => {
			setLoaded(true)
		}, 100)
	}, [])
	return (
		<LayoutWrapper loaded={loaded}>
			<Navigation />
			<MainWrapper>
				<Content>{children}</Content>
			</MainWrapper>
			<Sidebar />
		</LayoutWrapper>
	)
}

interface ILayout {
	children: JSX.Element | ReactNode
}
export default Layout
