import React, { useEffect } from "react"
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import { useDispatch } from "react-redux"
import { auth } from "./utils/firebase.js"
import { onAuthStateChanged } from "firebase/auth"
import { addUser, removeUser } from "./utils/Redux/userSlice.jsx"

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName } = user
				dispatch(addUser({ uid, email, displayName }))
			} else {
				dispatch(removeUser())
			}
		})
	}, []) // Add dispatch as a dependency

	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export default App
