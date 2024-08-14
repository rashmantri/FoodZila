import styles from "./Contact.module.css"

const Contact = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Contact Us</h1>
			<p className={styles.text}>
				We'd love to hear from you! Whether you have a question about our
				services, feedback, or just want to say hello, feel free to reach out.
			</p>
			<div className={styles.info}>
				<p className={styles.item}>
					<strong>Email:</strong> support@foodzila.com
				</p>
				<p className={styles.item}>
					<strong>Phone:</strong> +91-1234567890
				</p>
				<p className={styles.item}>
					<strong>Address:</strong> 123 FoodZila Street, Nagpur, India
				</p>
			</div>
			<form className={styles.form}>
				<input
					type="text"
					className={styles.input}
					placeholder="Your Name"
					required
				/>
				<input
					type="email"
					className={styles.input}
					placeholder="Your Email"
					required
				/>
				<textarea
					className={styles.textarea}
					placeholder="Your Message"
					required></textarea>
				<button
					type="submit"
					className={styles.button}>
					Send Message
				</button>
			</form>
		</div>
	)
}

export default Contact
