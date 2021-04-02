import React, { useEffect, useState } from 'react'
import { withGridLayout as WithGridLayout } from '../../hoc/GridLayout/withGridLayout'
import { withSectionWrap as WithSectionWrap } from '../../hoc/SectionWrap/withSectionWrap'
import { getEverything } from '../../services/newsApi'
import { getNonEmptyFields } from '../../utils'
import { Category } from '../Article/Category'

export const CategoryPage = props => {
	const { category } = props.match.params

	const [categoryArticles, setCategoryArticles] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		getEverything(category)
			.then(({ articles }) => {
				console.log(articles)
				setCategoryArticles(articles)
				setLoading(false)
			})
			.catch(err => {
				console.log(err)
				setLoading(false)
			})
	}, [category])

	return (
		<WithSectionWrap>
			<WithGridLayout isCategory>
				{!!loading
					? 'Loading'
					: getNonEmptyFields(categoryArticles).map(article => {
							return <Category {...article} key={article.title} />
					  })}
			</WithGridLayout>
		</WithSectionWrap>
	)
}
