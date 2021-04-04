import React from 'react'
import styled from 'styled-components'
import { FlexLayout } from '../../SharedStyles'

const Bg = styled(FlexLayout)`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 360px;
	overflow: hidden;
	background: linear-gradient(
		180deg,
		rgba(454, 494, 584, 0) 5%,
		rgba(254, 254, 254, 0) 5%,
		rgba(254, 254, 254, 0.6) 18%,
		rgba(254, 254, 254, 1) 44%
	);
`

export const MaskedBg = ({ children }) => {
	return <Bg>{children}</Bg>
}
