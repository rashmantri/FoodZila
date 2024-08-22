import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IMG_CDN } from "../config"
import ShimmerUi from "./ShimmerUI"
import styles from "./RestaurantMenu.module.css"
import { useRestaurant } from "../utils/useRestaurant"

const Restaurant = () => {
	const params = useParams()
	const { id } = params
	const restaurant = useRestaurant(id)

	return !restaurant ? (
		<ShimmerUi />
	) : (
		<div className={styles.card}>
			<div>
				<h2>{restaurant.name}</h2>

				<h3 className={styles.rating}>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqcRciGUBK4Dw_yT7pRVMHrSMGFOTUHutrkg&s"
						alt="Rating"
					/>{" "}
					{restaurant.avgRating +
						"(" +
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
				/>
			</div>
		</div>
	)
}

export default Restaurant
