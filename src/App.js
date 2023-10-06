import { useReducer } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import InspiringQuotes from './components/InspiringQuotes/InspiringQuotes'
import Layout from './components/Layout/Layout'
import Menu from './components/Menu/Menu'
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon'
import Searchbar from './components/UI/Searchbar/Searchbar'
import ThemeButton from './components/UI/ThemeButton/ThemeButton'
import AuthContext from './context/authContext'
import ReducerContext from './context/reducerContext'
import ThemeContext from './context/themeContext'
import Home from './pages/Home/Home'
import Hotel from './pages/Hotel/Hotel'
import { initialState, reducer } from './reducer'

const backendHotels = [
	{
		id: 1,
		name: 'Pod akacjami',
		city: 'Warszawa',
		rating: 8.3,
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, saepe!',
		image: '',
	},
	{
		id: 2,
		name: 'Dębowy',
		city: 'Lublin',
		rating: 8.8,
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, saepe!',
		image: '',
	},
]

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const searchHandler = (term) => {
		const hotels = backendHotels.filter((hotel) =>
			hotel.name.toLowerCase().includes(term.toLowerCase())
		)
		dispatch({ type: 'set-hotels', hotels })
	}

	const changeTheme = () => {
		dispatch({ type: 'set-theme' })
	}

	const header = (
		<Header>
			<InspiringQuotes />
			<Searchbar onSearch={(term) => searchHandler(term)} />
			<ThemeButton />
		</Header>
	)

	const menu = <Menu />

	const content = (
		<>
			<Routes>
				<Route path='/' element={<Home />} />

				<Route path='/hotel/:id' element={<Hotel />} />
			</Routes>

			{state.loading ? <LoadingIcon /> : null}
		</>
	)

	const footer = <Footer />

	return (
		<Router>
			<AuthContext.Provider
				value={{
					isAuthenticated: state.isAuthenticated,
					login: () => dispatch({ type: 'login' }),
					logout: () => dispatch({ type: 'logout' }),
				}}
			>
				<ThemeContext.Provider
					value={{
						color: state.theme,
						changeTheme,
					}}
				>
					<ReducerContext.Provider
						value={{ state: state, dispatch: dispatch }}
					>
						<Layout
							header={header}
							menu={menu}
							content={content}
							footer={footer}
						/>
					</ReducerContext.Provider>
				</ThemeContext.Provider>
			</AuthContext.Provider>
		</Router>
	)
}

export default App
