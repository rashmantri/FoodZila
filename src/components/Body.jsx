import { restaurantList } from "../config"
import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"

function filterData(searchText, restaurants) {
	const filteredData = restaurants.filter((restaurant) =>
		restaurant.info.name.includes(searchText)
	)
	return filteredData
}

const Body = () => {
	const [searchText, setSearchText] = useState("")
	const [restaurants, setRestaurants] = useState(restaurantList)

	useEffect(() => {
		getRestaurants()
	}, [])

	async function getRestaurants() {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1529738&lng=79.0005881&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		)
		const json = await data.json()
		console.log(json)
		//Optional Chaining
		setRestaurants(
			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		)
	}

	return (
		<>
			<div className="searchBar">
				<input
					type="text"
					placeholder="Search..."
					value={searchText}
					onChange={(e) => {
						setSearchText(e.target.value)
					}}
				/>
				<button
					type="button"
					onClick={() => {
						//Filter the data
						setRestaurants(filterData(searchText, restaurants))
					}}>
					🔍
				</button>
			</div>
			<div className="cards">
				{restaurants.map((restaurant) => {
					return (
						<RestaurantCard
							{...restaurant.info}
							key={restaurant.info.id}
						/>
					)
				})}
			</div>
		</>
	)
}

export default Body
