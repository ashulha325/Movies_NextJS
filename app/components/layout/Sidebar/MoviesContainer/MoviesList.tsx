import { FC } from 'react'
import { IMovieList } from '@/components/layout/Sidebar/MoviesContainer/movie-list.interface'
import MoviesItem from '@/components/layout/Sidebar/MoviesContainer/MoviesItem'
import Link from 'next/link'
import {
	MoviesBtn,
	MoviesListWrapper,
	MoviesResult,
} from '@/components/layout/Sidebar/MoviesContainer/Movies.styled'

const MoviesList: FC<IMovieList> = ({ link, title, movies }) => {
	return (
		<MoviesListWrapper>
			<MoviesResult>{title}</MoviesResult>
			{movies?.map((movie) => (
				<MoviesItem key={movie._id} movie={movie} />
			))}
			<MoviesBtn href={link}>See More</MoviesBtn>
		</MoviesListWrapper>
	)
}

export default MoviesList
