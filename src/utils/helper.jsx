export function filterData(searchText, allRestaurants) {
	const filteredData = allRestaurants.filter((restaurant) =>
		restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
	)
	return filteredData
}
