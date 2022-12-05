import { useQuery } from 'react-query'
import { UsersService } from '@/services/user/users.service'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const useUsersEdit = () => {
	const { query } = useRouter()

	const id = String(query.id)

	const { data, isLoading } = useQuery(
		['getUseUserData', id],
		() => {
			return UsersService.getUserBySlug(`${id}`)
		},
		{
			select: ({ data }) => {
				return {
					email: data.email,
					password: data.password,
				}
			},
			enabled: !!query.id,
		}
	)

	return { data, isLoading }
}
