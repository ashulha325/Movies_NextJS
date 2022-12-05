import React, { FC, SyntheticEvent, useEffect } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IEditUser } from '../../../../../../pages/manage/user/edit/edit.interface'
import { Input } from '@/components/ui/form-elements/Input'
import { Button } from '@/components/ui/form-elements/Button'
import { useUsersEdit } from '@/components/screens/admin/User/Edit/useUsersEdit'
import Heading from '@/components/ui/heading/Heading'
import { useUsersUpdate } from '@/components/screens/admin/User/Edit/useUsersUpdate'

const UserEdit: FC = () => {
	const { data } = useUsersEdit()
	const { onSubmit } = useUsersUpdate()
	const ValidationSchema = yup.object().shape({
		email: yup
			.string()
			.email('Enter a valid email')
			.required('Email is required'),
		password: yup
			.string()
			.min(6, 'Min password length is 6')
			.required('Password is required'),
	})

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<IEditUser>({ resolver: yupResolver(ValidationSchema) })

	setValue('email', `${data?.email}`)
	return (
		<div>
			<Heading title={'Edit User'} />
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					register={register}
					name={'Email'}
					registerType={'email'}
					errors={errors}
				/>
				<Input
					register={register}
					name={'Password'}
					registerType={'password'}
					errors={errors}
				/>
				<Button>Change</Button>
			</form>
		</div>
	)
}

export default UserEdit
