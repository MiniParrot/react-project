import React, { Component } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hotels from './components/Hotels/Hotels'
import Layout from './components/Layout/Layout'
import Menu from './components/Menu/Menu'
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon'
import Searchbar from './components/UI/Searchbar/Searchbar'
import ThemeButton from './components/UI/ThemeButton/ThemeButton'
import AuthContext from './context/authContext'
import ThemeContext from './context/themeContext'

class App extends Component {
	static contextType = ThemeContext

	hotels = [
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

	state = {
		hotels: this.hotels,
		loading: true,
		theme: 'blue',
		isAuthenticated: false,
	}

	componentDidMount() {
		setTimeout(() => this.setState({ loading: false }), 3000)
	}

	searchHandler = (term) => {
		const hotels = this.hotels.filter((hotel) =>
			hotel.name.toLowerCase().includes(term.toLowerCase())
		)

		this.setState({ hotels })
	}

	changeTheme = () => {
		const newTheme = this.state.theme === 'blue' ? 'teal' : 'blue'

		this.setState({ theme: newTheme })
	}

	render() {
		const header = (
			<Header>
				<Searchbar onSearch={(term) => this.searchHandler(term)} />
				<ThemeButton />
			</Header>
		)

		const menu = <Menu />

		const content = this.state.loading ? (
			<LoadingIcon />
		) : (
			<Hotels hotels={this.state.hotels} />
		)

		const footer = <Footer />

		return (
			<AuthContext.Provider
				value={{
					isAuthenticated: this.state.isAuthenticated,
					login: () => this.setState({ isAuthenticated: true }),
					logout: () => this.setState({ isAuthenticated: false }),
				}}
			>
				<ThemeContext.Provider
					value={{
						color: this.state.theme,
						changeTheme: this.changeTheme,
					}}
				>
					<Layout
						header={header}
						menu={menu}
						content={content}
						footer={footer}
					/>
				</ThemeContext.Provider>
			</AuthContext.Provider>
		)
	}
}

export default App
