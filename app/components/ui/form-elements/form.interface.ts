import { ButtonHTMLAttributes } from 'react'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	active?: boolean
}

export type InputProps = {
	name: string
	register?: any
	registerType: string
	errors: any
}
