import React from 'react'

const withMousePosition = (WrappedComponent) => {
	class Hoc extends React.Component {
		state = {
			mouseX: 0,
			mouseY: 0,
		}

		componentDidMount() {
			document.addEventListener('mousemove', this.updateMousePosition)
		}

		updateMousePosition = (e) =>
			this.setState({ mouseX: e.pageX, mouseY: e.pageY })

		render() {
			return (
				<WrappedComponent
					mouseX={this.state.mouseX}
					mouseY={this.state.mouseY}
					{...this.props}
				/>
			)
		}
	}

	return Hoc
}

export default withMousePosition
