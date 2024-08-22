import { useState, useEffect } from "react"
import { FETCHED_API_URL } from "../config"

export const useRestaurant = (id) => {
	const [restaurant, setRestaurantMenu] = useState(null)
	useEffect(() => {
		getRestaurantInfo()
	}, [])

	async function getRestaurantInfo() {
		const data = await fetch(FETCHED_API_URL + id)
		const json = await data.json()
		console.log(json.data)
		setRestaurantMenu(json?.data?.cards[2]?.card?.card?.info)
	}
	return restaurant
}
