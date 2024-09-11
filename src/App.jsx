import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "./utils/Redux/appStore"

const App = () => {
	return (
		<Provider store={appStore}>
			<>
				<Header />
				<Outlet />
				<Footer />
			</>
		</Provider>
	)
}

export default App
