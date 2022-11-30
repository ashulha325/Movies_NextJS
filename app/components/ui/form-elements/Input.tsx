import { FC } from 'react'
import { IInput } from '@/components/ui/form-elements/form.interface'
import styled from 'styled-components'

export const Input: FC<IInput> = ({ name, ...rest }) => {
	return (
		<InputWrapper>
			<InputLabel htmlFor={name}>{name}</InputLabel>
			<InputElement {...rest} type="text" name={name} id={name} />
		</InputWrapper>
	)
}

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	&:not(:last-child) {
		margin-bottom: 20px;
	}
`
const InputLabel = styled.label`
	width: 100%;
	letter-spacing: -0.05em;
	font-size: 12px;
	text-transform: uppercase;
	color: var(--gray700);
`
const InputElement = styled.input`
	margin-top: 10px;
	background: none;
	width: 100%;
	border: none;
	border-bottom: 1px solid var(--gray500);
	color: var(--white);
	padding-bottom: 4px;
`
