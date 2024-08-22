import { useEffect, useState } from "react"

export const useOnline = () => {
	const [isOnline, setIsOnline] = useState(true)

	useEffect(() => {
		window.addEventListener("offline", () => {
			setIsOnline(false)
		})
	})
	return isOnline
}
