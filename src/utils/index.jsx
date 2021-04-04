export const getArticleTime = (data, headline) => {
	let d = new Date(data)
	let time,
		date,
		month,
		year = ''
	let months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]

	if (d.getDate() === new Date().getDate()) {
		date = 'Today'
	} else {
		date = `${d.getDate()}  ${months[d.getMonth()]}`
	}

	time = `${d.getHours()} : ${d.getMinutes()}`

	month = months[d.getMonth()]
	year = d.getFullYear()

	if (!!headline) {
		return `${date} • ${time}`
	} else {
		return `${month} ${date}, ${year}`
	}
}

export const getNonEmptyFields = data => {
	return data.map(
		({
			url,
			author,
			content,
			description,
			publishedAt,
			title,
			urlToImage,
			source,
		}) => {
			author = source.name || author
			return {
				url,
				author,
				content,
				description,
				publishedAt,
				title,
				urlToImage,
			}
		},
	)
}

export const getCleanInputs = (data = '') => {
	return data.split('.')[0].replace(/\s/g, '-')
}
