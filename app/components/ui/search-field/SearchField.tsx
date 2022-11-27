import React, { ChangeEvent, FC } from 'react'
import { SearchFieldWrapper } from '@/components/ui/search-field/SearchFied.styled'
import MaterialIcon from '@/components/ui/MaterialIcon'

interface ISearchField {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<ISearchField> = ({ searchTerm, handleSearch }) => {
	return (
		<SearchFieldWrapper>
			<input
				type="text"
				placeholder={'Search'}
				value={searchTerm}
				onChange={handleSearch}
			/>
			<MaterialIcon name="MdSearch" />
		</SearchFieldWrapper>
	)
}

export default SearchField
