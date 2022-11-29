import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const LayoutWrapper = styled(motion.div)`
	padding: 0 40px;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	min-height: 100vh;
	opacity: 1;
`
export const MainWrapper = styled.div`
	padding-top: 40px;
	width: 100%;
`
export const Content = styled.div`
	max-width: 90%;
	margin-left: auto;
	margin-right: auto;
`

interface IProps {
	loaded: boolean
}
