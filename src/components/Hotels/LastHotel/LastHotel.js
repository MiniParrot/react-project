import { useContext } from 'react'
import ThemeContext from '../../../context/themeContext'

const LastHotel = (props) => {
	const theme = useContext(ThemeContext)

	return (
		<div className='container mb-8 text-white bg-purple-600 border-2 border-purple-700'>
			<div className='mt-4 border-b-2 border-purple-700'>
				<h2 className='px-6 pb-4 text-md'>
					Ostatnio oglądałeś ten hotel. Nadal jesteś zainteresowany?
				</h2>
			</div>
			<div className='px-6 py-8'>
				<div className='flex justify-between items-center mb-4'>
					<h3 className='text-2xl font-bold'>{props.name}</h3>
					<p>{props.city}</p>
				</div>
				<div className='flex justify-end gap-8'>
					<button
						className={`px-8 py-2 text-white bg-${theme.color}-500 rounded`}
					>
						Tak
					</button>
					<button
						onClick={props.onRemove}
						className={`px-8 py-2 text-white bg-${theme.color}-500 rounded`}
					>
						Nie
					</button>
				</div>
			</div>
		</div>
	)
}

export default LastHotel
