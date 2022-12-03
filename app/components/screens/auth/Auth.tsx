import { FC } from 'react'
import { useAuthRedirect } from '@/components/screens/auth/useAuthRedirect'
import { useAuth } from '@/hooks/useAuth'
import { useForm } from 'react-hook-form'
import Meta from '@/utils/meta/Meta'
import Heading from '@/components/ui/heading/Heading'
import { Button } from '@/components/ui/form-elements/Button'
import {
	AuthWrapper,
	FormButtons,
	FormWrapper,
} from '@/components/screens/auth/auth.styles.js'
import { Input } from '@/components/ui/form-elements/Input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useActions } from '@/hooks/useActions'
import { IAuthInput } from '@/components/screens/auth/auth.interface'

const ValidationSchema = yup.object().shape({
	email: yup
		.string()
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup
		.string()
		.min(6, 'Min password length is 32')
		.required('Password is required'),
})

export const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()
	const { login } = useActions()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IAuthInput>({ resolver: yupResolver(ValidationSchema) })

	const onSubmit = (data: IAuthInput): void => {
		login(data)
	}

	return (
		<>
			<Meta title={'Login'} />
			<AuthWrapper>
				<FormWrapper onSubmit={handleSubmit(onSubmit)}>
					<Heading title={'Login'} />
					<div>
						<Input
							name={'Email'}
							register={register}
							registerType={'email'}
							errors={errors}
						/>
						<Input
							name={'Password'}
							register={register}
							registerType={'password'}
							errors={errors}
						/>
					</div>
					<FormButtons>
						<Button disabled={isLoading} type="submit">
							Login
						</Button>
					</FormButtons>
				</FormWrapper>
			</AuthWrapper>
		</>
	)
}
