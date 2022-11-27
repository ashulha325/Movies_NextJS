import { FC } from 'react'
import { useSearch } from '@/components/layout/Sidebar/Search/useSearch'
import { SearchWrapper } from '@/components/layout/Sidebar/Search/styled.search'
import SearchList from '@/components/layout/Sidebar/Search/SearchList/SearchList.'
import SearchField from '@/components/ui/search-field/SearchField'

const Search: FC = () => {
	const { isSuccess, handleSearch, data, searchTerm, isLoading } = useSearch()

	return (
		<SearchWrapper>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={data || []} />}
		</SearchWrapper>
	)
}

export default Search
