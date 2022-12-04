import { FC } from 'react'
import CountUsers from '@/components/screens/admin/Statistics/Count-users'
import PopularMovies from '@/components/screens/admin/Statistics/PopularMovies'
import { StatisticsWrapper } from '@/components/screens/admin/styled.admin'

export const Statistics: FC<{}> = (props) => {
	return (
		<StatisticsWrapper>
			<CountUsers />
			<PopularMovies />
		</StatisticsWrapper>
	)
}
