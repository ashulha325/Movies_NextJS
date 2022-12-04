import { FC } from 'react'
import { useQuery } from 'react-query'
import { movieService } from '@/services/movie.service'
import { IMovie } from '@/shared/types/movies.types'
import Link from 'next/link'
import { getMovieUrl } from '@/config/url.config'
import SkeletonLoader from '@/components/ui/skeleton/SkeletonLoader'
import Image from 'next/image'
import { StatisticsPopularCountWrapper } from '@/components/screens/admin/styled.admin'
const PopularMovies: FC = () => {
	const { isLoading, data: movie } = useQuery(
		'Most Popular Count',
		() => movieService.getMostPopularMovies(),
		{
			select: (data): IMovie => data[0],
		}
	)

	return (
		<StatisticsPopularCountWrapper>
			<p>The Most Popular Movie</p>
			{isLoading ? (
				<SkeletonLoader height={48} width={100 + '%'} />
			) : (
				movie && (
					<>
						<span>Opened {movie.countOpened} times</span>
						<Link href={getMovieUrl(movie.slug)}>
							<Image
								src={movie.poster}
								alt={movie.title}
								width={150}
								height={240}
								unoptimized={true}
							/>
						</Link>
					</>
				)
			)}
		</StatisticsPopularCountWrapper>
	)
}

export default PopularMovies
