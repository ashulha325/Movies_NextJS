import styled from 'styled-components'

export const SearchFieldWrapper = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: flex-start;
	border-radius: 20px;
	background: var(--gray700);
	padding: 12px;

	input {
		width: 100%;
		background: none;
		font-size: 14px;
		transition: 0.35s;
		color: var(--gray600);
		&::placeholder {
			color: var(--gray600);
		}

		&:focus {
			color: var(--white);
		}
		&:focus + svg {
			fill: var(--white);
		}
	}
	svg {
		transition: 0.35s;
		width: 16px;
		height: auto;
		fill: var(--gray600);
		margin-right: 5px;
	}
`
