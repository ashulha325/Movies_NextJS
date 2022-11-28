import styled from 'styled-components'
import Link from 'next/link'

export const MoviesWrapper = styled.div`
	position: relative;
	margin-top: 20px;
`

export const MoviesListWrapper = styled.div`
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

export const MoviesListNotFound = styled.div`
	color: white;
	text-align: center;
	margin: 15px 0;
	padding: 15px;
	font-size: 13px;
	background: var(--gray800);
`

export const MoviesItemWrapeer = styled(Link)`
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

export const MoviesItemLeft = styled.div``

export const MoviesItemRight = styled.div`
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

export const MoviesResult = styled.div`
	font-size: 20px;
	color: var(--white);
	margin-bottom: 20px;
`

export const MoviesBtn = styled(Link)`
	color: var(--white);
	background-color: var(--red);
	margin-top: 20px;
	padding: 8px 12px;
	display: inline-block;
	border-radius: 8px;
	width: 100%;
	text-align: center;
	font-weight: 300;
`
export const FavoritesNotAuth = styled.div`
	color: white;
	text-align: center;
	margin: 15px 0;
	padding: 15px;
	font-size: 13px;
	background: var(--gray800);
`
