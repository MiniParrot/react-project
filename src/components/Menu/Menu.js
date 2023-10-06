/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import useAuth from '../../hooks/useAuth'
// import AuthContext from '../../context/authContext'
import { Link } from 'react-router-dom'
import ThemeContext from '../../context/themeContext'
import style from './Menu.module.css'

const Menu = () => {
	const [auth, setAuth] = useAuth()

	const theme = useContext(ThemeContext)
	// const auth = useContext(AuthContext)

	// const login = (e) => {
	// 	e.preventDefault()
	// 	auth.login()
	// }

	// const logout = (e) => {
	// 	e.preventDefault()
	// 	auth.logout()
	// }

	return (
		<div className='container'>
			<ul className={`${style.menu} text-${theme.color}-500`}>
				<li className={style.menuItem}>
					<Link to='/'>Home</Link>
				</li>
				<li>
					{auth ? (
						<a href='#' onClick={() => setAuth(false)}>
							Wyloguj
						</a>
					) : (
						<a href='#' onClick={() => setAuth(true)}>
							Zaloguj
						</a>
					)}
				</li>
			</ul>
		</div>
	)
}

export default Menu
