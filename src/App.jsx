import { Route, Switch } from 'react-router-dom'
import { CategoryPage } from './components/CategoryPage'
import { HomeContent } from './components/HomeContent/HomeContent'
import { withLayout as WithLayout } from './hoc/Layout/withLayout'

export const App = () => {
	return (
		<WithLayout>
			<Switch>
				<Route path='/' exact component={HomeContent} />
				<Route path='/:category' exact component={CategoryPage} />
			</Switch>
		</WithLayout>
	)
}
