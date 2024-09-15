// Login.js
import React, { useState } from "react"
import styles from "./Login.module.css" // Importing the CSS module
import checkValidData from "../utils/validate"
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"

const Login = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [isLoginForm, setIsLoginForm] = useState(true)
	const [displayError, setDisplayError] = useState("")
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()

		const message = isLoginForm
			? checkValidData("DummyName", email, password)
			: checkValidData(name, email, password)
		if (message) {
			setDisplayError(message)
			return
		}

		try {
			if (isLoginForm) {
				// Login
				const userCredential = await signInWithEmailAndPassword(
					auth,
					email,
					password
				)
				// console.log("UserCredential after login:", userCredential)
				const user = userCredential.user

				// Perform login success actions here
			} else {
				// Sign Up
				const userCredential = await createUserWithEmailAndPassword(
					auth,
					email,
					password
				)
				// console.log("UserCredential after login:", userCredential)
				const user = userCredential.user
			}
			navigate("/")
			setDisplayError("")
		} catch (error) {
			let beautifiedMessage = error.code

			// Beautify the error messages
			switch (error.code) {
				case "auth/user-not-found":
					beautifiedMessage =
						"User not found! Please check your email or sign up to create a new account."
					break
				case "auth/email-already-in-use":
					beautifiedMessage =
						"This email is already in use. Please try logging in or use a different email."
					break
				case "auth/invalid-credential":
					beautifiedMessage =
						"The credentials you provided are invalid. Please try again."
					break
				case "auth/wrong-password":
					beautifiedMessage =
						"The password you entered is incorrect. Please try again."
					break
				case "auth/invalid-email":
					beautifiedMessage =
						"The email address is not valid. Please check the format and try again."
					break
				default:
					beautifiedMessage = error.code
					break
			}

			// Display the beautified error message
			setDisplayError(beautifiedMessage)
		}
	}

	const toggleSignInForm = () => {
		setIsLoginForm((prevState) => !prevState)
	}

	return (
		<div className={styles.container}>
			<form
				className={styles.loginForm}
				onSubmit={handleSubmit}>
				<h2 className={styles.title}>{isLoginForm ? "Login" : "Sign Up"}</h2>

				{!isLoginForm && (
					<div className={styles.formGroup}>
						<input
							type="text"
							id="name"
							placeholder="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className={styles.input}
							required={!isLoginForm} // Required only for sign up
						/>
					</div>
				)}

				<div className={styles.formGroup}>
					<input
						type="email"
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

				{displayError && <p className={styles.error}>{displayError}</p>}

				<button
					type="submit"
					className={styles.button}>
					{isLoginForm ? "Login" : "Sign Up"}
				</button>

				<p
					className={styles.signIn}
					onClick={toggleSignInForm}>
					{isLoginForm
						? "Don't have an account? Create Account"
						: "Already a User? Login Now"}
				</p>
			</form>
		</div>
	)
}

export default Login
