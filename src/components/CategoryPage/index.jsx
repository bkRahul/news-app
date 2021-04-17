import React, { useEffect, useState } from 'react'
import { withGridLayout as WithGridLayout } from '../../hoc/GridLayout/withGridLayout'
import { withSectionWrap as WithSectionWrap } from '../../hoc/SectionWrap/withSectionWrap'
import { getEverything } from '../../services/newsApi'
import { getCleanInputs, getNonEmptyFields } from '../../utils'
import { Category } from '../Article/Category'
import { MaskedBg } from '../SharedComponents/MaskedBg/MaskedBg'
import { Button } from '../SharedComponents/Button/Button'
import { Tags } from '../SharedComponents/Tags/Tags'
import { MAX_ARTICLES, PAGE_SIZE } from '../../constants'

export const CategoryPage = props => {
	let { category, source } = props.match.params
	console.log({ category, source })
	category = getCleanInputs(category)
	source = getCleanInputs(source)

	const [page, setPage] = useState(1)
	const [count, setCount] = useState(PAGE_SIZE)
	const [categoryArticles, setCategoryArticles] = useState([])
	let [sourceTags, setSourceTags] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		getEverything(category, source, page)
			.then(({ articles }) => {
				console.log(articles)
				setCategoryArticles(categoryArticles => [
					...categoryArticles,
					...articles,
				])
				setSourceTags(new Set(articles.map(item => item.source.name)))
				setLoading(false)
			})
			.catch(err => {
				console.log(err)
				setLoading(false)
			})
	}, [category, source, page])

	return (
		<WithSectionWrap>
			{!source && <Tags tags={sourceTags} {...props} />}
			<WithGridLayout isCategory>
				{getNonEmptyFields(categoryArticles).map(article => {
					return <Category {...article} key={article.title} />
				})}
			</WithGridLayout>
			{!loading && count <= MAX_ARTICLES && (
				<MaskedBg>
					<Button
						click={() => {
							setPage(page + 1)
							setCount(count + PAGE_SIZE)
						}}
						text='Show More'
					/>
				</MaskedBg>
			)}
		</WithSectionWrap>
	)
}
