import React from 'react'
import styled from 'styled-components'

const TitleWrapper = styled.div`
	text-align: center;
	width: 100%;
	padding-bottom: 2em;
`

const Title = styled.div`
	color: #33353b;
	font-size: 2em;
	font-weight: 600;
	position: relative;
	margin-bottom: 23px;

	&:after {
		content: '';
		position: absolute;
		width: 70px;
		height: 2px;
		background: #ff7a7f;
		left: 50%;
		transform: translateX(-50%);
		bottom: -18px;
	}
`

const Description = styled.p`
	color: #0a0a0a;
	line-height: 3;
	font-size: 0.9em;
`

export const CategoryTitle = ({ title, description }) => {
	return (
		<TitleWrapper>
			<Title>{title}</Title>
			<Description>{description}</Description>
		</TitleWrapper>
	)
}
