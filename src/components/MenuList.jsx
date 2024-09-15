import { useDispatch, useSelector } from "react-redux"
import {
	addItem,
	removeItem,
	incrementItem,
	decrementItem,
} from "../utils/Redux/cartSlice"
import { IMG_CDN } from "../config"
import styles from "./MenuList.module.css"

const MenuList = ({ restaurantMenu, showAddButton = true }) => {
	const dispatch = useDispatch()
	const cartItems = useSelector((state) => state.cart.items) // Get items from Redux store

	const getItemQuantity = (itemId) => {
		const item = cartItems.find((i) => i.card.info.id === itemId)

		return item ? item.quantity : 0
	}

	const handleAddItem = (item) => {
		dispatch(addItem(item))
	}

	const handleIncrementItem = (item) => {
		dispatch(incrementItem(item))
	}

	const handleDecrementItem = (item) => {
		dispatch(decrementItem(item))
	}
	const handleRemoveItem = (item) => {
		dispatch(removeItem(item))
	}

	return (
		<div className={styles.menuSection}>
			{restaurantMenu.length > 0 ? (
				restaurantMenu.map((section, index) => (
					<div
						key={index}
						className={styles.menuCategory}>
						<h2>{section.title}</h2> {/* Section title */}
						{section.items.map((item, itemIndex) => (
							<div
								key={itemIndex}
								className={styles.menuItemRow}>
								{/* Left side: Item Info */}
								<div className={styles.itemInfo}>
									<h3 className={styles.cardName}>{item.card.info.name}</h3>
									<p>Price: ₹{item.card.info.price / 100}</p>
									<p>{item.card.info.description}</p>
									<p>Quantity : {getItemQuantity(item.card.info.id)}</p>
								</div>

								{/* Right side: Image with Add/Remove Button */}
								<div className={styles.itemImageWrapper}>
									{item.card.info.imageId && (
										<img
											src={`${IMG_CDN}${item.card.info.imageId}`}
											alt={item.card.info.name}
											className={styles.menuItemImage}
										/>
									)}

									{showAddButton ? (
										getItemQuantity(item.card.info.id) === 0 ? (
											<button
												className={styles.addButton}
												onClick={() => handleAddItem(item)}>
												ADD
											</button>
										) : (
											<div className={styles.minusCounterPlus}>
												<button
													className={styles.minusPlus}
													onClick={() => handleDecrementItem(item)}>
													-
												</button>
												<p>{getItemQuantity(item.card.info.id)}</p>
												<button
													className={styles.minusPlus}
													onClick={() => handleIncrementItem(item)}>
													+
												</button>
											</div>
										)
									) : (
										<button
											className={styles.addButton}
											onClick={() => handleRemoveItem(item)}>
											REMOVE
										</button>
									)}
								</div>
							</div>
						))}
					</div>
				))
			) : (
				<p>No menu items found.</p>
			)}
		</div>
	)
}

export default MenuList
