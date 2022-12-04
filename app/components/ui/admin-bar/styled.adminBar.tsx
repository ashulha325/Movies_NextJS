import styled from 'styled-components'

export const AdminBarWrapper = styled.nav`
	display: flex;
	background: var(--gray950);
	border-radius: 20px;
	margin-bottom: 40px;
`

export const AdminBarWrapperList = styled.ul`
	display: flex;
	padding: 0px 25px;
	justify-content: center;
	width: 100%;
`

export const AdminBarWrapperItem = styled.li<{ active: boolean }>`
	display: flex;
	align-items: center;
	position: relative;
	color: var(--white);
	margin-left: 5px;
	margin-right: 5px;

	&:after {
		position: absolute;
		bottom: 5px;
		content: '';
		background: var(--red);
		height: 2px;
		width: 100%;
		left: 0;
		transform-origin: left;
		transform: ${(props) => (!props.active ? 'scaleX(0)' : 'scaleX(1)')};
		transition: 0.35s;
		pointer-events: none;
	}
	&:hover {
		&:after {
			transform: scaleX(1);
		}
	}
	a {
		padding: 16px;
	}
`
