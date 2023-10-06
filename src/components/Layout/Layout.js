import Fragment from '../../hoc/Fragment'
import withClass from '../../hoc/withClass'

const Layout = (props) => (
	<Fragment>
		<div className='container'>{props.header}</div>
		<div>{props.menu}</div>
		<div>{props.content}</div>
		<div>{props.footer}</div>
		<div className='text-blue-500 text-teal-500 bg-blue-500 bg-teal-500'></div>
	</Fragment>
)

export default withClass(Layout, 'layout')
