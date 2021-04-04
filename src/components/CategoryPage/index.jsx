import React, { useEffect, useState } from 'react'
import { withGridLayout as WithGridLayout } from '../../hoc/GridLayout/withGridLayout'
import { withSectionWrap as WithSectionWrap } from '../../hoc/SectionWrap/withSectionWrap'
import { getEverything } from '../../services/newsApi'
import { getNonEmptyFields } from '../../utils'
import { Category } from '../Article/Category'
import { MaskedBg } from '../SharedComponents/MaskedBg/MaskedBg'
import { Button } from '../SharedComponents/Button/Button'
import { Tags } from '../SharedComponents/Tags/Tags'

export const CategoryPage = props => {
	const { category, source } = props.match.params

	const [page, setPage] = useState(1)
	const [pageSize, setPageSize] = useState(20)

	const [categoryArticles, setCategoryArticles] = useState([])
	let [sourceTags, setSourceTags] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		getEverything(category, source, pageSize, page)
			.then(({ articles }) => {
				console.log(articles)
				setCategoryArticles(articles)
				setSourceTags(new Set(articles.map(item => item.source.name)))
				setLoading(false)
			})
			.then()
			.catch(err => {
				console.log(err)
				setLoading(false)
			})
	}, [category, source, pageSize, page])

	return (
		<WithSectionWrap>
			{!source && <Tags tags={sourceTags} {...props} />}
			<WithGridLayout isCategory>
				{!!loading
					? 'Loading'
					: getNonEmptyFields(categoryArticles).map(article => {
							return <Category {...article} key={article.title} />
					  })}
			</WithGridLayout>
			{!loading && (
				<MaskedBg>
					<Button
						click={() => {
							setPage(page + 1)
							//							setPageSize(pageSize + 20)
						}}
						text='Show More'
					/>
				</MaskedBg>
			)}
		</WithSectionWrap>
	)
}
