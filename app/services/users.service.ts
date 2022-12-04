import { getUsersUrl } from '@/config/api.config'
import axios from 'api/intercerptors'
import { IUser } from '@/shared/types/user.types'

export const UsersService = {
	async getUsers(searchTerm?: string) {
		return axios.get<IUser[]>(getUsersUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async deleteUser(_id: string) {
		return axios.delete<string>(getUsersUrl(`/${_id}`))
	},
}
