import React, { useEffect, useState } from 'react'
import { withGridLayout as WithGridLayout } from '../../../hoc/GridLayout/withGridLayout'
import { getLocalHeadlines, getLocation } from '../../../services/newsApi'
import { getNonEmptyFields } from '../../../utils'
import { LocalHeadline } from '../../Article/LocalHeadline'
import { CategoryTitle } from '../../SharedComponents/CategoryTitle/CategoryTitle'

export const LocalHeadlines = () => {
	const [localHeadlines, setLocalHeadlines] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		getLocation()
			.then(country => getLocalHeadlines(country))
			.then(({ articles }) => {
				setLocalHeadlines(articles)
				setLoading(false)
			})
			.catch(err => {
				console.log(err)
				setLoading(false)
			})
	}, [])
	return (
		<>
			<CategoryTitle
				title='Top Local Picks'
				description="Get the latest news on what's happening in your country"
			/>
			<WithGridLayout>
				{!!loading
					? 'Loading'
					: getNonEmptyFields(localHeadlines)
							.slice(0, 7)
							.map(article => {
								return (
									<LocalHeadline {...article} key={article.title} />
								)
							})}
			</WithGridLayout>
		</>
	)
}
