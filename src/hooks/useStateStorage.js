import { useState } from 'react'

const useStateStorage = (key, defaultValue) => {
	const [state, setState] = useState(() => {
		const lsValue = localStorage.getItem(key)
		return lsValue ? JSON.parse(lsValue) : defaultValue
	})

	const setValue = (newValue) => {
		setState(newValue)
		localStorage.setItem(key, JSON.stringify(newValue))
	}

	return [state, setValue]
}

export default useStateStorage
