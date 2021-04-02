import React from 'react'
import styled from 'styled-components'
import { tagList } from '../../../constants'
import { CategoryTitle } from '../../SharedComponents/CategoryTitle/CategoryTitle'
import { withSectionWrap as SectionWrapper } from '../../../hoc/SectionWrap/withSectionWrap'
import { Link } from 'react-router-dom'

const TagCloud = styled.section`
	text-align: center;
	max-width: 900px;
	margin: 0 auto;
`

const TagLink = styled(Link)`
	display: inline-block;
	line-height: 2rem;
	font-size: 0.8em;
	text-transform: uppercase;
	letter-spacing: 0.2em;
	padding: 0 1rem;
	margin: 0 1rem 1rem 0;
	border-radius: 3px;
	background: #e2e2e2;
	text-decoration: none;
	color: #333333;
	position: relative;
`

export const Tags = () => {
	return (
		<SectionWrapper>
			<CategoryTitle title='You May Like' description='' />
			<TagCloud>
				{tagList.map(item => (
					<TagLink to={`/${item}`} key={item}>
						{item}
					</TagLink>
				))}
			</TagCloud>
		</SectionWrapper>
	)
}
