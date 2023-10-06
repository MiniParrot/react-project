import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root')
const root = createRoot(container)

const state = []
let index = 0

const useState = (defaultValue) => {
	const id = index++

	if (state[id]) return state[id]

	const setValue = (newValue) => {
		state[id][0] = newValue
		render()
	}

	state[id] = [defaultValue, setValue]

	return [defaultValue, setValue]
}

// eslint-disable-next-line no-unused-vars
const HelloMessage = () => {
	const [message, setMessage] = useState('Hello World')
	const [title] = useState('Hey!')

	return (
		<>
			<h1>{title}</h1>
			<input
				type='text'
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
		</>
	)
}

const render = () => {
	index = 0

	root.render(
		<React.StrictMode>
			{/* <HelloMessage /> */}
			<App />
		</React.StrictMode>
	)
}

render()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
