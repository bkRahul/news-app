import React from 'react'

import styled from 'styled-components'
import { LaptopWidth } from '../../components/CommonStyles'

const GridWrapper = styled(LaptopWidth)`
	display: grid;
	grid-gap: 1.5em;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-auto-rows: ${props => props.isCategory && '23px'};
`

export const withGridLayout = ({ children, isCategory }) => {
	return <GridWrapper isCategory={isCategory}>{children}</GridWrapper>
}
