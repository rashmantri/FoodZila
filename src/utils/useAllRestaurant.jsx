import { useState, useEffect } from "react"
import { HOME_PAGE_URL } from "../config"

export const useAllRestaurant = () => {
	const [allRestaurants, setAllRestaurants] = useState("")
	const [filteredRestaurants, setFilteredRestaurants] = useState("")
	useEffect(() => {
		getRestaurants()
	}, [])

	async function getRestaurants() {
		const data = await fetch(HOME_PAGE_URL)
		const json = await data.json()

		const restaurants =
			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants || []

		setAllRestaurants(restaurants)
		setFilteredRestaurants(restaurants)
	}
	return {
		allRestaurants,
		filteredRestaurants,
		setFilteredRestaurants,
	}
}
