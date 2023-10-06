import React from 'react'
import withMousePosition from '../../hoc/withMousePosition'
import styles from './Header.module.css'

const Header = (props) => {
	const paralaxStyles = {
		translate: `${props.mouseX / 50}px ${props.mouseY / 120}px`,
	}

	return (
		<header className={styles.header}>
			<div className={styles.headerImg} style={paralaxStyles}></div>
			{props.children}
		</header>
	)
}

export default withMousePosition(Header)
