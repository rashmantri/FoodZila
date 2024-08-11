import { useState } from "react"

const Header = () => {
	const [login, setlogin] = useState("Login")
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
				<button
					className="loginLogout"
					onClick={() => {
						if (login == "Login") {
							setlogin("Logout")
						} else {
							setlogin("Login")
						}
					}}>
					{login}
				</button>
			</div>
		</div>
	)
}
export default Header
