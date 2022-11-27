import { FC } from 'react'
import { IMovie } from '@/shared/types/movies.types'
import {
	SearchItem,
	SearchItemLeft,
	SearchItemRight,
	SearchListNotFound,
	SearchListWrapper,
	SearchResult,
} from '@/components/layout/Sidebar/Search/styled.search'
import { getMovieUrl } from '@/config/url.config'
import Image from 'next/image'
import MaterialIcon from '@/components/ui/MaterialIcon'
const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<SearchListWrapper>
			{movies && movies.length > 0 && (
				<SearchResult>Search Result:</SearchResult>
			)}
			{movies && movies.length ? (
				movies.map((movie) => {
					return (
						<SearchItem key={movie._id} href={getMovieUrl(movie.slug)}>
							<SearchItemLeft>
								<Image
									alt={movie.title}
									src={movie.poster}
									width={80}
									height={50}
									draggable={false}
								/>
							</SearchItemLeft>
							<SearchItemRight>
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
							</SearchItemRight>
						</SearchItem>
					)
				})
			) : (
				<SearchListNotFound>Movies not found...</SearchListNotFound>
			)}
		</SearchListWrapper>
	)
}

export default SearchList
