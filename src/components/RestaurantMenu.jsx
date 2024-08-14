import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IMG_CDN } from "../config"
import ShimmerUi from "./ShimmerUI"
const RestaurantMenu = () => {
	const [restaurantMenu, setRestaurantMenu] = useState(null)
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

	console.log(id)

	return !restaurantMenu ? (
		<ShimmerUi />
	) : (
		<div>
			<h1>{restaurantMenu.name}</h1>
			<img
				src={IMG_CDN + restaurantMenu.cloudinaryImageId}
				alt={restaurantMenu.name}
			/>
		</div>
	)
}

export default RestaurantMenu
