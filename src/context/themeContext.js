import React from 'react'

const ThemeContext = React.createContext({
	color: 'blue',
	changeTheme: () => {},
})

export default ThemeContext
