import React from "react"
import { useDispatch, useSelector } from "react-redux"
import MenuList from "./MenuList" // Reusing MenuList
import { clearCart } from "../utils/Redux/cartSlice"
import styles from "./Cart.module.css"
import { EMPTY_CART_IMG } from "../config"

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items)

	const cartMenu = [
		{
			title: "Your Cart",
			items: cartItems, // Use the cart items in the MenuList
		},
	]

	const dispatch = useDispatch()
	let totalPrice = 0

	const getTotalPrice = (item) => {
		if (item.card.info.price)
			totalPrice += item.quantity * (item.card.info.price / 100)
		else totalPrice += item.quantity * (item.card.info.defaultPrice / 100)
	}
	cartItems.map(getTotalPrice)
	console.log(cartItems)
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
				<div className={styles.emptyCartContainer}>
					<img
						className={styles.emptyCartImage}
						src={EMPTY_CART_IMG}
					/>
					<p className={styles.emptyCartMessage}>Your cart is empty!</p>
					<p className={styles.emptyCartMessageOne}>
						You can go to home page to view more restaurants
					</p>
				</div>
			) : (
				<MenuList
					restaurantMenu={cartMenu}
					showAddButton={true}
				/> // Reusing MenuList
			)}
			{cartItems.length != 0 && (
				<div className={styles.totalPriceDiv}>
					<p className={styles.totalPriceHeading}>Total Price:</p>
					<p className={styles.totalPrice}>{"₹" + totalPrice}</p>
				</div>
			)}
		</div>
	)
}

export default Cart
