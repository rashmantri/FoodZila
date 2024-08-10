import { IMG_CDN } from "../config"
const RestaurantCard = ({ name, cloudinaryImageId, cuisines, rating }) => {
	return (
		<div className="card">
			<img src={IMG_CDN + cloudinaryImageId} />
			<div className="card-content">
				<h2>{name}</h2>
				<h3
					style={{
						whiteSpace: "nowrap",
						overflowX: "hidden",
						textOverflow: "ellipsis",
					}}>
					{cuisines.join(", ")}
				</h3>
				<h4>{rating}</h4>
			</div>
		</div>
	)
}

export default RestaurantCard
