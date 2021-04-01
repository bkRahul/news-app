import React from 'react'
import { Header } from '../../components/Header'

export const withLayout = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	)
}
