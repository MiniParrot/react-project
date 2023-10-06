import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import img from '../../../assets/images/hotel.jpg'
import ThemeContext from '../../../context/themeContext'
import useAuth from '../../../hooks/useAuth'

const propTypes = {
	name: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
}

const Hotel = (props) => {
	const [auth] = useAuth()
	const theme = useContext(ThemeContext)

	return (
		<div className='mx-3 p-6 bg-gray-200 border-[1px] border-gray-300 rounded'>
			<div className='flex justify-between items-start mb-4'>
				<img
					src={img}
					alt=''
					className='w-24 border-4 border-white rounded'
				/>
				<div>
					<h3 className='mb-1 text-xl font-bold'>{props.name}</h3>
					<p className='inline-block p-0.5 font-bold bg-white rounded'>
						{props.city}
					</p>
				</div>
				<div>
					<p className='mb-4 text-2xl'>Ocena: {props.rating}</p>
					<Link
						to={`/hotel/${props.id}`}
						onClick={() =>
							props.onOpen({ name: props.name, city: props.city })
						}
						className={`px-4 py-2 w-full text-white bg-${theme.color}-500 rounded`}
					>
						Pokaż
					</Link>
				</div>
			</div>
			<p className='text-gray-700'>{props.description}</p>
			<p className='mt-2'>
				Dostępność pokoi: {auth ? '4' : 'zaloguj się'}
			</p>
		</div>
	)
}

Hotel.propTypes = propTypes

export default Hotel
