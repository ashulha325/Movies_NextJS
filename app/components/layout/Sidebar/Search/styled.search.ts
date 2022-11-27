import styled from 'styled-components'
import Link from 'next/link'

export const SearchWrapper = styled.div`
	position: relative;
`

export const SearchListWrapper = styled.div`
	margin-top: 15px;
	width: 100%;
	z-index: 10;
	> a {
		position: relative;
		&::after {
			content: '';
			position: absolute;
			right: 0;
			top: 28%;
			background: transparent;
		}
		&:hover {
			&:after {
			}
		}
	}
`

export const SearchListNotFound = styled.div`
	color: white;
	text-align: center;
	margin: 15px 0;
	padding: 15px;
	font-size: 13px;
	background: var(--gray800);
`

export const SearchItem = styled(Link)`
	display: flex;
	align-items: stretch;
	cursor: pointer;
	img {
		width: 50px;
		min-width: 50px;
		height: auto;
		margin-right: 10px;
	}
	span {
		color: var(--white);
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		max-width: 150px;
	}
	&:not(:last-child) {
		margin-bottom: 15px;
	}
`

export const SearchItemLeft = styled.div``

export const SearchItemRight = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	p {
		color: var(--gray500);
		font-size: 10px;
		margin-bottom: 0;
		margin-top: 4px;
	}
	div {
		margin-top: auto;
		font-size: 14px;
		color: var(--white);
		display: flex;
		align-items: center;
		svg {
			margin-right: 5px;
			fill: var(--yellow700);
		}
	}
`

export const SearchResult = styled.div`
	font-size: 20px;
	color: var(--white);
	margin-bottom: 20px;
`
