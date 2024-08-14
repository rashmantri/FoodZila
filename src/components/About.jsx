import styles from "./About.module.css"

const About = () => {
	return (
		<div className={styles.aboutContainer}>
			<h1 className={styles.aboutTitle}>About Us</h1>
			<p className={styles.aboutText}>
				Welcome to FoodZila, your go-to platform for ordering delicious food
				from local restaurants. We are dedicated to bringing you the best dining
				experiences right to your doorstep.
			</p>
			<p className={styles.aboutText}>
				Our mission is to connect food lovers with their favorite restaurants,
				offering a wide variety of cuisines. Whether you're craving something
				traditional or looking to try something new, FoodZila has you covered.
			</p>
			<p className={styles.aboutText}>
				Our platform is easy to use, ensuring a seamless and enjoyable ordering
				process. We value your satisfaction and strive to provide excellent
				service with every order.
			</p>
			<p className={styles.aboutText}>
				Thank you for choosing FoodZila. We hope to make your food ordering
				experience unforgettable!
			</p>
		</div>
	)
}

export default About
