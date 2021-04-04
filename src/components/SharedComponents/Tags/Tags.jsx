import React from 'react'
import styled from 'styled-components'
import { getCleanInputs } from '../../../utils'

const TagsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	text-align: ${props => props.type === 'home' && 'center'};
	max-width: ${props => (props.type === 'home' ? '900px' : '1170px')};
	margin: 0 auto;
	padding-bottom: 2rem;
`
const Title = styled.div`
	font-size: 18px;
	position: relative;
	font-weight: 700;
	color: #000000;
	padding-bottom: 10px;
	white-space: nowrap;
	transform: translateY(3px);
	&:after {
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 50px;
		height: 2px;
		background: #ff7a7f;
		content: '';
	}
`

const TagLink = styled.div`
	cursor: pointer;
	display: inline-block;
	line-height: 2rem;
	font-size: 0.8em;
	text-transform: ${props =>
		props.type === 'home' ? 'uppercase' : 'capitalize'};
	letter-spacing: ${props => props.type === 'home' && ' 0.2em'};
	padding: 0 1rem;
	margin: ${props =>
		props.type === 'home' ? ' 0 1rem 1rem 0' : '0 1rem 0 0'};
	border-radius: ${props => (props.type === 'home' ? '3px' : '15px')};
	background: #e2e2e2;
	text-decoration: none;
	color: #333333;
	position: relative;
	&:hover {
		background: #ff7a7f;
		color: #fff;
	}
`

export const Tags = ({ tags, type, history, match }) => {
	tags = type !== 'home' ? [...tags].slice(0, 7) : [...tags]

	return (
		<TagsWrapper type={type}>
			{type !== 'home' && <Title>Top Publications</Title>}
			<div>
				{tags.map(item => (
					<TagLink
						type={type}
						onClick={() => {
							type === 'home'
								? history.push(
										`${getCleanInputs(item).toLowerCase()}`,
								  )
								: history.push(
										`${match.url}/${getCleanInputs(
											item,
										).toLowerCase()}`,
								  )
						}}
						key={item}
					>
						{item}
					</TagLink>
				))}
			</div>
		</TagsWrapper>
	)
}
