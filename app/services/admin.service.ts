import { getUsersUrl } from '@/config/api.config'
import axios from 'api/intercerptors'

export const AdminService = {
	async getCountUsers() {
		return axios.get<number>(getUsersUrl('/count'))
	},
}
