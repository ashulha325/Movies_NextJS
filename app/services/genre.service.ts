import { getGenresUrl } from '@/config/api.config'
import { IGenre } from '@/shared/types/movies.types'
import { axiosClassic } from '../api/intercerptors'

export const genreService = {
	getPopularGenres() {
		return axiosClassic.get<IGenre[]>(getGenresUrl('/popular'))
	},
}
