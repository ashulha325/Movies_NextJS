import { FC } from 'react'
import { FavoritesNotAuth } from '@/components/layout/Sidebar/MoviesContainer/Movies.styled'

const NotAuthFavorites: FC = () => {
	return (
		<FavoritesNotAuth>For viewing favorites please authorize!</FavoritesNotAuth>
	)
}

export default NotAuthFavorites
