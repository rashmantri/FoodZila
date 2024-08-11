import { restaurantList } from "../config"
import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import ShimmerUi from "./ShimmerUI"

function filterData(searchText, allRestaurants) {
	const filteredData = allRestaurants.filter((restaurant) =>
		restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
	)
	return filteredData
}

const Body = () => {
	const [searchText, setSearchText] = useState("")
	const [allRestaurants, setAllRestaurants] = useState("")
	const [filteredRestaurants, setFilteredRestaurants] = useState("")

	useEffect(() => {
		getRestaurants()
	}, [])

	useEffect(() => {
		if (searchText === "") {
			// If search text is empty, reset the filtered restaurants
			setFilteredRestaurants(allRestaurants)
		} else {
			// Otherwise, filter the restaurants based on the search text
			setFilteredRestaurants(filterData(searchText, allRestaurants))
		}
	}, [searchText, allRestaurants])

	async function getRestaurants() {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1529738&lng=79.0005881&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		)
		const json = await data.json()
		console.log(json)
		//Optional Chaining
		setAllRestaurants(
			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		)
		setFilteredRestaurants(
			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		)
	}

	return allRestaurants.length === 0 ? (
		<ShimmerUi />
	) : (
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
						setFilteredRestaurants(filterData(searchText, allRestaurants))
					}}>
					🔍
				</button>
			</div>
			<div className="cards">
				{filteredRestaurants.map((restaurant) => {
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
