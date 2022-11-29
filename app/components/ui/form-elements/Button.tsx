import { FC } from 'react'
import { IButton } from '@/components/ui/form-elements/form.interface'

export const Button: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button className={className} {...rest}>
			{children}
		</button>
	)
}
