import { FC, useState } from 'react'
import { useAuthRedirect } from '@/components/screens/auth/useAuthRedirect'
import { useAuth } from '@/hooks/useAuth'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthInput } from '@/components/screens/auth/auth.interface'
import Meta from '@/utils/meta/Meta'
import Heading from '@/components/ui/heading/Heading'
import { log } from 'util'
import { Button } from '@/components/ui/form-elements/Button'

export const AuthPage: FC<{}> = (props) => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})

	const login = (data: any) => {}
	const register = (data: any) => {}

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') {
			login(data)
		} else if (type === 'register') {
			register(data)
		}
		reset()
	}
	return (
		<>
			<Meta title={'AuthPage'}></Meta>
			<section>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title={'AuthPage'} />

					{/*{'fields'}*/}

					<div>
						<Button
							type={'submit'}
							onClick={() => {
								setType('login')
							}}
							disabled={isLoading}
						>
							Login
						</Button>
						<Button
							onClick={() => {
								setType('register')
							}}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</>
	)
}
