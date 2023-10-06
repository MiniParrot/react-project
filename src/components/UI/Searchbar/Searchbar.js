import PropTypes from 'prop-types'
import React, { useContext, useEffect, useRef, useState } from 'react'
import ThemeContext from '../../../context/themeContext'

const propTypes = {
	onSearch: PropTypes.func.isRequired,
}

const Searchbar = (props) => {
	const [term, setTerm] = useState('')
	const theme = useContext(ThemeContext)
	const inputRef = useRef()

	const searchHandler = () => props.onSearch(term)

	const setFocus = () => inputRef.current.focus()

	useEffect(setFocus, [])

	return (
		<div className='flex space-x-2'>
			<input
				ref={inputRef}
				value={term}
				// onKeyUp={(e) => e.key === 'Enter' && searchHandler()}
				onKeyUp={() => searchHandler()}
				onChange={(e) => setTerm(e.target.value)}
				type='text'
				placeholder='Szukaj...'
				className='search-input px-4 py-2 rounded'
			/>
			<button
				onClick={searchHandler}
				className={`px-4 py-2 text-white bg-${theme.color}-500 rounded`}
			>
				Szukaj
			</button>
		</div>
	)
}

Searchbar.propTypes = propTypes

export default Searchbar
