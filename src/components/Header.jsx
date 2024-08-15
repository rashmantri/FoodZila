import { useState } from "react"
import { Link } from "react-router-dom"
import styles from "./Header.module.css"

const Header = () => {
	const [login, setLogin] = useState("Login")
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
					<li>Cart</li>
				</ul>
				<button
					className={styles.btn}
					onClick={() => {
						if (login === "Login") {
							setLogin("Logout")
						} else {
							setLogin("Login")
						}
					}}>
					{login}
				</button>
			</div>
		</div>
	)
}

export default Header
