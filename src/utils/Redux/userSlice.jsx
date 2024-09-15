import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
	name: "cart",
	initialState: null,
	reducers: {
		addUser: (state, action) => {
			return action.payload //the state will become action.payload
		},
		removeUser: (state, action) => {
			return null
		},
	},
})
export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer
