import React from 'react'
import { HomeTags } from './HomeTags'
import { LocalHeadlines } from './LocalHeadlines'

export const HomeContent = props => {
	return (
		<>
			<LocalHeadlines />
			<HomeTags {...props} />
		</>
	)
}
