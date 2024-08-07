import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

const Header = () => {
	return (
		<div className="header">
			<div className="title">
				<img
					alt="logo"
					className="logo"
					src="https://www.indulge.com.mt/wp-content/uploads/2017/04/indukge-me-food-App-Icon.png"
				/>
				<h1 className="title">FoodZila</h1>
			</div>
			<div className="navbar-items">
				<ul className="item-list">
					<li>Home</li>
					<li>About Us</li>
					<li>Contact</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	)
}

const restaurantList = [
	{
		info: {
			id: "572067",
			name: "Ravcapt Cafe",
			cloudinaryImageId: "tj3qzihyz7uwyadjmmqi",
			locality: "Duttawadi",
			areaName: "Vayusena Nagar",
			costForTwo: "₹150 for two",
			cuisines: ["Cafe", "Beverages", "Pizzas", "Fast Food", "Snacks"],
			avgRating: 4.2,
			veg: true,
			parentId: "167622",
			avgRatingString: "4.2",
			totalRatingsString: "10+",
			sla: {
				deliveryTime: 34,
				lastMileTravel: 0.5,
				serviceability: "SERVICEABLE",
				slaString: "30-35 mins",
				lastMileTravelString: "0.5 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-08-06 22:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "10% OFF",
				subHeader: "UPTO ₹40",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "--",
				},
			},
			ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-f6f98b1e-db56-4f7a-8d1b-81b3849fbbbb",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/ravcapt-cafe-duttawadi-vayusena-nagar-nagpur-572067",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantList Widget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "918409",
			name: "Atharva South Indian Corner",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2024/6/30/c8447b1e-a3ab-40c9-9d21-8ba9dd41abf6_918409.jpg",
			locality: "Noor Comlpex",
			areaName: "Wadi Nagpur",
			costForTwo: "₹150 for two",
			cuisines: ["South Indian"],
			avgRating: 5,
			veg: true,
			parentId: "533302",
			avgRatingString: "5.0",
			totalRatingsString: "3",
			sla: {
				deliveryTime: 33,
				lastMileTravel: 0.1,
				serviceability: "SERVICEABLE",
				slaString: "30-35 mins",
				lastMileTravelString: "0.1 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-08-06 20:30:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "10% OFF",
				subHeader: "UPTO ₹40",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			isNewlyOnboarded: true,
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "--",
				},
			},
			ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-f6f98b1e-db56-4f7a-8d1b-81b3849fbbbb",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/atharva-south-indian-corner-noor-comlpex-wadi-nagpur-nagpur-918409",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "102522",
			name: "Payal Restaurant",
			cloudinaryImageId: "bve4of86xrugki7jdarg",
			locality: "Dharampeth",
			areaName: "Dharampeth",
			costForTwo: "₹300 for two",
			cuisines: [
				"Tandoor",
				"Biryani",
				"North Indian",
				"Chinese",
				"Mughlai",
				"Beverages",
				"Desserts",
				"Seafood",
				"Snacks",
			],
			avgRating: 4.1,
			parentId: "15807",
			avgRatingString: "4.1",
			totalRatingsString: "500+",
			sla: {
				deliveryTime: 18,
				lastMileTravel: 0.4,
				serviceability: "SERVICEABLE",
				slaString: "15-20 mins",
				lastMileTravelString: "0.4 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-08-06 23:59:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "4.3",
					ratingCount: "1K+",
				},
				source: "GOOGLE",
				sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
			},
			ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-f6f98b1e-db56-4f7a-8d1b-81b3849fbbbb",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/payal-restaurant-dharampeth-nagpur-102522",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
]

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, rating }) => {
	return (
		<div className="card">
			<img
				src={
					"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
					cloudinaryImageId
				}
			/>
			<div className="card-content">
				<h2>{name}</h2>
				<h3>{cuisines}</h3>
				<h4>{rating}</h4>
			</div>
		</div>
	)
}

const Body = () => {
	return (
		<>
			<div className="cards">
				<RestaurantCard {...restaurantList[0].info} />
				<RestaurantCard {...restaurantList[1].info} />
				<RestaurantCard {...restaurantList[2].info} />
			</div>
		</>
	)
}

const Footer = () => {
	return <></>
}

const App = () => {
	return (
		<>
			<Header />
			<Body />
			<Footer />
		</>
	)
}

export default App
