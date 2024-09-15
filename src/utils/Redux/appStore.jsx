import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"
import userSlice from "./userSlice"
const appStore = configureStore({
	reducer: {
		cart: cartSlice, // reducer of each slice
		user: userSlice,
	},
})

export default appStore
