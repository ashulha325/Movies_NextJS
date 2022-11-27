import Link from 'next/link'
import styled from 'styled-components'

export const NavigationWrapper = styled.div`
	height: 100vh;
	padding-top: 40px;
	width: 25%;
	max-width: 400px;
	border-right: 1px solid var(--gray800);
`
export const NavLogoLink = styled(Link)`
	margin-bottom: 20px;
	display: block;
	padding-right: 30px;
`
