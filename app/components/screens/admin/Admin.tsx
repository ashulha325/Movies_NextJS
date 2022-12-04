import { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import Heading from '@/components/ui/heading/Heading'
import { Statistics } from '@/components/screens/admin/Statistics/Statistics'
import { AdminBar } from '@/components/ui/admin-bar/AdminBar'

export const Admin: FC<{}> = (props) => {
	return (
		<>
			<Meta title={'Admin panel'} />
			<AdminBar />
			<Heading title={'Some Statistics'} />
			<Statistics />
		</>
	)
}
