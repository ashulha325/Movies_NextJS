import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import { IHome } from '@/components/screens/home/Home.interface'

const Home: FC<IHome> = () => {
	return (
		<>
			<Layout>Homepage</Layout>
		</>
	)
}

export default Home
