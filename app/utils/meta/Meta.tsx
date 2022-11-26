import Head from 'next/head'
import { ISeo } from '@/utils/meta/meta.interface'
import { FC } from 'react'
import { useRouter } from 'next/router'
import { siteName, titleMerge } from '@/config/seo.config'
import logoImage from '@/assets/images/logo.svg'
const Meta: FC<ISeo> = ({ title, description, image, children }) => {
	const { asPath } = useRouter()

	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			<Head>
				<title itemProp="headline">{titleMerge(title)}</title>
				{description ? (
					<>
						<meta
							itemProp={'description'}
							name={'description'}
							content={description}
						/>
						<link rel={'canonical'} href={currentUrl} />
						<meta property="og:locale" content="en" />
						<meta property="og:url" content={currentUrl} />
						<meta property="og:site_name" content={siteName} />
						<meta property="og:title" content={title} />
						<meta property="og:description" content={description} />
						<meta property="og:image" content={image || logoImage} />
					</>
				) : (
					<meta name="robots" content={'no-index, nofollow'} />
				)}
				{children}
			</Head>
		</>
	)
}

export default Meta
