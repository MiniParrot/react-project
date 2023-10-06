import React from 'react'

const ReducerContext = new React.createContext({
	state: {},
	dispatch: () => {},
})

export default ReducerContext
