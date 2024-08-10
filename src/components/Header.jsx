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
export default Header
