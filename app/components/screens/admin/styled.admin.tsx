import styled from 'styled-components'

export const StatisticsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 80px;
	gap: 40px;
`

export const StatisticsUsersCountWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	background: var(--gray950);
	padding: 80px 20px;
	color: var(--white);
	border-radius: 20px;

	p {
		display: flex;
		font-size: 80px;
		line-height: 1;
		margin: 0;
	}
	div {
		font-size: 18px;
		margin-top: 5px;
		color: var(--gray500);
	}
`

export const StatisticsPopularCountWrapper = styled.div`
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	background: var(--gray950);
	padding: 40px 20px;
	color: var(--white);

	p {
		display: flex;
		font-size: 14px;
		line-height: 1;
		margin: 0;
	}
	span {
		font-size: 12px;
		margin-top: 5px;
		color: var(--gray500);
		margin-bottom: 15px;
	}
	a {
		width: 100%;
	}
	img {
		border-radius: 20px;
		height: 240px;
		object-fit: cover;
		object-position: center;
		width: 100%;
	}
`
