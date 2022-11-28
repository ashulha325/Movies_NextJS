import { FC } from 'react'
import { useQuery } from 'react-query'
import { movieService } from '@/services/movie.service'
import SkeletonLoader from '@/components/ui/skeleton/SkeletonLoader'
import MoviesList from '@/components/layout/Sidebar/MoviesContainer/MoviesList'

const PopularMovies: FC = () => {
	const { data, isLoading } = useQuery('popular movies with sidebar', () =>
		movieService.getMostPopularMovies()
	)
	return isLoading ? (
		<div>
			<SkeletonLoader count={3} className={'h-28 mb-4'} />
		</div>
	) : (
		<>
			{data && data.length && (
				<MoviesList
					movies={[...data]?.splice(0, 3) || []}
					title={'Popular Movies'}
					link={'/trending'}
				/>
			)}
		</>
	)
}

export default PopularMovies
