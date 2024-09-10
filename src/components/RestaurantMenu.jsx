import React from "react"
import { useParams } from "react-router-dom"
import { useRestaurant } from "../utils/useRestaurant"
import ShimmerUi from "./ShimmerUI"
import { IMG_CDN } from "../config"
import styles from "./RestaurantMenu.module.css" // Import the CSS module

const RestaurantMenu = () => {
	const { id } = useParams()
	const { restaurant, restaurantMenu } = useRestaurant(id)

	if (!restaurant) return <ShimmerUi />

	return (
		<div className={styles.restaurantPage}>
			{/* Restaurant Info */}
			<div className={styles.card}>
				<div>
					<h2>{restaurant.name}</h2>
					<h3 className={styles.rating}>
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqcRciGUBK4Dw_yT7pRVMHrSMGFOTUHutrkg&s"
							alt="Rating"
							className={styles.ratingImage}
						/>{" "}
						{restaurant.avgRating +
							" (" +
							restaurant.totalRatingsString +
							")" +
							"." +
							restaurant.costForTwoMessage}
					</h3>
					<h3 className={styles.cuisines}>{restaurant.cuisines.join(", ")}</h3>
					<div className={styles.deliveryTime}>
						{"Delivery Time: " + restaurant.sla.minDeliveryTime} min -{" "}
						{restaurant.sla.maxDeliveryTime} min
					</div>
					<div className={styles.address}>
						{"Address: " + restaurant.labels[1].message}
					</div>
				</div>
				<div>
					<img
						src={IMG_CDN + restaurant.cloudinaryImageId}
						alt={restaurant.name}
						className={styles.restaurantImage}
					/>
				</div>
			</div>

			{/* Display Menu Sections */}
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
										) : (
											""
										)}
										{item.card.info.ratings?.aggregatedRating?.rating ? (
											<p>
												{item.card.info.ratings?.aggregatedRating?.rating}
												<img
													src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqcRciGUBK4Dw_yT7pRVMHrSMGFOTUHutrkg&s"
													alt="Rating"
													className={styles.ratingImage}
												/>{" "}
												({item.card.info.ratings?.aggregatedRating?.ratingCount}
												)
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

									{/* Right side: Image with Add Button */}
									<div className={styles.itemImageWrapper}>
										{item.card.info.imageId && (
											<img
												src={`${IMG_CDN}${item.card.info.imageId}`}
												alt={item.card.info.name}
												className={styles.menuItemImage}
											/>
										)}
										<button className={styles.addButton}>- ADD +</button>
									</div>
								</div>
							))}
						</div>
					))
				) : (
					<p>No menu items found.</p>
				)}
			</div>
		</div>
	)
}

export default RestaurantMenu
