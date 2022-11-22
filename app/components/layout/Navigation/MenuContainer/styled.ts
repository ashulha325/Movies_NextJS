import styled from 'styled-components'

export const MenuWrapper = styled.div`
	&:nth-child(2) {
		margin-top: 60px;
	}
	&:not(:last-child) {
		margin-bottom: 40px;
	}
`

export const MenuHeading = styled.div`
	margin-bottom: 20px;
	text-transform: uppercase;
	font-weight: 600;
	font-size: 14px;
	color: var(--gray500);
`

export const MenuList = styled.ul``

export const MenuLi = styled.li<ImenuLi>`
	color: ${(props) => (props.active ? 'var(--gray600)' : 'var(--white)')};
	transition: 0.35s;
	border-right: ${(props) =>
		props.active ? '4px solid red' : '4px solid transparent'};
	&:not(:last-child) {
		margin-bottom: 14px;
	}

	> a {
		padding: 4px 0;
		display: flex;
		align-items: center;
		color: ${(props) => (props.active ? 'var(--white)' : 'var(--gray600)')};
		transition: 0.35s;
		svg {
			width: 25px;
			height: auto;
			transition: 0.35s;
			fill: ${(props) => (props.active ? 'var(--red)' : 'var(--gray600)')};
		}
		span {
			margin-left: 10px;
		}
	}

	&:hover {
		> a {
			color: var(--white);
			svg {
				fill: var(--white);
			}
		}
	}
`

interface ImenuLi {
	active: any
}
