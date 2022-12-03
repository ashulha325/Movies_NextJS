import { FC, ReactNode, useEffect, useState } from 'react'

import Navigation from '@/components/layout/Navigation/Navigation'
import Sidebar from '@/components/layout/Sidebar/Sidebar'
import { Content, LayoutWrapper, MainWrapper } from '@/components/layout/styled'

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<LayoutWrapper
			initial="initial"
			animate="animate"
			transition={{ delay: 0.15, duration: 1 }}
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
