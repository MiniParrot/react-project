import PropTypes from 'prop-types'
import React from 'react'
import Hotel from './Hotel/Hotel'
import style from './Hotels.module.css'

const propTypes = {
	hotels: PropTypes.array.isRequired,
}

const Hotels = (props) => {
	const count = props.hotels.length

	return (
		<div className={`container space-y-4 ${style.hotels}`}>
			<h2 className={`mx-3 text-left ${style.title}`}>
				Oferty ({count}):
			</h2>
			{props.hotels.map((hotel) => (
				<Hotel
					key={hotel.id}
					theme={props.theme}
					onOpen={props.onOpen}
					{...hotel}
				/>
			))}
		</div>
	)
}

Hotels.propTypes = propTypes

export default React.memo(Hotels)
