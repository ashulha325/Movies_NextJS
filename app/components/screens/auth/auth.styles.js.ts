import styled from 'styled-components'

export const AuthWrapper = styled.div`
	margin-top: 200px;
	display: flex;
	align-items: center;
	background: var(--gray950);
	max-width: 400px;
	margin-left: auto;
	margin-right: auto;
	padding: 20px;
	border-radius: 12px;
`

export const FormWrapper = styled.div`
	width: 100%;
	> div:first-child {
		text-align: center;
		width: 100%;
		font-size: 25px;
		margin-bottom: 25px;
	}
`

export const FormButtons = styled.div`
	margin-top: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	border-radius: 20px;
	overflow: hidden;
	width: max-content;
`
