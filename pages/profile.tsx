import { NextPageAuth } from '@/shared/types/auth.types'
import Meta from '@/utils/meta/Meta'

const ProfilePage: NextPageAuth = () => {
	return (
		<>
			<Meta title={'Profile'} />
		</>
	)
}

ProfilePage.isOnlyAdmin = true

export default ProfilePage
