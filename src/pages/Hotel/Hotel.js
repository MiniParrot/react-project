import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReducerContext from '../../context/reducerContext'

const Hotel = () => {
	const { id } = useParams()
	const [hotel, setHotel] = useState({})
	const reducer = useContext(ReducerContext)

	useEffect(() => {
		reducer.dispatch({ type: 'set-loading', loading: true })
		setTimeout(() => {
			fetchHotels()
		}, 3000)
	}, [])

	const fetchHotels = () => {
		setHotel({
			id: 2,
			name: 'Dębowy',
			city: 'Lublin',
			rating: 8.8,
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, saepe!',
			image: '',
		})
		reducer.dispatch({ type: 'set-loading', loading: false })
	}

	console.log(reducer.state.loading)

	if (reducer.state.loading) return null

	return (
		<>
			<h1 className='container text-3xl font-bold'>
				Hotel: {hotel.name}
			</h1>
		</>
	)
}

export default Hotel
