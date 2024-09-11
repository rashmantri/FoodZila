import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
const appStore = configureStore({
	reducer: {
		cart: cartReducer, // reducer of each slice
	},
})

export default appStore
