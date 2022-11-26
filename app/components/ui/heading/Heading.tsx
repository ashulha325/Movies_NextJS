import { FC } from 'react'
import { HeadingH1 } from '@/components/ui/heading/styled'

interface IHeading {
	title: string
}

const Heading: FC<IHeading> = ({ title }) => {
	return <HeadingH1>{title}</HeadingH1>
}

export default Heading
