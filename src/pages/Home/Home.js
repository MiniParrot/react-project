import { useContext, useEffect } from 'react'
import BestHotel from '../../components/Hotels/BestHotel/BestHotel'
import Hotels from '../../components/Hotels/Hotels'
import LastHotel from '../../components/Hotels/LastHotel/LastHotel'
// import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon'
import ReducerContext from '../../context/reducerContext'
import useStateStorage from '../../hooks/useStateStorage'
import useWebsiteTitle from '../../hooks/useWebsiteTitle'

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

const Home = () => {
	useWebsiteTitle('Strona Główna')

	const [lastHotel, setLastHotel] = useStateStorage('lastHotel', '')
	const reducer = useContext(ReducerContext)

	useEffect(() => {
		reducer.dispatch({ type: 'set-loading', loading: true })

		setTimeout(() => {
			reducer.dispatch({ type: 'set-hotels', hotels: backendHotels })
			reducer.dispatch({ type: 'set-loading', loading: false })
		}, 3000)
	}, [])

	const getBestHotel = () => {
		if (reducer.state.hotels.length <= 1) return null

		return reducer.state.hotels.sort((a, b) =>
			a.rating > b.rating ? -1 : 1
		)[0]
	}

	const openHotel = (hotel) => setLastHotel(hotel)
	const removeHotel = () => setLastHotel(null)

	if (reducer.state.loading) return null

	return (
		<>
			{lastHotel ? (
				<LastHotel onRemove={removeHotel} {...lastHotel} />
			) : null}
			{getBestHotel() ? <BestHotel getHotel={getBestHotel} /> : null}
			<Hotels onOpen={openHotel} hotels={reducer.state.hotels} />
		</>
	)
}

export default Home
