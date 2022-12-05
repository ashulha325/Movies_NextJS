import { FC } from 'react'
import styled from 'styled-components'
import { InputProps } from '@/components/ui/form-elements/form.interface'

export const Input: FC<InputProps> = ({
	name,
	register,
	registerType,
	errors,
	value,
	onChange,
	...rest
}) => {
	return (
		<InputWrapper>
			<InputLabel>{name}</InputLabel>
			<InputElement
				{...register(registerType)}
				value={value}
				onChange={onChange}
				type="text"
				{...rest}
			/>
			{errors?.[registerType]?.message && (
				<InputError>{errors?.[registerType]?.message}</InputError>
			)}
		</InputWrapper>
	)
}

const InputWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	&:not(:last-child) {
		margin-bottom: 40px;
	}
`
const InputLabel = styled.label`
	width: 100%;
	letter-spacing: -0.05em;
	font-size: 12px;
	text-transform: uppercase;
	color: var(--gray500);
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

const InputError = styled.span`
	margin-top: 5px;
	position: absolute;
	top: 100%;
	color: var(--red);
`
