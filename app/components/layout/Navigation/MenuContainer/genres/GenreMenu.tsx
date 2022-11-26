import { FC } from 'react'
import { usePopularGenres } from '@/components/layout/Navigation/MenuContainer/genres/usePopularGenres'
import Menu from '@/components/layout/Navigation/MenuContainer/menu/Menu'
import SkeletonLoader from '@/components/ui/skeleton/SkeletonLoader'

const GenreMenu: FC = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<SkeletonLoader />
	) : (
		<Menu menu={{ title: 'Popular Genres', items: data || [] }} />
	)
	return null
}

export default GenreMenu
