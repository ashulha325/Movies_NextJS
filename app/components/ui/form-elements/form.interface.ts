import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	active?: boolean
}

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	name?: string
}
