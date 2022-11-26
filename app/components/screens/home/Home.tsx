import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import { IHome } from '@/components/screens/home/Home.interface'
import Meta from '@/utils/meta/Meta'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/skeleton/SkeletonLoader'

const Home: FC<IHome> = () => {
	return (
		<>
			<Meta
				title={'Watch Movies Online'}
				description={'Watch Movie App'}
			></Meta>
			<Heading title={'Watch Movies Online'} />
		</>
	)
}

export default Home
