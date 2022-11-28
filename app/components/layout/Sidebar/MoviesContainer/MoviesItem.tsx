import { FC } from 'react'
import { IMovie } from '@/shared/types/movies.types'
import { getMovieUrl } from '@/config/url.config'
import Image from 'next/image'
import MaterialIcon from '@/components/ui/MaterialIcon'
import {
	MoviesItemLeft,
	MoviesItemRight,
	MoviesItemWrapeer,
} from '@/components/layout/Sidebar/MoviesContainer/Movies.styled'

const MoviesItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div>
			{movie && (
				<MoviesItemWrapeer key={movie._id} href={getMovieUrl(movie.slug)}>
					<MoviesItemLeft>
						<Image
							alt={movie.title}
							src={movie.poster}
							width={80}
							height={50}
							draggable={false}
						/>
					</MoviesItemLeft>
					<MoviesItemRight>
						<span>{movie.title}</span>
						<p>
							{movie.genres?.map((genre) => {
								return genre.name
							})}
						</p>
						<div>
							<MaterialIcon name={'MdStar'} />
							{movie.rating}
						</div>
					</MoviesItemRight>
				</MoviesItemWrapeer>
			)}
		</div>
	)
}

export default MoviesItem
