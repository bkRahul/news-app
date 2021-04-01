import React from 'react'

import styled from 'styled-components'
import { LaptopWidth } from '../../components/CommonStyles'

const GridWrapper = styled(LaptopWidth)`
	display: grid;
	grid-gap: 1.5em;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, auto);
`

export const withGridLayout = ({ children }) => {
	return <GridWrapper>{children}</GridWrapper>
}
