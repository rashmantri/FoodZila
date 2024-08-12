const Contact = () => {
	return (
		<div className="contact-container">
			<h1 className="contact-title">Contact Us</h1>
			<p className="contact-text">
				We'd love to hear from you! Whether you have a question about our
				services, feedback, or just want to say hello, feel free to reach out.
			</p>
			<div className="contact-info">
				<p className="contact-item">
					<strong>Email:</strong> support@foodzila.com
				</p>
				<p className="contact-item">
					<strong>Phone:</strong> +91-1234567890
				</p>
				<p className="contact-item">
					<strong>Address:</strong> 123 FoodZila Street, Nagpur, India
				</p>
			</div>
			<form className="contact-form">
				<input
					type="text"
					className="form-input"
					placeholder="Your Name"
					required
				/>
				<input
					type="email"
					className="form-input"
					placeholder="Your Email"
					required
				/>
				<textarea
					className="form-textarea"
					placeholder="Your Message"
					required></textarea>
				<button
					type="submit"
					className="form-button">
					Send Message
				</button>
			</form>
		</div>
	)
}

export default Contact
