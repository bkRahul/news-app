import React from 'react'
import styled from 'styled-components'

import { LocalHeadlines } from './LocalHeadlines'

const HomeWrapper = styled.div`
	padding: 3em;
	background: #f7f7f7;
`

export const HomeContent = () => {
	return (
		<HomeWrapper>
			<LocalHeadlines />
		</HomeWrapper>
	)
}
