import { Route, Switch } from 'react-router-dom'

import { Home } from './containers/HomePage'
import { withLayout as WithLayout } from './hoc/Layout/withLayout'

export const App = () => {
	return (
		<WithLayout>
			<Switch>
				<Route path='/' exact component={Home} />
			</Switch>
		</WithLayout>
	)
}
