import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		addItem: (state, action) => {
			const item = action.payload
			const existingItem = state.items.find(
				(i) => i.card.info.id === item.card.info.id
			)
			if (existingItem) {
				existingItem.quantity += 1
			} else {
				state.items.push({ ...item, quantity: 1 })
			}
		},
		incrementItem: (state, action) => {
			const itemId = action.payload.card.info.id
			const existingItem = state.items.find((i) => i.card.info.id === itemId)
			if (existingItem) {
				existingItem.quantity += 1
			}
		},
		decrementItem: (state, action) => {
			const itemId = action.payload.card.info.id
			const existingItem = state.items.find((i) => i.card.info.id === itemId)
			if (existingItem && existingItem.quantity > 1) {
				existingItem.quantity -= 1
			} else {
				state.items = state.items.filter((item) => item.card.info.id !== itemId)
			}
		},
		removeItem: (state, action) => {
			const itemId = action.payload.card.info.id
			state.items = state.items.filter((item) => item.card.info.id !== itemId)
		},
		clearCart: (state) => {
			state.items = []
		},
	},
})

export const { addItem, incrementItem, decrementItem, removeItem, clearCart } =
	cartSlice.actions
export default cartSlice.reducer
