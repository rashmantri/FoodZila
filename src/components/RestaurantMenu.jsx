import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IMG_CDN } from "../config"
import ShimmerUi from "./ShimmerUI"
import styles from "./RestaurantMenu.module.css"

const Restaurant = () => {
	const [restaurant, setRestaurantMenu] = useState(null)
	const params = useParams()
	const { id } = params
	useEffect(() => {
		getRestaurantInfo()
	}, [])

	async function getRestaurantInfo() {
		const data = await fetch(
			"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1529738&lng=79.0005881&restaurantId=" +
				id
		)
		const json = await data.json()
		console.log(json.data)
		setRestaurantMenu(json?.data?.cards[2]?.card?.card?.info)
	}

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
