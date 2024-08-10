import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"

const App = () => {
	return (
		<>
			<Header />
			<Body />
			<Footer />
		</>
	)
}

export default App
