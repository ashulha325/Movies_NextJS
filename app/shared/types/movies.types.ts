import { TypeMaterialIconName } from '@/shared/types/icons.types'

export interface IGenre {
	_id: string
	slug: string
	name: string
	description: string
	icon: TypeMaterialIconName
}

interface IParameters {
	year: number
	duration: string
	country: string
}

interface IActor {
	_id: string
	photo: string
	name: string
	slug: string
	countMovies: number
}

export interface IMovie {
	_id: string
	poster: string
	bigPoster: string
	title: string
	parameters: IParameters
	genres: IGenre[]
	actors: IActor[]
	countOpened: number
	videoUrl: string
	rating: number
	slug: string
}
