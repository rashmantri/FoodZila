import React from "react"
import { useDispatch, useSelector } from "react-redux"
import MenuList from "./MenuList" // Reusing MenuList
import { clearCart } from "../utils/Redux/cartSlice"
import styles from "./Cart.module.css"

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items)

	const cartMenu = [
		{
			title: "Your Cart",
			items: cartItems, // Use the cart items in the MenuList
		},
	]

	const dispatch = useDispatch()

	return (
		<div className={styles.cartContainer}>
			<div className={styles.cartHeader}>
				<h1 className={styles.cartTitle}>Cart</h1>
				<button
					onClick={() => {
						dispatch(clearCart())
					}}
					className={styles.clearCartButton}>
					Clear Cart
				</button>
			</div>

			{cartItems.length === 0 ? (
				<p className={styles.emptyCartMessage}>Your cart is empty!</p>
			) : (
				<MenuList
					restaurantMenu={cartMenu}
					showAddButton={false}
				/> // Reusing MenuList
			)}
		</div>
	)
}

export default Cart
