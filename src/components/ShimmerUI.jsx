import React from "react"
import styles from "./ShimmerUI.module.css"

const ShimmerUi = () => {
	return (
		<div className={styles.sc}>
			<div className={styles.card}>
				<div className={styles.img}></div>
				<div className={styles.content}>
					<div className={`${styles.line} ${styles.title}`}></div>
					<div className={`${styles.line} ${styles.text}`}></div>
					<div className={`${styles.line} ${styles.rating}`}></div>
				</div>
			</div>
			<div className={styles.card}>
				<div className={styles.img}></div>
				<div className={styles.content}>
					<div className={`${styles.line} ${styles.title}`}></div>
					<div className={`${styles.line} ${styles.text}`}></div>
					<div className={`${styles.line} ${styles.rating}`}></div>
				</div>
			</div>
			<div className={styles.card}>
				<div className={styles.img}></div>
				<div className={styles.content}>
					<div className={`${styles.line} ${styles.title}`}></div>
					<div className={`${styles.line} ${styles.text}`}></div>
					<div className={`${styles.line} ${styles.rating}`}></div>
				</div>
			</div>
			<div className={styles.card}>
				<div className={styles.img}></div>
				<div className={styles.content}>
					<div className={`${styles.line} ${styles.title}`}></div>
					<div className={`${styles.line} ${styles.text}`}></div>
					<div className={`${styles.line} ${styles.rating}`}></div>
				</div>
			</div>
			{/* Repeat the shimmer card component as needed */}
		</div>
	)
}

export default ShimmerUi
