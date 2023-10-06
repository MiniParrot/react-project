import { useContext } from 'react'
import ThemeContext from '../../context/themeContext'

const Footer = () => {
	const theme = useContext(ThemeContext)

	const currentYear = new Date().getFullYear()

	return (
		<div className={`my-6 text-${theme.color}-500 text-center`}>
			Copyright &copy; Noclegi {currentYear}
		</div>
	)
}

export default Footer
