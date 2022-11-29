import { FC, ReactNode, useEffect, useState } from 'react'

import Navigation from '@/components/layout/Navigation/Navigation'
import Sidebar from '@/components/layout/Sidebar/Sidebar'
import { Content, LayoutWrapper, MainWrapper } from '@/components/layout/styled'

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<LayoutWrapper>
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
