import { FC } from 'react'
import { IButton } from '@/components/ui/form-elements/form.interface'
import styled from 'styled-components'

export const Button: FC<IButton> = ({
	children,
	className,
	active = false,
	...rest
}) => {
	return (
		<ButtonWrapper active={active} className={className} {...rest}>
			{children}
		</ButtonWrapper>
	)
}

const ButtonWrapper = styled.button<IButton>`
	padding: 10px 30px;
	border: none;
	color: var(--white);
	transition: 0.35s;
	background: ${(props) => (!props.active ? 'var(--red)' : 'var(--dark-red)')};
	cursor: pointer;
`
