import { useState } from "react"
import styles from "./About.module.css"

const Section = ({ title, description, isVisible, toggleVisibility }) => {
	return (
		<div className={styles.section}>
			<h2 className={styles.title}>{title}</h2>
			<button
				className={styles.toggleButton}
				onClick={toggleVisibility}>
				{isVisible ? "Hide" : "Show"}
			</button>
			{isVisible && <p className={styles.description}>{description}</p>}
		</div>
	)
}

const About = () => {
	const [visibleSection, setVisibleSection] = useState("about")

	const toggleVisibility = (section) => {
		setVisibleSection((prev) => (prev === section ? "" : section))
	}

	return (
		<div className={styles.container}>
			<Section
				title={"About Us"}
				description={
					"Welcome to FoodZila, your go-to platform for ordering delicious food from local restaurants. Our mission is to connect food lovers with their favorite restaurants, offering a wide variety of cuisines. Whether you're craving something traditional or looking to try something new, FoodZila has you covered."
				}
				isVisible={visibleSection === "about"}
				toggleVisibility={() => toggleVisibility("about")}
			/>
			<Section
				title={"Our Team"}
				description={
					"Our team consists of dedicated professionals who are passionate about food and technology. From our developers to our customer support team, everyone at FoodZila is committed to making your food ordering experience exceptional."
				}
				isVisible={visibleSection === "team"}
				toggleVisibility={() => toggleVisibility("team")}
			/>
			<Section
				title={"Careers"}
				description={
					"Are you passionate about food and technology? Join our team at FoodZila! We are always looking for talented individuals to help us enhance our platform and provide the best service to our users. Check our careers page for open positions."
				}
				isVisible={visibleSection === "career"}
				toggleVisibility={() => toggleVisibility("career")}
			/>
			<Section
				title={"Our Values"}
				description={
					"At FoodZila, we believe in integrity, innovation, and customer satisfaction. We are committed to providing a platform that not only meets but exceeds your expectations. Our values drive us to continuously improve and deliver an outstanding experience."
				}
				isVisible={visibleSection === "values"}
				toggleVisibility={() => toggleVisibility("values")}
			/>
			<Section
				title={"Contact Us"}
				description={
					"Have questions or feedback? Reach out to us through our contact page. We value your input and are here to assist you with any inquiries or concerns you may have. Your satisfaction is our top priority."
				}
				isVisible={visibleSection === "contact"}
				toggleVisibility={() => toggleVisibility("contact")}
			/>
		</div>
	)
}

export default About
