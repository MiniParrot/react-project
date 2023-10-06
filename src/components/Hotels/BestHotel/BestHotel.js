import { useContext, useEffect, useState } from 'react'
import ThemeContext from '../../../context/themeContext'

const BestHotel = (props) => {
	const [time, setTime] = useState('')
	const theme = useContext(ThemeContext)
	const bestHotel = props.getHotel()

	useEffect(() => {
		const endTime = new Date()
		endTime.setMinutes(endTime.getMinutes() + 23)
		endTime.setSeconds(endTime.getSeconds() + 32)

		const interval = setInterval(() => {
			const now = new Date()
			const diff = -(now.getTime() - endTime.getTime()) / 1000
			const minutes = Math.floor(diff / 60)
			const seconds = Math.floor(diff % 60)

			setTime(
				`${minutes < 10 ? '0' + minutes : minutes} m ${
					seconds < 10 ? '0' + seconds : seconds
				} s`
			)
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className='container text-white bg-green-600 border-2 border-green-700'>
			<div className='mt-4 border-b-2 border-green-700'>
				<h2 className='px-6 pb-4 text-md'>Najlepszy hotel</h2>
			</div>
			<div className='px-6 py-4'>
				<div className='flex justify-between mb-4'>
					<h3 className='text-2xl font-bold'>{bestHotel.name}</h3>
					<p>Ocena: {bestHotel.rating}</p>
				</div>
				<p className='mb-6'>Do końca promocji pozostało: {time}</p>
				<button
					className={`px-4 py-2 text-white bg-${theme.color}-500 rounded`}
				>
					Pokaż
				</button>
			</div>
		</div>
	)
}

export default BestHotel
