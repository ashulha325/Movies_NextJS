import Image from 'next/image'
import { FC } from 'react'

import { NavLogoLink } from '@/components/layout/Navigation/styled'

import LogoImage from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<NavLogoLink href={'/'}>
			<Image
				src={LogoImage}
				width={247}
				height={34}
				alt={'logo'}
				draggable={false}
			/>
		</NavLogoLink>
	)
}

export default Logo
