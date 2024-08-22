import { restaurantList } from "../config"
import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import ShimmerUi from "./ShimmerUI"
import styles from "./Body.module.css"
import { Link } from "react-router-dom"
import { filterData } from "../utils/helper"
import { useAllRestaurant } from "../utils/useAllRestaurant"
import { useOnline } from "../utils/useOnline"
const Body = () => {
	const [searchText, setSearchText] = useState("")
	const { allRestaurants, filteredRestaurants, setFilteredRestaurants } =
		useAllRestaurant()

	useEffect(() => {
		if (searchText === "") {
			// If search text is empty, reset the filtered restaurants
			setFilteredRestaurants(allRestaurants)
		} else {
			// Otherwise, filter the restaurants based on the search text
			setFilteredRestaurants(filterData(searchText, allRestaurants))
		}
	}, [searchText, allRestaurants])

	const isOnline = useOnline()
	if (!isOnline) {
		return <h1>You are offline</h1>
	}

	return allRestaurants.length === 0 ? (
		<ShimmerUi />
	) : (
		<>
			<div className={styles.searchBar}>
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
			<div className={styles.cards}>
				{filteredRestaurants.map((restaurant) => {
					return (
						<Link
							to={"/restaurant/" + restaurant.info.id}
							key={restaurant.info.id}
							className={styles.noUnderline}>
							<RestaurantCard {...restaurant.info} />
						</Link>
					)
				})}
			</div>
		</>
	)
}

export default Body
