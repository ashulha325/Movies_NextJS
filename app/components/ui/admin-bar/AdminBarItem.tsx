import { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import Heading from '@/components/ui/heading/Heading'
import { Statistics } from '@/components/screens/admin/Statistics/Statistics'
import { IAdminBarItem } from '@/components/ui/admin-bar/adminBar.interface'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { AdminBarWrapperItem } from '@/components/ui/admin-bar/styled.adminBar'

export const AdminBarItem: FC<{ item: IAdminBarItem }> = ({
	item: { title, link },
}) => {
	const { asPath } = useRouter()

	return (
		<AdminBarWrapperItem active={asPath === link}>
			<Link href={link}>{title}</Link>
		</AdminBarWrapperItem>
	)
}
