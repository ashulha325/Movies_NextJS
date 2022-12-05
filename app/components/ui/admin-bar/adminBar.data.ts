import { IAdminBarItem } from '@/components/ui/admin-bar/adminBar.interface'
import { getAdminUrl } from '@/config/url.config'

export const adminNavItems: IAdminBarItem[] = [
	{
		title: 'Statistics',
		link: '/manage',
	},
	{
		title: 'Users',
		link: '/manage/user',
	},
	{
		title: 'Movies',
		link: '/manage/movies',
	},
	{
		title: 'Actors',
		link: '/manage/actors',
	},
	{
		title: 'Genres',
		link: '/manage/genres',
	},
]
