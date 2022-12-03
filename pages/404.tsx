import { NextPageAuth } from '@/shared/types/auth.types'
import Meta from '@/utils/meta/Meta'
import Link from 'next/link'
import { Button } from '@/components/ui/form-elements/Button'

const ProfilePage: NextPageAuth = () => {
	return (
		<>
			<Meta title={'404'} />
			<h1 style={{ color: 'white' }}>404 - This page could not be found.</h1>
			<Link href="/">
				<Button>Go back home</Button>
			</Link>
		</>
	)
}

ProfilePage.isOnlyAdmin = true

export default ProfilePage
