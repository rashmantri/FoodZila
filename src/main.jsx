import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./components/About.jsx"
import ErrorPage from "./components/ErrorPage.jsx"
import Body from "./components/Body.jsx"
import Contact from "./components/Contact.jsx"
import Login from "./components/Login.jsx"
import RestaurantMenu from "./components/RestaurantMenu.jsx"

const Cart = lazy(() => import("./components/Cart.jsx"))

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Body />,
				errorElement: <ErrorPage />,
			},
			{
				path: "/about",
				element: <About />,
				errorElement: <ErrorPage />,
			},
			{
				path: "/contact",
				element: <Contact />,
				errorElement: <ErrorPage />,
			},
			{
				path: "/restaurant/:id",
				element: <RestaurantMenu />,
				errorElement: <ErrorPage />,
			},
			{
				path: "/cart",
				element: (
					<Suspense>
						<Cart />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: "/login",
				element: <Login />,
				errorElement: <ErrorPage />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={appRouter} />
	</React.StrictMode>
)
