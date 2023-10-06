import { useContext, useDebugValue } from 'react'
import AuthContext from '../context/authContext'

const useAuth = () => {
	const authContext = useContext(AuthContext)
	const auth = authContext.isAuthenticated

	useDebugValue(auth ? 'Zalogowany' : 'Wylogowany')

	const setAuth = (bool) =>
		bool ? authContext.login() : authContext.logout()

	return [auth, setAuth]
}

export default useAuth
