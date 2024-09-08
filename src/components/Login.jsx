// Login.js
import React, { useState } from "react"
import styles from "./Login.module.css" // Importing the CSS module

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		// Handle form submission logic here
		console.log(`Email: ${email}, Password: ${password}`)
	}

	return (
		<div className={styles.container}>
			<form
				className={styles.loginForm}
				onSubmit={handleSubmit}>
				<h2 className={styles.title}>Login</h2>
				<div className={styles.formGroup}>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className={styles.input}
						required
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className={styles.input}
						required
					/>
				</div>
				<button
					type="submit"
					className={styles.button}>
					Login
				</button>
			</form>
		</div>
	)
}

export default Login
