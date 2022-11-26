import { TypeMaterialIconName } from '@/shared/types/icons.types'

export interface IGenre {
	_id: string
	slug: string
	name: string
	description: string
	icon: TypeMaterialIconName
}
