import { FC } from 'react'

import { IHome } from '@/components/screens/home/Home.interface'
import Meta from '@/utils/meta/Meta'
import Heading from '@/components/ui/heading/Heading'

const Home: FC<IHome> = () => {
	return (
		<>
			<Meta title={'Watch Movies Online'} description={'Watch Movie App'} />
			<Heading title={'Watch Movies Online'} />
		</>
	)
}

export default Home
