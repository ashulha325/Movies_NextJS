import { useQuery } from 'react-query'
import { genreService } from '@/services/genre.service'
import { IMenuItem } from '@/components/layout/Navigation/MenuContainer/menu/menu.interface'
import { getGenreUrl } from '@/config/url.config'

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genre menu',
		() => genreService.getPopularGenres(),
		{
			select: ({ data }) => {
				return data
					.map(
						(genre) =>
							({
								icon: genre.icon,
								link: getGenreUrl(genre.slug),
								title: genre.name,
								description: genre.description,
							} as IMenuItem)
					)
					.splice(0, 4)
				//error
			},
			onError(error) {
				//error
			},
		}
	)

	return queryData
}
