import React from "react"
import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
	const err = useRouteError()
	console.log(err)
	return (
		<div>
			<h1>Ooops!!</h1>
			<h2>Something Went Wrong!</h2>
			<h2>
				Error {err.status} {err.statusText}
			</h2>
			<h2>{err.error.message}</h2>
		</div>
	)
}

export default ErrorPage
