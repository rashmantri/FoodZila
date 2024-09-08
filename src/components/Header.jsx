import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styles from "./Header.module.css"
import Login from "./Login"

const Header = () => {
	const [login, setLogin] = useState("Login")
	const navigate = useNavigate() // Using useNavigate hook

	const handleButtonClick = () => {
		if (login === "Login") {
			setLogin("Logout")
			navigate("/login") // Navigate to the login route
		} else {
			setLogin("Login")
			// You can redirect to another page or perform logout actions here
		}
	}

	return (
		<div className={styles.hdr}>
			<div className={styles.ttl}>
				<img
					alt="logo"
					className={styles.lg}
					src="https://www.indulge.com.mt/wp-content/uploads/2017/04/indukge-me-food-App-Icon.png"
				/>
				<h1 className={styles.ttl}>FoodZila</h1>
			</div>
			<div className={styles.nav}>
				<ul className={styles.lst}>
					<li>
						<Link
							to="/"
							className={styles.noUnderline}>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/about"
							className={styles.noUnderline}>
							About Us
						</Link>
					</li>
					<li>
						<Link
							to="/contact"
							className={styles.noUnderline}>
							Contact
						</Link>
					</li>
					<li>
						<Link
							to="/cart"
							className={styles.noUnderline}>
							Cart
						</Link>
					</li>
				</ul>
				<button
					className={styles.btn}
					onClick={handleButtonClick}>
					{login}
				</button>
			</div>
		</div>
	)
}

export default Header
