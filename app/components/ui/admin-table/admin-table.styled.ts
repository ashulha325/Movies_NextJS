import styled from 'styled-components'
import { style } from '@motionone/dom'

export const AdminTableHeaderWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 60px;
	background: var(--dark-red);
	padding: 16px;
	margin-top: 20px;
	border-radius: 8px;
	margin-bottom: 20px;
`
export const AdminTableHeaderItemWrapper = styled.div`
	display: flex;
	align-items: center;
	color: var(--white);
	font-size: 15px;
`
export const AdminTableHeaderItemColWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: var(--white);
	font-size: 15px;
`

export const AdminTableWrapper = styled.div`
	margin-bottom: 40px;
`
export const AdminTableItemWrapper = styled.div`
	grid-template-columns: 1fr 1fr 60px;
	display: grid;
	padding: 16px;
	background: var(--gray950);
	border-radius: 8px;
	color: var(--white);
	&:not(:last-child) {
		margin-bottom: 16px;
	}
`

export const AdminActionsWrapper = styled.div`
	width: 60px;
	display: flex;
	button {
		cursor: pointer;
		display: flex;
		background: none;
		border-radius: 0;
		border: 0;
		color: var(--red);
		svg {
			width: 20px;
			height: auto;
		}
	}
`
