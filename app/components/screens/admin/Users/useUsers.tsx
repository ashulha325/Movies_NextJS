import { ChangeEvent, useMemo, useState } from 'react'
import useDebounce from '@/hooks/useDebounce'
import { useMutation, useQuery } from 'react-query'
import { UsersService } from '@/services/users.service'
import { ITableItem } from '@/components/ui/admin-table/admin-table.interface'
import { getAdminUrl } from '@/config/url.config'
import { toastError } from '@/utils/toast-error'
import { toastr } from 'react-redux-toastr'

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const deboucedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['search users list', deboucedSearch],
		() => {
			return UsersService.getUsers(deboucedSearch)
		},
		{
			select: ({ data }) => {
				return data.map(
					(user): ITableItem => ({
						_id: user._id,
						editUrl: getAdminUrl(`user/edit/${user._id}`),
						items: [user.email, user.createdAt],
					})
				)
			},
			onError: (err) => {
				toastError(err, 'User List')
			},
		}
	)
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		'del user from list',
		(userID: string) => {
			return UsersService.deleteUser(userID)
		},
		{
			onError: (err) => {
				toastError(err, 'Delete User')
			},
			onSuccess: () => {
				toastr.success('Delete User', 'delete was successful')
				queryData.refetch()
			},
		}
	)

	console.log(queryData)
	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
		}),
		[searchTerm, queryData, deleteAsync]
	)
}
