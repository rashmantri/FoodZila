import { useDispatch } from "react-redux"
import { addItem, removeItem } from "../utils/Redux/cartSlice"
import { IMG_CDN } from "../config"
import styles from "./MenuList.module.css"

const MenuList = ({ restaurantMenu, showAddButton = true }) => {
	const dispatch = useDispatch()

	const handleAddItem = (item) => {
		// Dispatch an action to add the item to the cart
		dispatch(addItem(item))
	}
	const handleRemoveItem = (item) => {
		// Dispatch an action to remove the item from the cart
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
						{/* Iterate over each itemCard in the section */}
						{section.items.map((item, itemIndex) => (
							<div
								key={itemIndex}
								className={styles.menuItemRow}>
								{/* Left side: Item Info */}
								<div className={styles.itemInfo}>
									<h3 className={styles.cardName}>{item.card.info.name}</h3>

									{item.card.info.price ? (
										<p>Price: ₹{item.card.info.price / 100}</p>
									) : item.card.info.finalPrice ? (
										<p>Price: ₹{item.card.info.finalPrice / 100}</p>
									) : (
										" "
									)}
									{item.card.info.ratings?.aggregatedRating?.rating ? (
										<p>
											{item.card.info.ratings?.aggregatedRating?.rating}
											<img
												src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqcRciGUBK4Dw_yT7pRVMHrSMGFOTUHutrkg&s"
												alt="Rating"
												className={styles.ratingImage}
											/>{" "}
											({item.card.info.ratings?.aggregatedRating?.ratingCount})
										</p>
									) : (
										""
									)}
									<p>{item.card.info.description}</p>
									{/* Check if the dish is Veg or Non-Veg */}
									{item.card.info.isVeg === 1 ? (
										<img
											src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png"
											alt="Veg"
											className={styles.vegIcon}
										/>
									) : (
										<img
											src="https://freesvg.org/img/1531813245.png"
											alt="Non-Veg"
											className={styles.nonVegIcon}
										/>
									)}
								</div>

								{/* Right side: Image with optional Add Button */}
								<div className={styles.itemImageWrapper}>
									{item.card.info.imageId && (
										<img
											src={`${IMG_CDN}${item.card.info.imageId}`}
											alt={item.card.info.name}
											className={styles.menuItemImage}
										/>
									)}

									{showAddButton ? (
										<button
											className={styles.addButton}
											onClick={() => handleAddItem(item)}>
											ADD +
										</button>
									) : (
										<button
											className={styles.addButton}
											onClick={() => handleRemoveItem(item)}>
											REMOVE -
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
