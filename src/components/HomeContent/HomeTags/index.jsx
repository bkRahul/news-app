import React from 'react'
import { tagList } from '../../../constants'
import { CategoryTitle } from '../../SharedComponents/CategoryTitle/CategoryTitle'
import { Tags } from '../../SharedComponents/Tags/Tags'
import { withSectionWrap as SectionWrapper } from '../../../hoc/SectionWrap/withSectionWrap'

export const HomeTags = props => {
	return (
		<SectionWrapper>
			<CategoryTitle title='You May Like' description='' />
			<Tags tags={tagList} type='home' {...props} />
		</SectionWrapper>
	)
}
