import React from "react"
import { useParams } from "react-router-dom"
import { useRestaurant } from "../utils/useRestaurant"
import ShimmerUi from "./ShimmerUI"
import { IMG_CDN } from "../config"
import styles from "./RestaurantMenu.module.css" // Import the CSS module
import MenuList from "./MenuList"
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
			<MenuList restaurantMenu={restaurantMenu} />
		</div>
	)
}

export default RestaurantMenu
