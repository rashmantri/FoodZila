// store.js
import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"
import userSlice from "./userSlice"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web
import { persistReducer, persistStore } from "redux-persist"
import { combineReducers } from "redux"
import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist"

// Create persist configurations for each slice
const cartPersistConfig = {
	key: "cart", // key to store in localStorage
	storage,
}

const userPersistConfig = {
	key: "user",
	storage,
}

// Combine reducers
const rootReducer = combineReducers({
	cart: persistReducer(cartPersistConfig, cartSlice),
	user: persistReducer(userPersistConfig, userSlice),
})

// Create the persisted reducer
const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ensure redux-persist actions aren't checked for serializability
			},
		}),
})

// Create the persistor to use in your app
export const persistor = persistStore(store)

export default store
