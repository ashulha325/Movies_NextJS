import { ChangeEvent, useState } from 'react'
import useDebounce from '@/hooks/useDebounce'
import { useQuery } from 'react-query'
import { movieService } from '@/services/movie.service'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const deboucedSearch = useDebounce(searchTerm, 500)

	const { isSuccess, data, isLoading } = useQuery(
		['search movie list', deboucedSearch],
		() => {
			return movieService.getMovies(deboucedSearch)
		},
		{
			select: ({ data }) => {
				return [...data].splice(0, 4)
			},
			enabled: !!deboucedSearch,
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return { isSuccess, handleSearch, data, searchTerm, isLoading }
}
