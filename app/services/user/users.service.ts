import { getUsersUrl } from '@/config/api.config'
import axios from 'api/intercerptors'
import { IUser } from '@/shared/types/user.types'
import { IEditUser } from '../../../pages/manage/user/edit/edit.interface'

export const UsersService = {
	async getUsers(searchTerm?: string) {
		return axios.get<IUser[]>(getUsersUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async deleteUser(_id: string) {
		return axios.delete<string>(getUsersUrl(`/${_id}`))
	},
	async getUserBySlug(slug: string) {
		return axios.get<IEditUser>(getUsersUrl(`/${slug}`))
	},

	async updateUserBySlug(slug: string, data: IEditUser) {
		return axios.put<IEditUser>(getUsersUrl(`/${slug}`), data)
	},
}
