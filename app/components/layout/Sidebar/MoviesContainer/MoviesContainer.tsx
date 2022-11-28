import { FC } from 'react'
import PopularMovies from '@/components/layout/Sidebar/MoviesContainer/PopularMovies'
import FavoriteMovies from '@/components/layout/Sidebar/MoviesContainer/FavoriteMovies/FavoriteMovies'
import { MoviesWrapper } from '@/components/layout/Sidebar/MoviesContainer/Movies.styled'

const MoviesContainer: FC = () => {
	return (
		<MoviesWrapper>
			<PopularMovies />
			<FavoriteMovies />
		</MoviesWrapper>
	)
}

export default MoviesContainer
