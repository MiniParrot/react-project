export const reducer = (state, action) => {
	switch (action.type) {
		case 'set-hotels':
			return { ...state, hotels: action.hotels }
		case 'set-theme':
			const newTheme = state.theme === 'blue' ? 'teal' : 'blue'
			return { ...state, theme: newTheme }
		case 'set-loading':
			return { ...state, loading: false }
		case 'login':
			return { ...state, isAuthenticated: true }
		case 'logout':
			return { ...state, isAuthenticated: false }
		default:
			throw new Error(
				'Error: Akcja nie została odnaleziona - ' + action.type
			)
	}
}

export const initialState = {
	hotels: [],
	loading: true,
	theme: 'blue',
	isAuthenticated: false,
}
