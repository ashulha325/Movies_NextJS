import { FC } from 'react'
import { useQuery } from 'react-query'
import { AdminService } from '@/services/admin.service'
import SkeletonLoader from '@/components/ui/skeleton/SkeletonLoader'
import { StatisticsUsersCountWrapper } from '@/components/screens/admin/styled.admin'

const CountUsers: FC<{}> = (props) => {
	const { isLoading, data: response } = useQuery('Count User', () =>
		AdminService.getCountUsers()
	)
	return (
		<StatisticsUsersCountWrapper>
			{isLoading ? (
				<>
					<SkeletonLoader
						count={1}
						width={80}
						height={40}
						className={' mb-4'}
					/>
					<div>users</div>
				</>
			) : (
				<>
					<p>{response?.data}</p>
					<div>users</div>
				</>
			)}
		</StatisticsUsersCountWrapper>
	)
}

export default CountUsers
