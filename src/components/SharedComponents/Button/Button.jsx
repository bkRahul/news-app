import React from 'react'
import styled from 'styled-components'
import { FaAngleDown } from 'react-icons/fa'
import { FlexLayout } from '../../SharedStyles'

const Wrapper = styled(FlexLayout)`
	color: #ff7a7f;
	font-weight: 500;
	border: 1px solid #ff7a7f;
	border-radius: 24px;
	padding: 0.5rem 1rem;
	line-height: 1rem;
	cursor: pointer;
	&:hover {
		opacity: 0.8;
	}
`
const DownIcon = styled(FaAngleDown)`
	margin-left: 0.4rem;
	margin-top: 0.2rem;
`

export const Button = ({ text, click }) => {
	return (
		<Wrapper onClick={click}>
			{text}
			<DownIcon />
		</Wrapper>
	)
}
