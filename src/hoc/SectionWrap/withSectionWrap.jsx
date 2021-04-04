import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
	position: relative;
	padding: 4em 0;
	background: ${props => props.withBg && '#f7f7f7'};
`

export const withSectionWrap = ({ children, withBg }) => {
	return <Wrapper withBg={withBg}>{children}</Wrapper>
}
