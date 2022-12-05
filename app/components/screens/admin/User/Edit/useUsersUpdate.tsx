import { useMutation, useQuery } from 'react-query'
import { UsersService } from '@/services/user/users.service'
import { useRouter } from 'next/router'
import { toastError } from '@/utils/toast-error'
import { toastr } from 'react-redux-toastr'
import { getAdminUrl } from '@/config/url.config'
import { IEditUser } from '../../../../../../pages/manage/user/edit/edit.interface'
import { SubmitHandler } from 'react-hook-form'

export const useUsersUpdate = () => {
	const { query, push } = useRouter()

	const id = String(query.id)

	const { mutateAsync } = useMutation(
		'update user',
		(data: IEditUser) => UsersService.updateUserBySlug(id, data),
		{
			onError: (err) => {
				toastError(err, 'Update User')
			},
			onSuccess: () => {
				toastr.success('Update User', 'User Update Successfully')
				push(getAdminUrl('/user'))
			},
		}
	)

	const onSubmit: SubmitHandler<IEditUser> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit }
}
