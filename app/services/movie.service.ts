import { getMoviesUrl } from '@/config/api.config'
import { axiosClassic } from '../api/intercerptors'
import { IMovie } from '@/shared/types/movies.types'

export const movieService = {
	async getMovies(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async getMostPopularMovies() {
		const { data: movies } = await axiosClassic.get<IMovie[]>(
			getMoviesUrl('/most-popular')
		)
		return movies
	},
}
