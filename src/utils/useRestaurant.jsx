import { useState, useEffect } from "react"
import { FETCHED_API_URL } from "../config"

export const useRestaurant = (id) => {
	const [restaurant, setRestaurant] = useState(null)
	const [restaurantMenu, setRestaurantMenu] = useState([])

	useEffect(() => {
		getRestaurantInfo()
	}, [id]) // Refetch if the id changes

	async function getRestaurantInfo() {
		try {
			const data = await fetch(FETCHED_API_URL + id)
			const json = await data.json()

			// Set the restaurant information (e.g., restaurant name, rating, etc.)
			setRestaurant(json?.data?.cards[2]?.card?.card?.info)

			// Extract all cards that contain itemCards
			const allCards = findAllItemCards(
				json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []
			)

			setRestaurantMenu(allCards)
		} catch (error) {
			console.error("Error fetching restaurant data: ", error)
		}
	}

	// Function to iterate through all cards and find itemCards
	const findAllItemCards = (cards) => {
		const cardSections = []

		for (let i = 0; i < cards.length; i++) {
			const card = cards[i]?.card?.card
			if (card?.itemCards) {
				cardSections.push({
					title: card.title, // Section title (e.g., "Haldiram Specialities")
					items: card.itemCards, // The itemCards for this section
				})
			}
		}

		return cardSections
	}

	return { restaurant, restaurantMenu }
}
