import React from 'react'
import { Header } from '../../components/Header'

export const withLayout = ({ children }) => {
	return (
		<div className='App'>
			<Header />
			<main>{children}</main>
		</div>
	)
}
