import axios from '../axios-news'

const apiKey = process.env.REACT_APP_NEWS_API_KEY

export const getLocation = async () => {
	const result = await axios
		.get('https://ipapi.co/json/')
		.then(({ data }) => data.country)
		.catch(err => console.log(err))
	return result
}

export const getLocalHeadlines = async country => {
	const result = await axios
		.get(`top-headlines/?country=${country}&apiKey=${apiKey}`)
		.then(({ data }) => data)
		.catch(err => console.log(err))
	return result
}

export const getHeadlines = async (country, q, page, pageSize) => {
	const result = await axios
		.get(
			`top-headlines/?country=${country}&q=${q}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`,
		)
		.then(({ data }) => data)
		.catch(err => console.log(err))
	return result
}

export const getEverything = async (q, source = '', page, pageSize) => {
	const result = await axios
		.get(
			`everything/?q=${q}&sources=${source}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`,
		)
		.then(({ data }) => data)
		.catch(err => console.log(err))
	return result
}

export const getSources = async (q, language) => {
	const result = await axios
		.get(`sources/?q=${q}&language=${language}&apiKey=${apiKey}`)
		.then(({ data }) => data)
		.catch(err => console.log(err))
	return result
}
