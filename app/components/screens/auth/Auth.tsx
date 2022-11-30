import { FC, useState } from 'react'
import { useAuthRedirect } from '@/components/screens/auth/useAuthRedirect'
import { useAuth } from '@/hooks/useAuth'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthInput } from '@/components/screens/auth/auth.interface'
import Meta from '@/utils/meta/Meta'
import Heading from '@/components/ui/heading/Heading'
import { log } from 'util'
import { Button } from '@/components/ui/form-elements/Button'
import {
	AuthWrapper,
	FormButtons,
	FormWrapper,
} from '@/components/screens/auth/auth.styles.js'
import { Input } from '@/components/ui/form-elements/Input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type Register = {
	email: string
	password: string
}
const ValidationSchema = yup.object().shape({
	email: yup
		.string()
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup
		.string()
		.max(32, 'Max password length is 32')
		.required('Password is required'),
})

export const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Register>({ resolver: yupResolver(ValidationSchema) })

	const onSubmit = (data: Register): void => {
		console.log(data)
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
