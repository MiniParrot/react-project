import { useContext } from 'react'
import ThemeContext from '../../../context/themeContext'

export default function ThemeButton(props) {
	const theme = useContext(ThemeContext)

	return (
		<button
			onClick={theme.changeTheme}
			className={`mx-4 px-4 py-2 text-white bg-${theme.color}-500 rounded`}
		>
			Zmień motyw
		</button>
	)
}
