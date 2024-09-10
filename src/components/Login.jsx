// Login.js
import React, { useState } from "react"
import styles from "./Login.module.css" // Importing the CSS module
import checkValidData from "../utils/validate"

const Login = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [isLoginForm, setIsLoginForm] = useState(true)
	const [displayError, setDisplayError] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault() //To prevent reloading on submitting the form
		//validation
		const message = checkValidData(name, email, password)
		console.log(message)
		setDisplayError(message)
		console.log(`Email: ${email}, Password: ${password}`)
	}

	const toggleSignInForm = () => {
		setIsLoginForm(!isLoginForm)
	}

	return (
		<div className={styles.container}>
			<form
				className={styles.loginForm}
				onSubmit={handleSubmit}>
				<h2 className={styles.title}>{isLoginForm ? "Login" : "Sign Up"}</h2>
				{isLoginForm ? (
					""
				) : (
					<div className={styles.formGroup}>
						<input
							type="name"
							id="name"
							placeholder="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className={styles.input}
							required
						/>
					</div>
				)}

				<div className={styles.formGroup}>
					<input
						type="text"
						id="email"
						placeholder="Email Address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className={styles.input}
						required
					/>
				</div>
				<div className={styles.formGroup}>
					<input
						type="password"
						id="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className={styles.input}
						required
					/>
				</div>

				<p className={styles.error}>{displayError}</p>

				<button
					type="submit"
					className={styles.button}>
					{isLoginForm ? "Login" : "Sign Up"}
				</button>
				<p
					className={styles.signIn}
					onClick={toggleSignInForm}>
					{isLoginForm
						? "Don't have an account yet ? Create Account"
						: "Already a User? Login Now"}
				</p>
			</form>
		</div>
	)
}

export default Login
